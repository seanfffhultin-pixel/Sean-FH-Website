import React from "react";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="hero">
      <img 
        src="https://i.postimg.cc/YCrpLHrJ/IMG-4619.jpg" 
        alt="Header Banner" 
        className="hero-image"
        style={{ filter: "blur(5px) brightness(0.7)" }} // blur + darken
      />

      

      <div className="hero-content">
        <img 
          src="https://i.postimg.cc/ncft3LHK/IMG-2168.jpg"
          alt="Profile"
          className="profile-pic"
          
        />

        <h2>Welcome to Sean FH Travels</h2>
        <p>Flight reviews, aviation stories, and more!</p>

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
