import React, { useEffect, useState } from "react";
import "../App.css";
import { fallbackVideos, getLatestVideos } from "../data/youtube";

export default function FeaturedReview() {
  const [open, setOpen] = useState(false);
  const [featured, setFeatured] = useState(fallbackVideos[0]);

  useEffect(() => {
    let active = true;
    const updateFeatured = (forceRefresh = false) => getLatestVideos(forceRefresh).then((videos) => {
      if (active && videos[0]) setFeatured(videos[0]);
    });
    updateFeatured();
    const timer = window.setInterval(() => updateFeatured(true), 15 * 60 * 1000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);

  const description = featured.description || "";
  const noAiMarker = description.search(/\*{0,2}\s*NO\s+AI\s+WAS\s+USED\s+IN\s+THE\s+MAKING\s+OF\s+THIS\s+VIDEO\b/i);
  const featuredDescription = (noAiMarker === -1
    ? description
    : description.slice(0, noAiMarker)
  ).trim();

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
          <p className="featured-views">
            {Number.isFinite(featured.viewCount)
              ? `${new Intl.NumberFormat().format(featured.viewCount)} views`
              : "Views unavailable"}
          </p>
          {featuredDescription && <p>{featuredDescription}</p>}
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
