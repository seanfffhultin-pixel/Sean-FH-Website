import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="hero">
      {!videoFailed && (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}
      {videoFailed && (
        <img
          className="hero-fallback"
          src="https://i.postimg.cc/QCcScgVB/IMG-4619.jpg"
          alt="Hero background"
        />
      )}

      <div className="hero-content">
        <img 
          src="https://i.postimg.cc/ncft3LHK/IMG-2168.jpg"
          alt="Profile"
          className="profile-pic"
          
        />
      

        <div className="hero-welcome-1">
          <h2>Welcome to</h2>
        </div>

        <div className="hero-welcome-2">
          <h2>Sean FH Travels</h2>
        </div>

        <div className="hero-sub">
          <h2>Flight reviews, aviation stories, and more!</h2>
        </div>
          

        <div className="hero-buttons">

          <Link to="/about" className="btn">
            Learn More
          </Link>

          <a 
            href="https://youtube.com/@seanfhtravels"
            target="_blank"
            rel="noreferrer"
            className="btn youtube-btn"
          >
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
