const CACHE_KEY = "seanfh-youtube-videos-v3";
const VIDEO_DETAILS_CACHE_KEY = "seanfh-youtube-video-details-v1";
const CACHE_TTL = 15 * 60 * 1000;
const VIDEO_LIMIT = 7;
const UPLOADS_TO_CHECK = 50;
const MIN_LONG_FORM_SECONDS = 3 * 60;

// Kept locally so the page still renders if the API key is not set or YouTube
// is temporarily unavailable. The live feed replaces this list automatically.
export const fallbackVideos = [
  {
    id: "nt69ebmsfrI",
    title: "I TRIED RYANAIR WITH NO EXTRAS! (I HATED IT!)",
    description:
      "I tried Ryanair with absolutely NO EXTRAS! It was not a pleasant experience. From slow boarding, no seat selection, little comfort and no meals, this was a flight that really tested my patience. But it was ALL MY FAULT (but totally worth it!)",
    thumbnail: "/assets/RY_4.png",
  },
  { id: "nC9IXGwQ6IY", title: "BRITISH AIRWAYS SAVED ME FROM A SNOWSTORM! 🤯" },
  { id: "6YFTWjdhpJ0", title: "THIS ETIHAD FLIGHT WAS DISGUSTING 🤢! (IT STANK!)" },
  { id: "QyKWkWcN2DU", title: "MY MOST PERFECT FLIGHT EVER! - FLYING THE ETIHAD 787-10!" },
  { id: "P63RLWre9Fk", title: "IS ETIHAD'S OLD 777 ACTUALLY GOOD?!" },
  { id: "XCsjAJMhWcc", title: "IS CATHAY PACIFIC THE WORLD'S BEST AIRLINE?" },
  { id: "0AvTiMiBXuA", title: "The FOGGIEST Flight OF MY LIFE! (EasyJet From LONDON SOUTHEND AIRPORT!)" },
];

let pendingRequest;

function readCachedVideos() {
  try {
    const cached = JSON.parse(window.localStorage.getItem(CACHE_KEY));
    if (cached?.savedAt && Date.now() - cached.savedAt < CACHE_TTL && Array.isArray(cached.videos)) {
      return cached.videos;
    }
  } catch (error) {
    // Ignore unavailable storage and malformed cache data.
  }
  return null;
}

async function readJson(url, apiKey) {
  const response = await fetch(url, { headers: { "x-goog-api-key": apiKey } });
  const data = await response.json();
  if (!response.ok || data.error) {
    throw new Error(data.error?.message || "Unable to load videos from YouTube.");
  }
  return data;
}

function durationInSeconds(isoDuration = "") {
  const match = isoDuration.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if (!match) return 0;
  return Number(match[1] || 0) * 3600 + Number(match[2] || 0) * 60 + Number(match[3] || 0);
}

