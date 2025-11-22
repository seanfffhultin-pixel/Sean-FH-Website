import React from "react";

export default function Podcast() {
  return (
    <section id="podcast" className="podcast">
      <h2>🎧 AirAware — My Podcast</h2>

      <p className="podcast-description">
        Listen to episodes of AirAware right here on the site!  
        Featuring aviation chat, flight reviews, travel news and more.
      </p>

      <div className="podcast-embed">
        <iframe 
            title="AirAware Podcast Player"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/show/4dqY73iC43py63KCHxJPu3?utm_source=generator"
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>

      </div>
    </section>
  );
}
