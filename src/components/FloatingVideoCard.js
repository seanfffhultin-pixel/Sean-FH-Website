

import { useEffect, useState, useRef } from "react";

const videos = [
  {
    title: "LONG-HAUL On Asia's UNDERDOG! (Does It Live Up To The Rest?)",
    url: "https://www.youtube.com/embed/Aa03AJwh9f8"
  },
  {
    title: "Plane Spotting at Phuket's BEACH Airport!",
    url: "https://www.youtube.com/embed/9e5lkqjr8a0"
  },
  {
    title: "The Reality of THAI AIRWAYS DOMESTIC...",
    url: "https://www.youtube.com/embed/n_o-uCUZOBQ"
  }
];

export default function FloatingVideo() {
  const [index, setIndex] = useState(0);
  const [isWatching, setIsWatching] = useState(false);
  const [isClosed, setIsClosed] = useState(
    localStorage.getItem("videoClosed") === "true"
  );

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isWatching || isClosed) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(intervalRef.current);
  }, [isWatching, isClosed]);

  const closeVideo = () => {
    setIsClosed(true);
    localStorage.setItem("videoClosed", "true");
    clearInterval(intervalRef.current);
  };

  if (isClosed) return null;

  return (
    <div
      className="floating-video"
      onMouseEnter={() => setIsWatching(true)}
      onMouseLeave={() => setIsWatching(false)}
      onTouchStart={() => setIsWatching(true)}
      onTouchEnd={() => setIsWatching(false)}
    >
      <button className="close-btn" onClick={closeVideo}>×</button>

      <p>{videos[index].title}</p>

      <iframe
        src={`${videos[index].url}?rel=0`}
        title={videos[index].title}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
