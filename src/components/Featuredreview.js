import React, { useState } from "react";
import "../App.css"; // Make sure this import exists

export default function FeaturedReview() {
  const [open, setOpen] = useState(false);

  const featured = {
    id: "QyKWkWcN2DU",
    title: "MY MOST PERFECT FLIGHT EVER! - FLYING THE ETIHAD 787-10!",
    description:
      "This flight on Etihad's 787 was one of the best flights of my life to date, not only is the aircraft incredibly comfortable, but the food provided by Etihad is also TOP NOTCH! This really was a PERFECT flight!",
    thumbnail: "/assets/ETIHAD 787_5.jpg",
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
