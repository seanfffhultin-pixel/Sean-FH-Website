import React from "react";

// 🟦 STEP 1 — Add reviews here when ready!
const reviews = [
  // Example format:
  // {
  //   airline: "Emirates",
  //   flight: "EK001 LHR → DXB",
  //   date: "August 2024",
  //   rating: 4.5,
  //   text: "Amazing flight, stunning A380 service, great crew, loved the food."
  // },
];

export default function Reviews() {
  return (
    <section className="reviews-page">
      <h2>Flight Reviews</h2>
      <p className="subtitle">My written airline & flight reviews.</p>

      {reviews.length === 0 ? (
        <div className="no-reviews">
          <h3>🚧 No Reviews Yet</h3>
          <p>There are no written reviews available at the moment — sorry!</p>
          <p>Check back soon, new content is on the way ✈️</p>
        </div>
      ) : (
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <h3>{review.airline}</h3>
              <p className="flight">{review.flight}</p>
              <p className="date">{review.date}</p>
              <p className="rating">⭐ {review.rating}/5</p>
              <p className="text">{review.text}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
