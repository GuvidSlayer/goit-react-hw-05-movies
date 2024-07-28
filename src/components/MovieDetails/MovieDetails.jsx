import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cast from '../Cast/Cast.jsx';
import Reviews from '../Reviews/Reviews.jsx';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [section, setSection] = useState(null);
  const API_KEY = '6b6b4d8285a49ce753cf1ed9382a2a8f';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error:', error));
  }, [movieId]);

  return (
    <div style={{ padding: '25px' }}>
      <Link to="/">← Go back</Link>
      <div style={{ display: 'flex', marginBottom: '25px' }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: '20%', marginRight: '20px', marginTop: '20px' }}
        />
        <div>
          <h1 style={{ fontWeight: 'bold' }}>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h1>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres?.map(genre => genre.name).join(' ')}</p>
        </div>
      </div>
      <hr style={{ borderColor: 'gray', borderWidth: '2px' }} />
      <div style={{ marginBottom: '25px' }}>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link
              to={`/movies/${movieId}/cast`}
              onClick={() => setSection('cast')}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={`/movies/${movieId}/reviews`}
              onClick={() => setSection('reviews')}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <hr style={{ borderColor: 'gray', borderWidth: '2px' }} />
      <div>
        {section === 'cast' && <Cast />}
        {section === 'reviews' && <Reviews />}
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default MovieDetails;
