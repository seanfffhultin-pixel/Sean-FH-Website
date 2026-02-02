import React, { useState } from "react";

export default function TopAirports() {
  const airports = [
    { name: "1. Changi Airport, Singapore (SIN)", img: "https://i.postimg.cc/brfLJGz8/IMG-3428.jpg" },
    { name: "2. Suvarnabhumi Airport, Bangkok (BKK)", img: "https://i.postimg.cc/kX9fPt1h/IMG-3429.jpg" },
    { name: "3. Zayed Airport, Abu Dhabi (AUH)", img: "https://i.postimg.cc/25FqYNYF/IMG-4612.jpg" },
    { name: "4. Chek Lap Kok Airport, Hong Kong (HKG)", img: "https://i.postimg.cc/gkXnJZdm/IMG-4613.jpg" },
    { name: "5. Istanbul Airport, Istanbul (IST)", img: "https://i.postimg.cc/d0zjH7Zj/IMG-3430.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % airports.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? airports.length - 1 : prev - 1));

  return (
    <section className="carousel-section">
      <h3 className="carousel-heading">Top 5 Airports</h3>

      <div className="carousel-container">
        <div className="carousel-image-frame">
          <img
            key={current}
            src={airports[current].img}
            alt={airports[current].name}
            className="carousel-img fade"
          />
        </div>

        <p className="carousel-title">{airports[current].name}</p>

        <button className="carousel-btn carousel-btn-left" onClick={prev}>
          ‹
        </button>
        <button className="carousel-btn carousel-btn-right" onClick={next}>
          ›
        </button>
      </div>
    </section>
  );
}

