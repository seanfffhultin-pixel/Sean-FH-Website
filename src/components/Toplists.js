import React from "react";
import TopAirlines from "./Topairlines";
import TopAirports from "./Topairports";

export default function TopLists() {
  return (
    <section
      className="top-lists-wrapper"
      style={{
        display: "flex",
        gap: "40px",
        justifyContent: "center",
        flexWrap: "wrap", // wraps on smaller screens
        margin: "80px 20px",
        alignItems: "flex-start",
      }}
    >
      <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
        <TopAirlines />
      </div>

      <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
        <TopAirports />
      </div>
    </section>
  );
}
