import { Link, useParams } from "react-router-dom";
import reviews from "../data/reviews";

export default function Review() {
  const { reviewId } = useParams();
  const review = reviews.find((item) => item.slug === reviewId);

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
        <Link className="review-back-link" to="/reviews">
          Back to all reviews
        </Link>
      </div>
    </section>
  );
}
