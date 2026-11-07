import { useEffect, useRef, useState } from "react";
import { fallbackVideos, getLatestVideos } from "../data/youtube";

export default function FloatingVideo() {
  const [videos, setVideos] = useState(fallbackVideos.slice(0, 7));
  const [index, setIndex] = useState(0);
  const [isWatching, setIsWatching] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    let active = true;
    const updateVideos = (forceRefresh = false) => getLatestVideos(forceRefresh).then((latest) => {
      if (active && latest.length) setVideos(latest.slice(0, 7));
    });
    updateVideos();
    const refreshTimer = window.setInterval(() => updateVideos(true), 15 * 60 * 1000);
    return () => {
      active = false;
      window.clearInterval(refreshTimer);
    };
  }, []);

  useEffect(() => {
    if (isWatching || isClosed || videos.length < 2) return undefined;

    intervalRef.current = window.setInterval(() => {
      setIndex((previous) => (previous + 1) % videos.length);
    }, 8000);

    return () => window.clearInterval(intervalRef.current);
  }, [isWatching, isClosed, videos.length]);

  const closeVideo = () => {
    setIsClosed(true);
    window.clearInterval(intervalRef.current);
  };

  if (isClosed || videos.length === 0) return null;

  const video = videos[index % videos.length];

  return (
    <div
      className="floating-video"
      onMouseEnter={() => setIsWatching(true)}
      onMouseLeave={() => setIsWatching(false)}
      onTouchStart={() => setIsWatching(true)}
      onTouchEnd={() => setIsWatching(false)}
    >
      <button className="close-btn" onClick={closeVideo} aria-label="Close video"></button>

      <p>{video.title}</p>

      <iframe
        src={`https://www.youtube.com/embed/${video.id}?rel=0`}
        title={video.title}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
