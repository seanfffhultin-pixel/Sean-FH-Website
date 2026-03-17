import React from "react";

export default function Podcast() {
  return (
    <section id="podcast" className="podcast-wrapper">
      <h2 className="podcast-title">🎧 AirAware — My Podcast</h2>

      <p className="podcast-description">
        Listen to episodes of AirAware right here on the site!  
        Featuring the UNKNOWN history of aviation.
        Available on most podcast platforms, including Spotify and Apple Podcasts.
      </p>

      <div className="podcast-section">
        <div className="podcast-embeds">
          <div className="podcast-embed spotify-embed">
            <iframe 
              title="AirAware on Spotify"
              src="https://open.spotify.com/embed/show/4dqY73iC43py63KCHxJPu3?utm_source=generator"
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

          </div>

          <div className="podcast-embed apple-embed">
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="100%"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              src="https://embed.podcasts.apple.com/gb/podcast/airaware/id1853964416"
              title="AirAware on Apple Podcasts"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
