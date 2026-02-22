import React from "react";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      

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
