import React, { useState, useEffect, useMemo, useRef } from "react";


export default function TopAirlines() {

  const airlines = useMemo(() => [
    { name: "1. Singapore Airlines", img: "/images/IMG_0775.jpeg", /* Singapore 737*/ },
    { name: "2. Etihad Airways", img: "/images/IMG_4610.jpeg", /* Etihad 787*/ },
    { name: "3. Turkish Airlines", img: "/images/IMG_1129.jpeg", /* Turkish A350*/ },
    { name: "4. Cathay Pacific", img: "/images/IMG_4619.jpeg", /* Cathay A330*/ },
    { name: "5. Thai Airways", img: "/images/IMG_0403.jpeg", /* Thai Airways A350*/ },
  ], []);


  const [current, setCurrent] = useState(0);
  const isAnimating = useRef(false);

  /* Preload neighbours */

  useEffect(() => {
    const next = (current + 1) % airlines.length;
    const prev = (current - 1 + airlines.length) % airlines.length;

    [airlines[next], airlines[prev]].forEach(item => {
      const img = new Image();
      img.src = item.img;
    });

  }, [current, airlines]);


  /* Controlled transitions */

  const changeSlide = (direction) => {

    if (isAnimating.current) return; // BLOCK SPAM

    isAnimating.current = true;

    setCurrent(prev => {
      if (direction === "next") {
        return (prev + 1) % airlines.length;
      } else {
        return prev === 0 ? airlines.length - 1 : prev - 1;
      }
    });

    // unlock after animation completes
    setTimeout(() => {
      isAnimating.current = false;
    }, 450); // match CSS fade duration
  };

  return (
    <section className="carousel-section">

      <h3 className="carousel-heading">
        Top 5 Airlines
      </h3>

      <div className="carousel-container">

        <div className="carousel-image-frame">
          <img
            key={current}
            src={airlines[current].img}
            alt={airlines[current].name}
            className="carousel-img fade"
            draggable={false}
          />
        </div>

        <p className="carousel-title">
          {airlines[current].name}
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
