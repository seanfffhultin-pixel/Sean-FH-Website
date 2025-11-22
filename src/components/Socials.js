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
          className="social-btn instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a 
          href="https://www.tiktok.com/@seanfh"
          target="_blank"
          rel="noreferrer"
          className="social-btn tiktok"
        >
          <i className="fa-brands fa-tiktok"></i>
        </a>

        <a 
          href="https://youtube.com/@seanfhtravels"
          target="_blank"
          rel="noreferrer"
          className="social-btn youtube"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </section>
  );
}
