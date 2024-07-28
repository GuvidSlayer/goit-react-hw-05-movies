import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);
  const API_KEY = '9575eabc48100e8f389b13813466e8e2';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div style={{ padding: '25px' }}>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default Home;
