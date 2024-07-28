import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const API_KEY = '9575eabc48100e8f389b13813466e8e2';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => setReviews(data.results))
      .catch(error => console.error('Error:', error));
  }, [movieId]);

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map(review => (
        <div key={review.id}>
          <h2>{review.author}</h2>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string,
    })
  ),
};

export default Reviews;
