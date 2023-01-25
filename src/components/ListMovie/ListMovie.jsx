import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ListMovie = ({ movies, path }) => {
  const location = useLocation();
  const addPath = path ? `${path}/` : '';

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${addPath}${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

ListMovie.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  path: PropTypes.string,
};
