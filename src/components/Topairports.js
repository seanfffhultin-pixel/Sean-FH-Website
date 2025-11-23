import React, { useState } from "react";

export default function TopAirports() {
  const airports = [
    { name: "1. Changi Airport, Singapore (SIN)", img: "https://i.postimg.cc/brfLJGz8/IMG-3428.jpg" },
    { name: "2. Suvarnabhumi Airport, Bangkok (BKK)", img: "https://i.postimg.cc/kX9fPt1h/IMG-3429.jpg" },
    { name: "3. Istanbul Airport, Istanbul (IST)", img: "https://i.postimg.cc/d0zjH7Zj/IMG-3430.jpg" },
    { name: "4. King Abdulaziz Airport, Jeddah (JED)", img: "https://i.postimg.cc/wT6cGYMZ/IMG-3431.jpg" },
    { name: "5. Oslo Airport, Oslo (OSL)", img: "https://i.postimg.cc/Jz03R3b2/IMG-3433.jpg" },
  ];

    const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % airports.length);
  const prev = () => setCurrent((current - 1 + airports.length) % airports.length);

  return (
    <section className="carousel-section">
      <h3>Top 5 Airports</h3>

      <div className="carousel-container">
        <img
          src={airports[current].img}
          alt={airports[current].name}
          className="carousel-img carousel-fade"
        />

        <p className="carousel-title">{airports[current].name}</p>

        <button className="carousel-btn carousel-btn-left" onClick={prev}>‹</button>
        <button className="carousel-btn carousel-btn-right" onClick={next}>›</button>
      </div>
    </section>
  );
}