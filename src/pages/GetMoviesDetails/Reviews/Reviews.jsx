import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchFilmByReviews } from '../../../components/services/fetchFilmApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [option, setOption] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetchFilmByReviews(movieId)
      .then(({ results }) => {
        setOption(
          results.map(({ author, content, id }) => ({ author, content, id }))
        );
      })
      .catch(error => error.message);
  }, [movieId]);

  return (
    <>
      <ul>
        {option.length
          ? option.map(({ author, content, id }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))
          : "We don't have any reviews for this movie."}
      </ul>
    </>
  );
};

export default Reviews;
