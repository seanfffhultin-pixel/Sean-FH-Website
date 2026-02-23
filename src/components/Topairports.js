import React, { useState, useEffect, useMemo, useRef } from "react";


export default function TopAirports() {

  const airports = useMemo(() => [
    { name: "1. Changi Airport, Singapore (SIN)", img: "/images/IMG_3428.jpeg" },
    { name: "2. Suvarnabhumi Airport, Bangkok (BKK)", img: "/images/IMG_3429.jpeg" },
    { name: "3. Zayed Airport, Abu Dhabi (AUH)", img: "/images/IMG_4612.jpeg" },
    { name: "4. Chek Lap Kok Airport, Hong Kong (HKG)", img: "/images/IMG_4613.jpeg" },
    { name: "5. Istanbul Airport, Istanbul (IST)", img: "/images/IMG_3430.jpeg" },
  ], []);

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

  }, [current, airports]);

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
