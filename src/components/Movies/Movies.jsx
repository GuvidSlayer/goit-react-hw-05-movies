import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const API_KEY = '9575eabc48100e8f389b13813466e8e2';

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
    )
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div style={{ marginTop: '25px' }}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ marginLeft: '25px', marginRight: '25px' }}
        />
        <button type="submit">Szukaj</button>
      </form>

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

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default Movies;
