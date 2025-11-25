import React from "react";

// ✨ Add your reviews below — just copy/paste the template!
const reviews = [
  {
    airline: "IndiGo",
    flight: "6E22 AMS → BOM",
    date: "October 2025",
    rating: 4,
    text: "Overall, what started as a stressful check-in experience turned into a surprisingly smooth and memorable flight. We managed to get seats together and ended up with a free middle seat, enjoyed some unexpected Norwegian–Norse quirks on board, and even spotted a shooting star mid-flight. Despite small inconveniences like dimmed windows, limited charging ports, and slow meal collection, the crew, the atmosphere, and the smooth landing into Mumbai made the journey far better than expected."
  },
  {
    airline: "Ethiopian Airlines",
    flight: "ET808 JNB → ADD",
    date: "April 2025",
    rating: 5,
    text: "Overall, the first Ethiopian A350 flight was a genuinely impressive experience. While the safety video felt amateur and unintentionally funny, everything else about the product exceeded expectations: a comfortable seat, excellent charging options, decent IFE, and surprisingly delicious food with multiple choices. The adjustable headrest made a big difference for taller passengers, and the distant thunderstorm over Kenya created an unforgettable in-flight moment. In all, it was a comfortable, well-equipped, and memorable flight."
  },
  // ⭐⭐ TEMPLATE ⭐⭐
  // {
  //   airline: "",
  //   flight: "",
  //   date: "",
  //   rating: 0,
  //   text: ""
  // },
];

export default function Reviews() {
  return (
    <section className="reviews-page">
      <h2 className="reviews-title">Flight Reviews</h2>
      <p className="reviews-subtitle">My written airline & flight reviews.</p>

      {reviews.length === 0 ? (
        <div className="no-reviews">
          <h3>🚧 No Reviews Yet</h3>
          <p>No written reviews are available at the moment — sorry!</p>
          <p>Check back soon — new content is on the way ✈️</p>
        </div>
      ) : (
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <h3 className="review-airline">{review.airline}</h3>

              <p className="review-flight">{review.flight}</p>
              <p className="review-date">{review.date}</p>

              <p className="review-rating">
                {"⭐".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </p>

              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
