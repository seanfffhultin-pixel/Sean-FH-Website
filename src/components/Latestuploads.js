import React from "react";
import "../App.css"; // We'll create this CSS file

export default function LatestUploadsWithThumbnails() {
  const videos = [
    {
      id: "0AvTiMiBXuA",
      title: "The FOGGIEST Flight OF MY LIFE! (EasyJet From LONDON SOUTHEND AIRPORT!)",
    },
    {
      id: "FYugMR7V92U",
      title: "Flying IndiGo | A VERY BASIC Airline",
    },
    {
      id: "OW6BUq3LEG0",
      title: "Is Bangkok Airways THE BEST REGIONAL AIRLINE? (Flying Phuket - Bangkok)",
    },
    {
      id: "bY2J-BaVT4w",
      title: "Is FlySafair Just Another RYANAIR? (From LANSERIA!)",
    },
    {
      id: "n_o-uCUZOBQ",
      title: "The Reality of THAI AIRWAYS DOMESTIC...",
    },
    {
      id: "Aa03AJwh9f8",
      title: "LONG-HAUL On Asia's UNDERDOG! (Does It Live Up To The Rest?)",
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
