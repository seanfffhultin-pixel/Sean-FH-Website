import React, { useState } from "react";
import "../App.css";

const airlines = [
  "https://i.postimg.cc/yxjTYnRD/logo-cathay-pacific.png",
  "https://i.postimg.cc/tJGBsBQR/Bangkok-Airways-Logo-svg.png",
  "https://i.postimg.cc/90yNbvtq/Indi-Go-Airlines-logo-svg.png",
  "https://i.postimg.cc/9fktsJJk/Fly-Safair-Logo-Transparent-Background.png",
  "https://i.postimg.cc/kMKFhN8f/Ethiopian-Airlines-Logo-svg.png",
  "https://i.postimg.cc/jScmGYVN/Rwand-Air-Logotype.png",
  "https://i.postimg.cc/c463nsyv/Air-Asia-Logo-2009.png",
  "https://i.postimg.cc/JhK7xkjr/Scandinavian-Airlines-Logo-wine.png",
  "https://i.postimg.cc/rsVSbWP7/40c3a0f56bb121e5d42c6d45a7b745d282e7bacd.png",
  "https://i.postimg.cc/HkhByShL/Logo1-1.png",
  "https://i.postimg.cc/qMBhX2Gq/vietnam-airlines-new-logo.jpg",
  "https://i.postimg.cc/sftrczyC/Logo-Saudia.avif",
  "https://i.postimg.cc/3N8R1H24/United-logo.jpg",
  "https://i.postimg.cc/vmG2zqcQ/Qantas-Logo.png",
  "https://i.postimg.cc/15Nd5Vk3/Singapore-Airlines-Logo.png",
  "https://i.postimg.cc/gj2zRHPb/Scoot-logo-svg.png",
  "https://i.postimg.cc/ZYxj5FR6/871-8713543-tap-air-portugal-has-agreed-to-offer-a.png",
  "https://i.postimg.cc/X7XNYLLb/Swiss-International-Air-Lines-logo.png",
  "https://i.postimg.cc/Y0vsFvjz/Norwegian-Logo-2024-svg.png",
  "https://i.postimg.cc/8Cb9g8qW/american-airlines-logo.webp",
  "https://i.postimg.cc/W3XBgR81/Easy-Jet-logo-svg.png",
  "https://i.postimg.cc/8zMS70rr/Lufthansa-Logo.png",
  "https://i.postimg.cc/bvPjk9QW/Srilankan-Airlines-logo.jpg",
  "https://i.postimg.cc/X7hCKT4z/oneworld-alliance-royal-jordanian-logo.webp",
  "https://i.postimg.cc/YCFBVsry/Logo-Air-China.png",
  "https://i.postimg.cc/qR4r2xdv/Etihad-airways-logo-svg.png",
  "https://i.postimg.cc/L8gmSsT3/Air-Berlin-Logo-svg.png",
  "https://i.postimg.cc/dtdsC1bn/us-airways-3-logo-png-transparent.png",
  "https://i.postimg.cc/1XWymn2H/9008ffa0ee183844559da1714a7d585ff0a8b4c1.png",
  "https://i.postimg.cc/rsQJpczh/Germanwing-s-logo.jpg",
  "https://i.postimg.cc/kGfc59DL/Nok-Air-Logo-og.png",
    "https://i.postimg.cc/RhTNcZY8/Thai-Airways-logo-svg.png",
    "https://i.postimg.cc/X78C5sS1/britishairways-21686125301575-thumb.jpg",
    "https://i.postimg.cc/t49rznV6/FR-copy.png",
    "https://i.postimg.cc/gjqVw44Y/Flybe-copy-svg.png",
    "https://i.postimg.cc/mrhCBCnk/Turkish-Airlines-logo-2019-compact-svg.png",

];


const loopedAirlines = [...airlines, ...airlines, ...airlines];

export default function AirlineCarousel() {
  const startIndex = airlines.length;
  const [index, setIndex] = useState(startIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return; // ignore clicks during animation
    setIndex((prev) => prev + 1);
    setIsAnimating(true);
  };

  const prevSlide = () => {
    if (isAnimating) return; // ignore clicks during animation
    setIndex((prev) => prev - 1);
    setIsAnimating(true);
  };

  const handleTransitionEnd = () => {
    // reset position for infinite loop
    if (index >= airlines.length * 2) setIndex(startIndex);
    if (index <= 0) setIndex(startIndex);

    // allow next click
    setIsAnimating(false);
  };

  return (
    <div className="airline-carousel-wrapper">
      <div className="airline-carousel-section">
        <h3 className="airline-carousel-title">Airlines I've Flown</h3>

        <div className="airline-carousel-container">
          <button
            className="airline-carousel-btn airline-carousel-btn-left"
            onClick={prevSlide}
          >
            ‹
          </button>

          <div className="airline-carousel-viewport">
            <div
              className="airline-carousel-track"
              style={{
                transform: `translateX(-${index * 33.33}%)`,
                transition: "transform 0.45s cubic-bezier(.22,.61,.36,1)"
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {loopedAirlines.map((img, i) => (
                <div className="airline-carousel-item" key={i}>
                  <div className="airline-carousel-logo">
                    <img src={img} alt="Airline logo" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="airline-carousel-btn airline-carousel-btn-right"
            onClick={nextSlide}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}