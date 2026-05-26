import React, { useState } from "react";
import "../App.css";

const airlines = [
  "assets/Cathay-Pacific-Logo.png",
  "assets/Bangkok_Airways_Logo.svg.png",
  "assets/IndiGo_Airlines_logo.svg.png",
  "assets/FlySafair_Logo_Transparent_Background.png",
  "assets/Ethiopian_Airlines_Logo.svg.png",
  "assets/RwandAir_Logotype.png",
  "assets/AirAsia-Logo-2009.png",
  "assets/Scandinavian_Airlines-Logo.wine.png",
  "assets/40c3a0f56bb121e5d42c6d45a7b745d282e7bacd.png",
  "assets/Logo1-1.png",
  "assets/vietnam_airlines_new_logo.jpg",
  "assets/Logo-Saudia-.avif",
  "assets/United-logo.jpg",
  "assets/Qantas-Logo.png",
  "assets/Singapore-Airlines-Logo.png",
  "assets/Scoot_logo.svg.png",
  "assets/871-8713543_tap-air-portugal-has-agreed-to-offer-a.png",
  "assets/Swiss-International-Air-Lines-logo.png",
  "assets/Norwegian_Logo_2024.svg.png",
  "assets/american-airlines-logo.webp",
  "assets/EasyJet_logo.svg.png",
  "assets/Lufthansa-Logo.png",
  "assets/Srilankan-Airlines-logo.jpg",
  "assets/oneworld-alliance-royal-jordanian-logo.webp",
  "assets/Logo-Air-China.png",
  "assets/Etihad-airways-logo.svg.png",
  "assets/Air_Berlin_Logo.svg.png",
  "assets/us-airways-3-logo-png-transparent.png",
  "assets/9008ffa0ee183844559da1714a7d585ff0a8b4c1.png",
  "assets/Germanwing's_logo.jpg",
  "assets/Nok_Air_Logo_og.png",
    "assets/Thai_Airways_logo.svg.png",
    "assets/British-Airways-Logo.png",
    "assets/FR copy.png",
    "assets/Flybe copy.svg.png",
    "assets/Turkish_Airlines_logo_2019_compact.svg.png",

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