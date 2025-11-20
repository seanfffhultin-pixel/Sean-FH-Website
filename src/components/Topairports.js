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
    <section
      style={{
        marginTop: "60px",
        padding: "0 20px",
        textAlign: "center",
      }}
    >
      <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "20px" }}>Top 5 Airports</h3>

      <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
        <img
          src={airports[current].img}
          alt={airports[current].name}
          style={{ width: "100%", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
        />
        <p style={{ marginTop: "10px", fontWeight: "500" }}>{airports[current].name}</p>

        <button
          onClick={prev}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            padding: "8px 12px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#e63946",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ‹
        </button>

        <button
          onClick={next}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            padding: "8px 12px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#e63946",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ›
        </button>
      </div>
    </section>
  );
}
