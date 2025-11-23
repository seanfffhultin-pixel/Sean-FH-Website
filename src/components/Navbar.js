import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Left: Logo */}
        <Link to="/" className="nav-logo">
          Sean FH Travels
        </Link>

        {/* Right: Menu */}
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/Reviews" className="nav-link">Reviews</Link></li>
        </ul>
      </div>
    </nav>
  );
}
