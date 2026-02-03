import React, { useState, useEffect, useRef } from "react";

export default function TopAirports() {

  const airports = [
    { name: "1. Changi Airport, Singapore (SIN)", img: "https://i.postimg.cc/brfLJGz8/IMG-3428.jpg" },
    { name: "2. Suvarnabhumi Airport, Bangkok (BKK)", img: "https://i.postimg.cc/kX9fPt1h/IMG-3429.jpg" },
    { name: "3. Zayed Airport, Abu Dhabi (AUH)", img: "https://i.postimg.cc/25FqYNYF/IMG-4612.jpg" },
    { name: "4. Chek Lap Kok Airport, Hong Kong (HKG)", img: "https://i.postimg.cc/gkXnJZdm/IMG-4613.jpg" },
    { name: "5. Istanbul Airport, Istanbul (IST)", img: "https://i.postimg.cc/d0zjH7Zj/IMG-3430.jpg" },
  ];

  const [current, setCurrent] = useState(0);
  const isAnimating = useRef(false);

  /* Preload neighbours */

  useEffect(() => {
    const next = (current + 1) % airports.length;
    const prev = (current - 1 + airports.length) % airports.length;

    [airports[next], airports[prev]].forEach(item => {
      const img = new Image();
      img.src = item.img;
    });

  }, [current]);

  /* Controlled slide change */

  const changeSlide = (direction) => {

    if (isAnimating.current) return;

    isAnimating.current = true;

    setCurrent(prev => {
      if (direction === "next") {
        return (prev + 1) % airports.length;
      } else {
        return prev === 0 ? airports.length - 1 : prev - 1;
      }
    });

    // Unlock after animation completes
    setTimeout(() => {
      isAnimating.current = false;
    }, 450); // match your fade animation timing
  };

  return (
    <section className="carousel-section">

      <h3 className="carousel-heading">
        Top 5 Airports
      </h3>

      <div className="carousel-container">

        <div className="carousel-image-frame">
          <img
            key={current}
            src={airports[current].img}
            alt={airports[current].name}
            className="carousel-img fade"
            draggable={false}
          />
        </div>

        <p className="carousel-title">
          {airports[current].name}
        </p>

        <button
          className="carousel-btn carousel-btn-left"
          onClick={() => changeSlide("prev")}
        >
          ‹
        </button>

        <button
          className="carousel-btn carousel-btn-right"
          onClick={() => changeSlide("next")}
        >
          ›
        </button>

      </div>

    </section>
  );
}