async function requestVideos(apiKey) {
  const channelUrl = new URL("https://www.googleapis.com/youtube/v3/channels");
  channelUrl.search = new URLSearchParams({
    part: "contentDetails",
    forHandle: "@seanfhtravels",
  });
  const channelData = await readJson(channelUrl, apiKey);
  const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploadsPlaylistId) throw new Error("Could not find the YouTube uploads playlist.");

  const playlistUrl = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
  playlistUrl.search = new URLSearchParams({
    part: "snippet,contentDetails",
    playlistId: uploadsPlaylistId,
    maxResults: String(UPLOADS_TO_CHECK),
  });
  const playlistData = await readJson(playlistUrl, apiKey);
  const playlistItems = playlistData.items || [];
  const videoIds = playlistItems
    .map((item) => item.contentDetails?.videoId || item.snippet?.resourceId?.videoId)
    .filter(Boolean);

  if (!videoIds.length) return [];

  const videoDetailsUrl = new URL("https://www.googleapis.com/youtube/v3/videos");
  videoDetailsUrl.search = new URLSearchParams({
    part: "contentDetails,statistics",
    id: videoIds.join(","),
  });
  const videoDetails = await readJson(videoDetailsUrl, apiKey);
  const durationById = new Map(
    (videoDetails.items || []).map((video) => [video.id, {
      duration: durationInSeconds(video.contentDetails?.duration),
      viewCount: Number(video.statistics?.viewCount),
    }])
  );

  return playlistItems
    .map(({ snippet, contentDetails }) => {
      const id = contentDetails?.videoId || snippet?.resourceId?.videoId;
      if (
        !id ||
        !snippet?.title ||
        /^(private|deleted video)$/i.test(snippet.title) ||
        (durationById.get(id)?.duration || 0) <= MIN_LONG_FORM_SECONDS
      ) return null;
      const thumbnails = snippet.thumbnails || {};
      return {
        id,
        title: snippet.title,
        description: snippet.description || "",
        thumbnail: thumbnails.maxres?.url || thumbnails.high?.url || thumbnails.medium?.url || `https://img.youtube.com/vi/${id}/0.jpg`,
        publishedAt: contentDetails?.videoPublishedAt || snippet.publishedAt,
        viewCount: durationById.get(id)?.viewCount,
      };
    })
    .filter(Boolean)
    .slice(0, VIDEO_LIMIT);
}

export function getLatestVideos(forceRefresh = false) {
  if (pendingRequest) return pendingRequest;

  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  if (!apiKey) return Promise.resolve(fallbackVideos);

  if (!forceRefresh) {
    const cachedVideos = readCachedVideos();
    if (cachedVideos) return Promise.resolve(cachedVideos);
  }

  pendingRequest = requestVideos(apiKey)
    .then((videos) => {
      if (videos.length) {
        try {
          window.localStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), videos }));
        } catch (error) {
          // Continue without persistent cache when storage is unavailable.
        }
        return videos;
      }
      return fallbackVideos;
    })
    .catch(() => fallbackVideos)
    .finally(() => {
      pendingRequest = null;
    });

  return pendingRequest;
}

export async function getVideoDetailsByIds(videoIds) {
  const uniqueIds = [...new Set(videoIds.filter(Boolean))];
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  if (!apiKey || uniqueIds.length === 0) return {};

  let cached = {};
  try {
    const stored = JSON.parse(window.localStorage.getItem(VIDEO_DETAILS_CACHE_KEY));
    if (stored?.savedAt && Date.now() - stored.savedAt < CACHE_TTL && stored.videos) {
      cached = stored.videos;
    }
  } catch (error) {
    // Ignore unavailable storage and malformed cache data.
  }

  const missingIds = uniqueIds.filter((id) => !cached[id]);
  if (missingIds.length) {
    try {
      const url = new URL("https://www.googleapis.com/youtube/v3/videos");
      url.search = new URLSearchParams({
        part: "snippet,contentDetails,statistics",
        id: missingIds.join(","),
      });
      const response = await readJson(url, apiKey);
      const updated = { ...cached };
      (response.items || []).forEach((video) => {
        const thumbnails = video.snippet?.thumbnails || {};
        updated[video.id] = {
          id: video.id,
          title: video.snippet?.title || "",
          description: video.snippet?.description || "",
          thumbnail: thumbnails.maxres?.url || thumbnails.high?.url || thumbnails.medium?.url,
          viewCount: Number(video.statistics?.viewCount),
          duration: video.contentDetails?.duration || "",
        };
      });
      cached = updated;
      try {
        window.localStorage.setItem(VIDEO_DETAILS_CACHE_KEY, JSON.stringify({ savedAt: Date.now(), videos: cached }));
      } catch (error) {
        // Continue without persistent cache when storage is unavailable.
      }
    } catch (error) {
      // Return details already cached; review video links remain usable without metadata.
    }
  }

  return uniqueIds.reduce((details, id) => {
    if (cached[id]) details[id] = cached[id];
    return details;
  }, {});
}
