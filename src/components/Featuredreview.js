import React, { useState } from "react";
import "../App.css"; // Make sure this import exists

export default function FeaturedReview() {
  const [open, setOpen] = useState(false);

  const featured = {
    id: "FYugMR7V92U",
    title: "Flying IndiGo | A VERY BASIC Airline",
    description:
      "IndiGo will forever be seen as a Basic and Bland Airline, But is that really a Problem? They deliver what is promised! So See Today what the Indigo Experience from Bangkok to Mumbai really is like!",
    thumbnail: "/images/Indigo TN 1.jpg",
  };

  return (
    <section id="featured-review" className="featured-review-section">
      <h3>Latest Upload</h3>

      <div className="featured-card" onClick={() => setOpen(true)}>
        <img
          src={featured.thumbnail}
          alt={featured.title}
          className="featured-thumbnail"
        />
        <div className="featured-info">
          <h4>{featured.title}</h4>
          <p>{featured.description}</p>
          <button className="featured-btn">Watch Now</button>
        </div>
      </div>

      {open && (
        <div className="featured-modal" onClick={() => setOpen(false)}>
          <div className="featured-modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${featured.id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
