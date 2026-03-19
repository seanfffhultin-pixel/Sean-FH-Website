import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (!navbar) return;

      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      const showNavbar = currentScrollY <= 0 || !scrollingDown;
      navbar.classList.toggle("nav-hidden", !showNavbar);

      const hero = document.querySelector(".home-hero");
      const navHeight = navbar.offsetHeight || 0;
      const heroRect = hero ? hero.getBoundingClientRect() : null;
      const extraHeroPx = 0;
      const overHero = heroRect
        ? heroRect.top <= navHeight && heroRect.bottom + extraHeroPx >= navHeight
        : window.scrollY <= 0;

      navbar.classList.toggle("over-hero", overHero);
      if (overHero) {
        navbar.classList.remove("scrolled");
      } else {
        navbar.classList.toggle("scrolled", window.scrollY > 20);
      }

      lastScrollY.current = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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

  useEffect(() => {
    if (!menuOpen) return;

    const handleOutsideClick = (event) => {
      const menuEl = menuRef.current;
      const hamburgerEl = hamburgerRef.current;

      if (!menuEl || !hamburgerEl) return;

      const clickedMenu = menuEl.contains(event.target);
      const clickedHamburger = hamburgerEl.contains(event.target);

      if (!clickedMenu && !clickedHamburger) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

        <Link to="/" className="nav-logo" aria-label="Home">
          <img
            src="/images/Seanfh NEW logo (modified).png"
            alt="Sean FH Logo"
            className="nav-logo-img"
          />
        </Link>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          ref={hamburgerRef}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul
          className={`nav-menu ${menuOpen ? "open" : ""}`}
          ref={menuRef}
        >
          
          <li>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/reviews" className="nav-link" onClick={() => setMenuOpen(false)}>
              Reviews
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="nav-link" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
          </li>
          

          <div className="nav-socials">
            <a href="https://youtube.com/@seanfhtravels" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/seanfhtravels" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://tiktok.com/@seanfh" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </ul>


        

        </div>
      </nav>

      {/* Scroll Progress Bar */}
      <div
        className={`scroll-progress-bar 
        ${showProgress ? "visible" : ""} 
        ${menuOpen ? "hidden" : ""}`}
      >
        <div id="scroll-progress-fill"></div>
      </div>
    </>
  );
}
