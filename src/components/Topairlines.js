import React, { useState } from "react";

export default function TopAirlines() {
  const airlines = [
    { name: "1. Singapore Airlines", img: "https://i.postimg.cc/KzzMxmX9/IMG-0775.jpg" },
    { name: "2. Turkish Airlines", img: "https://i.postimg.cc/9fXpw55x/IMG-1674.jpg" },
    { name: "3. Thai Airways", img: "https://i.postimg.cc/qM8XmMpb/IMG-0403.jpg" },
    { name: "4. Ethiopian Airlines", img: "https://i.postimg.cc/9f42hk8y/IMG-1137.jpg" },
    { name: "5. Saudia", img: "https://i.postimg.cc/59zw0NQW/IMG-4577.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % airlines.length);
  const prev = () => setCurrent((current - 1 + airlines.length) % airlines.length);

  return (
    <section
      style={{
        marginTop: "60px",
        padding: "0 20px",
        textAlign: "center",
      }}
    >
      <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "20px" }}>Top 5 Airlines</h3>

      <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
        <img
          src={airlines[current].img}
          alt={airlines[current].name}
          style={{ width: "100%", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
        />
        <p style={{ marginTop: "10px", fontWeight: "500" }}>{airlines[current].name}</p>

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
