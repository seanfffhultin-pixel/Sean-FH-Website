import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current && videoRef.current.paused) {
        setVideoFailed(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home-hero">
      {!videoFailed && (
        <video
          ref={videoRef}
          className="home-hero-video"
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
          className="home-hero-fallback"
          src="/images/IMG_4619.jpeg"
          alt="Hero background"
        />
      )}

      <div className="home-hero-content">
        <img
          src="/assets/IMG_0871-2.jpeg"
          alt="Sean FH"
          className="profile-pic"
        />
        <h1 className="home-hero-title">
          <span>Sean FH</span>
          Travels
        </h1>
        <p className="home-hero-sub">
          Flight reviews, aviation stories, and the journeys in between.
        </p>

        <div className="home-hero-buttons">
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
