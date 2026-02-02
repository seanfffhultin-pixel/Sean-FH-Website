import React from "react";
import TopAirlines from "./Topairlines";
import TopAirports from "./Topairports";

export default function TopLists() {
  return (
    <section className="top-lists-wrapper">
      <div className="top-lists-inner">
        <div className="top-lists-card-wrapper">
          <TopAirlines />
        </div>
        <div className="top-lists-card-wrapper">
          <TopAirports />
        </div>
      </div>
    </section>
  );
}
