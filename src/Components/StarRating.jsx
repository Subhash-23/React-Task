import React from 'react';
import '../Styles/StarRating.css';

const StarRating = ({ rating, count }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {Array(fullStars).fill().map((key, i) => (
        <span key={`full-${i}`} className="star full">&#9733;</span>
      ))}
      {hasHalfStar && <span className="star half">&#9733;</span>}
      {Array(emptyStars).fill().map((key, i) => (
        <span key={`empty-${i}`} className="star empty">&#9734;</span>
      ))}
      <span className="rating-count">({count})</span>
    </div>
  );
};

export default StarRating;
