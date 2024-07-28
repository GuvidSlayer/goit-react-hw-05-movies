import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const API_KEY = '9575eabc48100e8f389b13813466e8e2';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => setCast(data.cast))
      .catch(error => console.error('Error:', error));
  }, [movieId]);

  return (
    <div>
      <h1>Cast</h1>
      <ul>
        {cast.map(member => (
          <li key={member.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
              alt={member.name}
              style={{ width: '10%' }}
            />
            <h2>{member.name}</h2>
            <p>{member.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};

export default Cast;
