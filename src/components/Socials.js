import React from "react";

export default function Socials() {
  return (
    <section className="socials">
      <h2>Follow Me</h2>

      <div className="social-buttons">
        

        <a 
            href="https://www.instagram.com/sean_fh_travels"
            target="_blank"
            rel="noreferrer"
            className="btn instagram-btn"
          >
            Instagram
          </a>

        <a 
            href="https://www.tiktok.com/@seanfh"
            target="_blank"
            rel="noreferrer"
            className="btn tiktok-btn"
          >
            TikTok
          </a>

        <a 
            href="https://youtube.com/@seanfhtravels?"
            target="_blank"
            rel="noreferrer"
            className="btn youtube-btn"
          >
            YouTube
          </a>
      </div>
    </section>
  );
}
