import React from "react";
import { Link } from "react-router-dom";
import reviews from "../data/reviews";


/* ---------------------- */
/* COMPONENT */
/* ---------------------- */

export default function Reviews() {
  return (
    <section className="reviews-page">
      <div className="reviews-header">
        <h2 className="reviews-title">Flight Reviews</h2>
        <p className="reviews-subtitle">
          My written airline & flight reviews. ...More coming soon!
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => {
          const maxPreviewChars = 260;
          const isLong = review.story.length > maxPreviewChars;
          const previewText = isLong
            ? `${review.story.slice(0, maxPreviewChars).trim()}...`
            : review.story;

          return (
          <div className="review-card" key={index}>
            <div className="review-content">

              {/* TITLE */}
              <div className="review-title-row">
                <div className="review-title-left">
                  {review.logo && (
                    <img
                      src={review.logo}
                      alt="Airline logo"
                      className="airline-logo"
                    />
                  )}
                  <h2 className="review-title">
                    {review.slug ? (
                      <Link
                        to={`/review-pages/${review.slug}`}
                        className="review-title-link"
                      >
                        {review.title}
                      </Link>
                    ) : (
                      review.title
                    )}
                  </h2>
                </div>

                {review.slug && (
                  <Link
                    to={`/review-pages/${review.slug}`}
                    className="btn review-card-link"
                  >
                    Read full review
                  </Link>
                )}
              </div>

              {/* ROUTE */}
              <div className="review-route">{review.route}</div>

              {/* RATING */}
              <div className="review-rating">
                {"⭐".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
                <span className="rating-number"> {review.rating}/5</span>
              </div>

              {/* DIVIDER */}
              <div className="review-divider"></div>

              {/* DETAILS */}
              <div className="review-details">
                <div><strong>Aircraft:</strong> {review.aircraft}</div>
                <div><strong>Flight Time:</strong> {review.flightTime}</div>
                <div><strong>Seat:</strong> {review.seat}</div>
                <div><strong>Date:</strong> {review.date}</div>
              </div>

              {/* STORY */}
              <div
                className={
                  isLong ? "review-story review-story-preview" : "review-story"
                }
              >
                <p>
                  <span className="review-story-text">{previewText}</span>
                  {isLong && review.slug && (
                    <Link
                      to={`/review-pages/${review.slug}`}
                      className="review-read-more"
                    >
                      {" "}
                      read more...
                    </Link>
                  )}
                </p>
              </div>

              {/* GALLERY (single preview image) */}
              {review.images && review.images[0] && (
                <div className="review-gallery review-gallery--compact">
                  <img src={review.images[0]} alt="Flight" />
                </div>
              )}

            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
