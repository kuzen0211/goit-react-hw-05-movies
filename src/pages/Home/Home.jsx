import { useState, useEffect } from 'react';
import { fetchFilmApi } from '../../components/services/fetchFilmApi';
import { ListMovie } from '../../components/ListMovie/ListMovie';
import { MOVIE } from '../../components/const/const';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchFilmApi(MOVIE.TRENDING).then(({ results }) =>
      setMovies([...results.map(({ id, title }) => ({ id, title }))])
    );
  }, []);

  return <ListMovie movies={movies} path={'movies'} />;
};

export default Home;
