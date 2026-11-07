import React, { useEffect, useState } from "react";
import "../App.css";
import { fallbackVideos, getLatestVideos } from "../data/youtube";

export default function LatestUploadsWithThumbnails() {
  const [allVideos, setAllVideos] = useState(fallbackVideos);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    let active = true;
    const updateVideos = (forceRefresh = false) => getLatestVideos(forceRefresh).then((videos) => {
      if (active) setAllVideos(videos);
    });
    updateVideos();
    const timer = window.setInterval(() => updateVideos(true), 15 * 60 * 1000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);

  // The featured card shows the newest upload. Show the next six beneath it.
  const videos = allVideos.slice(1, 7);

  return (
    <section className="latest-uploads-section" id="latest">
      <h3 className="section-title">More Recent Reviews</h3>

      <div className="videos-grid">
        {videos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noreferrer"
            className="video-card-link"
            onClick={(event) => {
              event.preventDefault();
              setSelectedVideo(video);
            }}
          >
            <div className="video-card">
              <img
                src={video.thumbnail || `https://img.youtube.com/vi/${video.id}/0.jpg`}
                alt={video.title}
                className="video-frame"
              />
              <p className="video-title">{video.title}</p>
              <p className="video-views">
                {Number.isFinite(video.viewCount)
                  ? `${new Intl.NumberFormat().format(video.viewCount)} views`
                  : "Views unavailable"}
              </p>
            </div>
          </a>
        ))}
      </div>

      {selectedVideo && (
        <div className="featured-modal" onClick={() => setSelectedVideo(null)}>
          <div
            className="featured-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={selectedVideo.title}
            onClick={(event) => event.stopPropagation()}
          >
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
