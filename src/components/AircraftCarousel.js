import React, { useState } from "react";
import "../App.css";

const aircraft = [
  "Airbus A350-1000",
  "Airbus A350-900",
  "Airbus A380-800",
  "Airbus A330-300",
  "Airbus A330-200",
  "Airbus A330-900neo",
  "Airbus A340-600",
  "Airbus A319-100/200",
  "Airbus A320-100/200",
  "Airbus A321-100/200",
  "Airbus A320neo",
  "Airbus A321neo",
  "Airbus A220-300",
  "Boeing 747-400",
  "Boeing 747-8",
  "Boeing 777-300ER",
  "Boeing 777-200ER",
  "Boeing 787-10",
  "Boeing 787-9",
  "Boeing 787-8",
  "Boeing 737-700",
  "Boeing 737-800",
  "Boeing 737 MAX 8",
  "Embraer E195",
  "Embraer E170",
  "Mitsubishi CRJ-100",
  "de Havilland Canada Dash 8-400",
  "Saab 2000",
  "BAE Systems Avro RJ100",
  "Cessna 172 Skyhawk",
  "ATR 72",
];

const loopedAircraft = [...aircraft, ...aircraft, ...aircraft];

export default function AircraftCarousel() {
  const startIndex = aircraft.length;
  const [index, setIndex] = useState(startIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIndex((prev) => prev + 1);
    setIsAnimating(true);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIndex((prev) => prev - 1);
    setIsAnimating(true);
  };

  const handleTransitionEnd = () => {
    if (index >= aircraft.length * 2) setIndex(startIndex);
    if (index <= 0) setIndex(startIndex);
    setIsAnimating(false);
  };

  return (
    <div className="aircraft-carousel-wrapper">
      <div className="aircraft-carousel-section">
        <h3 className="aircraft-carousel-title">Aircraft I've Flown</h3>

        <div className="aircraft-carousel-container">
          <button
            className="aircraft-carousel-btn aircraft-carousel-btn-left"
            onClick={prevSlide}
          >
            ‹
          </button>

          <div className="aircraft-carousel-viewport">
            <div
              className="aircraft-carousel-track"
              style={{
                transform: `translateX(-${index * 33.33}%)`,
                transition: "transform 0.45s cubic-bezier(.22,.61,.36,1)",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {loopedAircraft.map((name, i) => (
                <div className="aircraft-carousel-item" key={i}>
                  <div className="aircraft-carousel-card">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="aircraft-carousel-btn aircraft-carousel-btn-right"
            onClick={nextSlide}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
