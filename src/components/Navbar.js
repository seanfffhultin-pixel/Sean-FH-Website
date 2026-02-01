import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      document.querySelector(".navbar")
        .classList.toggle("scrolled", window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;

      const progressFill = document.getElementById("scroll-progress-fill");

      if (progressFill) {
        progressFill.style.width = `${scrollPercent}%`;
      }

      // Show bar only after scrolling a little
      if (scrollTop > 50) {
        setShowProgress(true);
      } else {
        setShowProgress(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="nav-logo">
          seanfh
        </Link>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/reviews" className="nav-link" onClick={() => setMenuOpen(false)}>Reviews</Link></li>
        </ul>

      </div>

      {/* Scroll Progress Bar */}
      <div
        className={`scroll-progress-bar 
        ${showProgress ? "visible" : ""} 
        ${menuOpen ? "hidden" : ""}`}
      >
        <div id="scroll-progress-fill"></div>
      </div>

    </nav>
  );
}
