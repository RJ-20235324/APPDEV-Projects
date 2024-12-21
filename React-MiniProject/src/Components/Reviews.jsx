import React, { useState } from "react";

const initialReviews = [
  {
    name: "Jane Doe",
    date: "2024-12-01",
    comment: "Absolutely love the keyboards! Amazing build quality.",
    rating: 5,
  },
  {
    name: "Juan Dela Cruz",
    date: "2024-12-02",
    comment: "Napakaganda ng quality! Worth it ang binayad ko. Salamat po!",
    rating: 5,
  },
  {
    name: "Carlos García",
    date: "2024-12-03",
    comment: "Buena calidad, pero el envío tardó más de lo esperado.",
    rating: 4,
  },
  {
    name: "Yuna Kim",
    date: "2024-12-04",
    comment: "키보드가 정말 마음에 들어요! 타이핑 감이 너무 좋아요.",
    rating: 5,
  },
  {
    name: "John Smith",
    date: "2024-12-05",
    comment: "The product is great, but shipping took a while.",
    rating: 4,
  },
  {
    name: "Alice Johnson",
    date: "2024-12-07",
    comment: "Decent quality for the price. Would buy again.",
    rating: 4,
  },
  {
    name: "Sakura Tanaka",
    date: "2024-12-08",
    comment: "キーキャップのデザインがとても気に入りました！おすすめです。",
    rating: 5,
  },
  {
    name: "Luisa Fernández",
    date: "2024-12-09",
    comment:
      "Excelente servicio al cliente. Resolvieron mi problema rápidamente.",
    rating: 5,
  },
  {
    name: "Hassan Ahmed",
    date: "2024-12-10",
    comment: "The mechanical feel is great! Perfect for gaming and work.",
    rating: 5,
  },
  {
    name: "Maria Clara",
    date: "2024-12-11",
    comment: "Ang bilis ng delivery! Ang ganda rin ng packaging.",
    rating: 5,
  },
  {
    name: "Pierre Dupont",
    date: "2024-12-12",
    comment:
      "Le clavier est superbe, mais la documentation pourrait être plus claire.",
    rating: 4,
  },
  {
    name: "Zhang Wei",
    date: "2024-12-13",
    comment: "这个键盘真的很好用！很满意！",
    rating: 5,
  },
  {
    name: "Emma Brown",
    date: "2024-12-14",
    comment: "Good value for money. I'd recommend it to my friends.",
    rating: 4,
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({
    name: "",
    comment: "",
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split("T")[0];
    setReviews([...reviews, { ...newReview, date: today }]);
    setNewReview({ name: "", comment: "", rating: 0 });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Customer Reviews</h1>

      {/* Review Submission Form */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">Leave a Review</h4>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">
                Comment
              </label>
              <textarea
                className="form-control"
                id="comment"
                name="comment"
                rows="3"
                value={newReview.comment}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Rating
              </label>
              <select
                className="form-select"
                id="rating"
                name="rating"
                value={newReview.rating}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Select Rating
                </option>
                {[1, 2, 3, 4, 5].map((star) => (
                  <option key={star} value={star}>
                    {star} Star{star > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ borderRadius: "20px" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Review List */}
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">What Customers Are Saying</h4>
          <div style={{ maxHeight: "400px", overflowY: "auto" }}>
            {reviews.map((review, index) => (
              <div className="mb-4" key={index}>
                <h5 className="mb-1">{review.name}</h5>
                <p className="text-muted mb-2">{review.date}</p>
                <p>{review.comment}</p>
                <div>
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i} className="text-warning">
                      &#9733;
                    </span>
                  ))}
                  {Array.from({ length: 5 - review.rating }, (_, i) => (
                    <span key={i} className="text-secondary">
                      &#9734;
                    </span>
                  ))}
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
