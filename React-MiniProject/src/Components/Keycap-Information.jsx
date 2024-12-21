import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { artisanKeycaps } from "./Artisan-Keycaps"; // Ensure path is correct
import { useBasket } from "./BasketContext";

function getDateThreeDaysFromNow() {
  const today = new Date();
  today.setDate(today.getDate() + 3);

  const options = { month: "long", day: "numeric" };
  return today.toLocaleDateString("en-US", options); // e.g., "December 11"
}

function generateStarRating(rating) {
  const ratingValue = parseFloat(rating);
  if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
    return "Invalid rating"; // Display an error if the rating is not between 1 and 5
  }

  const fullStar = "⭐";
  const emptyStar = "☆";
  const fullStars = Math.floor(ratingValue);
  const halfStar = ratingValue % 1 >= 0.5 ? "⭐" : "";
  return `${fullStar.repeat(fullStars)}${halfStar}${emptyStar.repeat(
    5 - fullStars - (halfStar ? 1 : 0)
  )} (${ratingValue.toFixed(1)}/5)`;
}

export default function ArtisanKeycapInformation() {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();
  const location = useLocation();
  const { addToBasket } = useBasket();
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    user: "",
    rating: "",
    comment: "",
  });

  // Retrieve product from state or find by ID
  const product =
    location.state?.product ||
    artisanKeycaps.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Product details are not available.</h2>
        <button onClick={() => navigate(-1)} className="btn btn-primary">
          Go Back
        </button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewForm({ ...reviewForm, [name]: value });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewForm.user && reviewForm.rating && reviewForm.comment) {
      const ratingValue = parseFloat(reviewForm.rating);
      if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
        alert("Please enter a valid rating between 1 and 5.");
        return;
      }

      const formattedRating = generateStarRating(ratingValue);
      const newReview = {
        user: reviewForm.user,
        rating: formattedRating,
        comment: reviewForm.comment,
      };

      product.reviews.push(newReview);
      setReviewForm({ user: "", rating: "", comment: "" });
      alert("Review submitted successfully!");
    } else {
      alert("Please fill in all fields to submit a review.");
    }
  };

  return (
    <div className="page-wrapper" style={{ marginTop: "44px" }}>
      <div className="keyboard-information">
        <div className="header">
          <h1 style={{ fontWeight: "bold" }}>{product.name}</h1>
          <p className="price">${product.price}</p>
        </div>

        <div className="product-overview">
          <center>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              style={{ height: "500px", display: "grid", placeItems: "center" }}
            />
          </center>
          <div className="product-details">
            <h2>Description</h2>
            <p>{product.description}</p>
            <h3>Key Features</h3>
            <ul>
              {product.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="product-specs">
          <h3>Specifications</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Material</strong>
                </td>
                <td>{product.material}</td>
              </tr>
              <tr>
                <td>
                  <strong>Color</strong>
                </td>
                <td>{product.color}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="reviews">
          <h3 style={{ marginTop: "20px" }}>Reviews</h3>
          <div className="review-container">
            {product.reviews.map((review, index) => (
              <div key={index} className="review">
                <p>
                  <strong>{review.user}</strong>
                </p>
                <p>Rating: {review.rating}</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsReviewFormVisible(!isReviewFormVisible)}
          className="btn btn-secondary"
          style={{ marginTop: "20px", borderRadius: "20px" }}
        >
          {isReviewFormVisible ? "Hide Review Form" : "Submit a Review"}
        </button>

        {isReviewFormVisible && (
          <div className="review-form" style={{ marginTop: "30px" }}>
            <form onSubmit={handleReviewSubmit}>
              <div style={{ marginBottom: "10px" }}>
                <label htmlFor="user" style={{ display: "block" }}>
                  Name
                </label>
                <input
                  type="text"
                  id="user"
                  name="user"
                  value={reviewForm.user}
                  onChange={handleInputChange}
                  required
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label htmlFor="rating" style={{ display: "block" }}>
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  min="1"
                  max="5"
                  value={reviewForm.rating}
                  onChange={handleInputChange}
                  required
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label htmlFor="comment" style={{ display: "block" }}>
                  Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={reviewForm.comment}
                  onChange={handleInputChange}
                  required
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ borderRadius: "20px" }}
              >
                Submit Review
              </button>
            </form>
          </div>
        )}

        <div className="delivery-pickup-options" style={{ marginTop: "20px" }}>
          <h3>Delivery & Pickup Options</h3>
          <div className="delivery-info">
            <p style={{ fontWeight: "bold" }}>
              <i className="fa fa-truck fa-sm"></i> Order today, delivers:
            </p>
            <p style={{ marginLeft: "25px", top: "1px" }}>
              {getDateThreeDaysFromNow()}.
            </p>
          </div>
          <p style={{ fontWeight: "bold" }}>
            <i className="fa fa-shopping-bag"></i> Pickup:
          </p>
          <p style={{ marginLeft: "18px", top: "1px" }}>
            <a
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#0071e3",
              }}
              onClick={() => setShowDateTimePicker(!showDateTimePicker)}
            >
              {showDateTimePicker ? "Close Date Picker" : "Check Availability"}
            </a>
          </p>

          {selectedDateTime && (
            <p style={{ marginLeft: "18px", top: "1px" }}>
              <strong>Selected Date and Time:</strong> {selectedDateTime}
            </p>
          )}

          {showDateTimePicker && (
            <div className="date-time-picker">
              <input
                type="datetime-local"
                value={selectedDateTime || ""}
                onChange={(e) => setSelectedDateTime(e.target.value)}
                style={{ marginBottom: "10px", padding: "5px" }}
              />
            </div>
          )}
        </div>

        <div
          className="action-buttons"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <button
            onClick={() => navigate(-1)}
            className="btn btn-secondary"
            style={{ marginLeft: "-10px", borderRadius: "20px" }}
          >
            Back to Products
          </button>
          <button
            className="btn btn-primary"
            style={{ marginLeft: "10px", borderRadius: "20px" }}
            onClick={() => {
              addToBasket(product);
            }}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}
