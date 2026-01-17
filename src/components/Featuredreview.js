import React, { useState } from "react";
import "../App.css"; // Make sure this import exists

export default function FeaturedReview() {
  const [open, setOpen] = useState(false);

  const featured = {
    id: "n_o-uCUZOBQ",
    title: "Is THIS Thai Airways? (Amazing DOMESTIC Flight!)",
    description:
      "This is what Thai Airways looks like when you fly domestically. From former Thai Smile Aircraft to surprise Snack boxes, does this really live up to the Thai Airways Premium Standard?",
    thumbnail: "https://i.postimg.cc/hP5tm8vj/Thai-domestic-3.png",
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
