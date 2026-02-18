import React, { useState } from "react";
import "../App.css"; // Make sure this import exists

export default function FeaturedReview() {
  const [open, setOpen] = useState(false);

  const featured = {
    id: "bY2J-BaVT4w",
    title: "This SOUTH AFRICAN Airline SURPRISED ME! (From LANSERIA!)",
    description:
      "Is this airline much better than RYANAIR? I recently flew from Johannesburg's Lanseria Airport to Durban with FlySafair, and I was very mnuch surprised, not only was everything a step up from Ryanair but it was also 100x more organaised - which is so much better!",
    thumbnail: "https://i.postimg.cc/GtS8hYpB/FLYSAFAIR-3.png",
  };

  return (
    <section id="featured-review" className="featured-review-section">
      <h3>⭐ Featured Review of the Month (Latest Upload)</h3>

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
