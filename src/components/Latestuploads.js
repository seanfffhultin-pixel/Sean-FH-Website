import React from "react";
import "../App.css"; // We'll create this CSS file

export default function LatestUploadsWithThumbnails() {
  const videos = [
    {
      id: "Aa03AJwh9f8",
      title: "LONG-HAUL On Asia's UNDERDOG! (Does It Live Up To The Rest?)",
    },
    {
      id: "kGnGlGt-Dco",
      title: "Flying ECONOMY on IndiGo’s Hidden Dreamliner (Amsterdam – Mumbai)",
    },
    {
      id: "WNAmr-5lGGk",
      title: "Ethiopian Airlines SAVED ME! (And They are AMAZING!)",
    },
    {
      id: "AICcfhtgT90",
      title: "You Should Try THIS Thai Sleeper Train!",
    },
    {
      id: "KaTbTOHbTaM",
      title: "My STRANGE Rwandair Economy Experience...",
    },
    {
      id: "7xaK10g-uXM",
      title: "Why Flying THAI AIRASIA is GREAT?!",
    },
  ];

  return (
    <section className="latest-uploads-section" id="latest">
      <h3 className="section-title">More Recent Reviews</h3>

      <div className="videos-grid">
        {videos.map((video, idx) => (
          <a
            key={idx}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noreferrer"
            className="video-card-link"
          >
            <div className="video-card">
              <img
                src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                alt={video.title}
                className="video-frame"
              />
              <p className="video-title">{video.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
