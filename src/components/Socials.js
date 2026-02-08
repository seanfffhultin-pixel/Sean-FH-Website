import React from "react";
import "../App.css"; // Ensure your styles are imported

export default function Socials() {
  return (
    <section className="socials">
      <h2>Follow Me</h2>

      <div className="social-buttons">
        <a 
          href="https://www.instagram.com/seanfhtravels?igsh=c3J0MGVtdnY2d3A0&utm_source=qr"
          target="_blank"
          rel="noreferrer"
          className="social-btn instagram"
          title="Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a 
          href="https://www.tiktok.com/@seanfh"
          target="_blank"
          rel="noreferrer"
          className="social-btn tiktok"
          title="TikTok"
        >
          <i className="fa-brands fa-tiktok"></i>
        </a>

        <a 
          href="https://youtube.com/@seanfhtravels"
          target="_blank"
          rel="noreferrer"
          className="social-btn youtube"
          title="YouTube"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </section>
  );
}
