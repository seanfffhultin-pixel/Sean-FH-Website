import React, { useState } from "react";
import "../App.css"; // Make sure this import exists

export default function FeaturedReview() {
  const [open, setOpen] = useState(false);

  const featured = {
    id: "nC9IXGwQ6IY",
    title: "BRITISH AIRWAYS SAVED ME FROM A SNOWSTORM! 🤯",
    description:
      "This was supposed to be a very normal flight from Amsterdam to London (Heathrow) - instead due to a crazy snowstorm, we got rerouted via Rotterdam and we got to fly on one of BA's best aircraft, the E190! So not a total disaster!",
    thumbnail: "/assets/BA E190_1.png",
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
