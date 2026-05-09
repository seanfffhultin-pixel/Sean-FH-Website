import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import reviews from "../data/reviews";

export default function Review() {
  const { reviewId } = useParams();
  const review = reviews.find((item) => item.slug === reviewId);
  const [videoOpen, setVideoOpen] = useState(false);

  if (!review) {
    return (
      <section className="review-page">
        <div className="review-page-header">
          <h1 className="review-title">Review not found</h1>
          <p>That link does not match any review yet.</p>
          <Link className="review-back-link" to="/reviews">
            Back to all reviews
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="review-page">
      <div className="review-page-header">
        {review.logo && (
          <img
            src={review.logo}
            alt="Airline logo"
            className="airline-logo review-page-logo"
          />
        )}
        <h1 className="review-title">{review.title}</h1>
        <div className="review-route">{review.route}</div>
        <div className="review-rating">
          {"⭐".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
          <span className="rating-number"> {review.rating}/5</span>
        </div>
        <div className="review-details">
          <div>
            <strong>Aircraft:</strong> {review.aircraft}
          </div>
          <div>
            <strong>Flight Time:</strong> {review.flightTime}
          </div>
          <div>
            <strong>Seat:</strong> {review.seat}
          </div>
          <div>
            <strong>Date:</strong> {review.date}
          </div>
        </div>
      </div>

      <div className="review-story">
        <p>{review.story}</p>
      </div>

          {review.images && (
            <div
              className={
                review.images.length === 1
                  ? "review-gallery review-gallery--single"
                  : "review-gallery"
              }
            >
              {review.images.map((img, i) => (
                <img key={i} src={img} alt="Flight" />
              ))}
            </div>
          )}

      <div className="review-page-footer">
        {review.videoID && (
          <button
            onClick={() => setVideoOpen(true)}
            className="btn review-video-btn"
            title="Watch video"
          >
            ▶ Watch Video
          </button>
        )}
        <Link className="review-back-link" to="/reviews">
          Back to all reviews
        </Link>
      </div>

      {/* VIDEO MODAL */}
      {videoOpen && review.videoID && (
        <div className="featured-modal" onClick={() => setVideoOpen(false)}>
          <div className="featured-modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${review.videoID}`}
              title="Review video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
