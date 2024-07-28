import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const API_KEY = '6b6b4d8285a49ce753cf1ed9382a2a8f';

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
