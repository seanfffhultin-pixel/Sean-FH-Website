import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const statsData = [
  { label: "Countries Visited", value: 38 },
  { label: "Subscribers", value: 602 },
];

export default function AnimatedStats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [animated, setAnimated] = useState(false);
  const rafIds = useRef([]);

  // Function to animate numbers
  // NOTE: animateNumbers moved inside useEffect below to satisfy hook
  // dependency rules and allow proper cleanup of timers.

  // Trigger animation when component scrolls into view
  useEffect(() => {
    // Use requestAnimationFrame for smoother, cancellable animation
    rafIds.current = [];

    const animateNumbers = () => {
      statsData.forEach((stat, index) => {
        let startTime = null;
        const startVal = 0;
        const end = stat.value;
        const duration = 2000; // 2 seconds

        const step = (now) => {
          if (startTime === null) startTime = now;
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const value = Math.floor(startVal + (end - startVal) * progress);

          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = value;
            return newCounts;
          });

          if (progress < 1) {
            rafIds.current[index] = requestAnimationFrame(step);
          }
        };

        rafIds.current[index] = requestAnimationFrame(step);
      });
    };

    const handleScroll = () => {
      const section = document.getElementById("animated-stats");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100 && !animated) {
        setAnimated(true);
        animateNumbers();
      }
    };

    window.addEventListener("scroll", handleScroll);
    // check once on mount in case already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // cancel any running requestAnimationFrame callbacks
      if (rafIds.current && rafIds.current.length) {
        rafIds.current.forEach((id) => {
          if (id) cancelAnimationFrame(id);
        });
      }
    };
  }, [animated]);


  return (
    <section
      id="animated-stats"
      style={{
        marginTop: "80px",
        padding: "40px 20px",
        textAlign: "center",
        background: "#f5f5f5",
        borderRadius: "12px",
      }}
    >
      <h3 style={{ fontSize: "26px", fontWeight: "600", marginBottom: "30px" }}>
        Channel Stats
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "30px",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        {statsData.map((stat, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <p style={{ fontSize: "28px", fontWeight: "700", margin: "0" }}>
              {counts[idx].toLocaleString()}
            </p>
            <p style={{ marginTop: "8px", fontSize: "16px", color: "#555" }}>
              {stat.label}
            </p>
          </div>
        ))}
          </div>
        </section>
        );
    }

// PropTypes: component currently uses module-level `statsData` but keep this
// declaration so future props can be validated, and to show shape expectations.
AnimatedStats.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.number })
  ),
};