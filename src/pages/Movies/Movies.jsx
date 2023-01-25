import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import { fetchFilmApi } from 'components/services/fetchFilmApi';
import { MOVIE } from 'components/const/const';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { ListMovie } from '../../components/ListMovie/ListMovie';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetchFilmApi(MOVIE.SEARCH, searchQuery).then(({ results }) => {
      const newMovieList = [
        ...results.map(({ id, title }) => ({ id, title } ?? [])),
      ];

      if (newMovieList.length === 0) {
        return toast.error(`No movie for search query ${searchQuery}.`);
      }

      setMovies(newMovieList);
    });
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={setSearchParams} />
      <ListMovie movies={movies} path={''} />
    </>
  );
};

export default Movies;
