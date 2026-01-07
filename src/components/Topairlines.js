import React, { useState } from "react";

export default function TopAirlines() {
  const airlines = [
    { name: "1. Singapore Airlines", img: "https://i.postimg.cc/KzzMxmX9/IMG-0775.jpg" },
    { name: "2. Etihad Airways", img: "https://i.postimg.cc/JnHGgBTS/IMG-4610.jpg" },
    { name: "3. Turkish Airlines", img: "https://i.postimg.cc/9fXpw55x/IMG-1674.jpg" },
    { name: "4. Cathay Pacific Airlines", img: "https://i.postimg.cc/nLk8Z0Pk/IMG-4611.jpg" },
    { name: "5. Thai Airways", img: "https://i.postimg.cc/qM8XmMpb/IMG-0403.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % airlines.length);
  const prev = () => setCurrent((current - 1 + airlines.length) % airlines.length);

  return (
    <section className="carousel-section">
      <h3>Top 5 Airlines</h3>

      <div className="carousel-container">
        <img
          src={airlines[current].img}
          alt={airlines[current].name}
          className="carousel-img carousel-fade"
        />

        <p className="carousel-title">{airlines[current].name}</p>

        <button className="carousel-btn carousel-btn-left" onClick={prev}>‹</button>
        <button className="carousel-btn carousel-btn-right" onClick={next}>›</button>
      </div>
    </section>
  );
}