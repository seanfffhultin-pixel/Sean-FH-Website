import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <img 
        src="https://i.postimg.cc/65JMk240/IMG-2865.jpg" 
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
        <p>Flight reviews, aviation stories, and travel adventures!</p>

        <div className="hero-buttons">
          <a 
            href="#videos"
            className="btn"
          >Learn More</a>

          <a 
            href="https://youtube.com/@seanfhtravels?si=sJEemlUO4uDnsX5C"
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
