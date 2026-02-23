import React, { useState } from "react";
import "../App.css";

const airlines = [
  "images/Cathay-Pacific-Logo.png",
  "images/Bangkok_Airways_Logo.svg.png",
  "images/IndiGo_Airlines_logo.svg.png",
  "images/FlySafair_Logo_Transparent_Background.png",
  "images/Ethiopian_Airlines_Logo.svg.png",
  "images/RwandAir_Logotype.png",
  "images/AirAsia-Logo-2009.png",
  "images/Scandinavian_Airlines-Logo.wine.png",
  "images/40c3a0f56bb121e5d42c6d45a7b745d282e7bacd.png",
  "images/Logo1-1.png",
  "images/vietnam_airlines_new_logo.jpg",
  "images/Logo-Saudia-.avif",
  "images/United-logo.jpg",
  "images/Qantas-Logo.png",
  "images/Singapore-Airlines-Logo.png",
  "images/Scoot_logo.svg.png",
  "images/871-8713543_tap-air-portugal-has-agreed-to-offer-a.png",
  "images/Swiss-International-Air-Lines-logo.png",
  "images/Norwegian_Logo_2024.svg.png",
  "images/american-airlines-logo.webp",
  "images/EasyJet_logo.svg.png",
  "images/Lufthansa-Logo.png",
  "images/Srilankan-Airlines-logo.jpg",
  "images/oneworld-alliance-royal-jordanian-logo.webp",
  "images/Logo-Air-China.png",
  "images/Etihad-airways-logo.svg.png",
  "images/Air_Berlin_Logo.svg.png",
  "images/us-airways-3-logo-png-transparent.png",
  "images/9008ffa0ee183844559da1714a7d585ff0a8b4c1.png",
  "images/Germanwing's_logo.jpg",
  "images/Nok_Air_Logo_og.png",
    "images/Thai_Airways_logo.svg.png",
    "images/britishairways_21686125301575_thumb.jpg",
    "images/FR copy.png",
    "images/Flybe copy.svg.png",
    "images/Turkish_Airlines_logo_2019_compact.svg.png",

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