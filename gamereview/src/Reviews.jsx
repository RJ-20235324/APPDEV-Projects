import { useState, useEffect } from "react";
import GameCard from "./GameCard";

var review = [];

export default function Reviews() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [publisher, setPublisher] = useState('');
  const [reviewDate, setReviewDate] = useState('');
  const [ageRating, setAgeRating] = useState(0);
  const [platform, setPlatform] = useState('');
  const [description, setDescription] = useState('');
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0]; 
    setReviewDate(currentDate);
  }, []);

  function handleIdChange(event) {
    setId(event.target.value);
  }
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handlePublisherChange(event) {
    setPublisher(event.target.value);
  }
  function handleReviewDateChange(event) {
    setReviewDate(event.target.value);
  }
  function handleAgeRatingChange(event) {
    setAgeRating(event.target.value);
  }
  function handlePlatformChange(event) {
    setPlatform(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  function handleReviewChange(event) {
    setReviews(event.target.value);
  }

  function addReview() {
    review.push({
      id: id,
      title: title,
      publisher: publisher,
      reviewDate: reviewDate,
      ageRating: ageRating,
      platform: platform,
      description: description,
      reviews: reviews
    });
    alert("Game Review Recorded!");
    setId(0);
    setTitle('');
    setPublisher('');
    setReviewDate('');
    setAgeRating(0);
    setPlatform('');
    setDescription('');
    setReviews('');
  }

  return (
    <>
      <h4>Game Review Form</h4>
      <div className="form-container">
        ID Number: <input type="text" value={id} onChange={handleIdChange} /> <br /> <br />
        Game Title: <input type="text" value={title} onChange={handleTitleChange} /> <br /> <br />
        Publisher: <input type="text" value={publisher} onChange={handlePublisherChange} /> <br /> <br />
        Review Date: <input type="date" value={reviewDate} onChange={handleReviewDateChange} /> <br /> <br />
        Age Rating: <input type="number" value={ageRating} onChange={handleAgeRatingChange} /> <br /> <br />
        Platforms: <input type="text" value={platform} onChange={handlePlatformChange} /> <br /> <br />
        Description: <input type="text" value={description} onChange={handleDescriptionChange} /> <br /> <br />
        Review: <input type="text" value={reviews} onChange={handleReviewChange} /> <br /> <br />

        <div className="card-container">
          <h2>Review to be added</h2>
          <p>Game ID Number: <strong>{id}</strong></p>
          <p>Game Title: <strong>{title}</strong></p>
          <p>Publisher: <strong>{publisher}</strong></p>
          <p>Review Date: <strong>{reviewDate}</strong></p>
          <p>Age Rating: <strong>{ageRating}</strong></p>
          <p>Platforms: <strong>{platform}</strong></p>
          <p>Description: <strong>{description}</strong></p>
          <p>Review: <cite>{reviews}</cite></p>
        </div>

        <button onClick={addReview}>Submit</button>
      </div>

      {review.length > 0 ? (<GameCard games={review} />) : (<p>No reviews</p>)}
    </>
  );
}
