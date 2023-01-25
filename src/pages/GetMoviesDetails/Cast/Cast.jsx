import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchFilmByCast } from '../../../components/services/fetchFilmApi';
import { IMG } from '../../../components/const/const';
import noImage from '../../../components/const/noImage.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [option, setOption] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetchFilmByCast(movieId)
      .then(({ cast }) => {
        setOption(
          cast.map(({ name, character, profile_path }) => {
            const imgURL = profile_path ? IMG + profile_path : noImage;
            return { name, character, imgURL };
          })
        );
      })
      .catch(error => error.message);
  }, [movieId]);

  return (
    <>
      <ul>
        {option.length
          ? option.map(({ name, character, imgURL }) => (
              <li key={name}>
                <img src={imgURL} alt={name} width="100" />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            ))
          : "We don't have information about the actors of this movie."}
      </ul>
    </>
  );
};

export default Cast;
