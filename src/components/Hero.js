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
    <section className="hero">
      {!videoFailed && (
        <video
          ref={videoRef}
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
          src="/images/IMG_4619.jpeg"
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
