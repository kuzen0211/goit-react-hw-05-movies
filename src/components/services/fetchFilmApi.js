import axios from 'axios';
import { API, KEY, MOVIE } from '../const/const';
import { toast } from 'react-toastify';

export const fetchFilmApi = async (params, search) => {
  const URL =
    params === MOVIE.TRENDING
      ? `${API}/trending/movie/day?api_key=${KEY}`
      : `${API}/search/movie?api_key=${KEY}&query=${search}`;

  try {
    const resolve = await axios.get(URL);

    if (resolve.status !== 200) {
      throw new Error('The service is unavailable.');
    }

    return resolve.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchFilmById = async id => {
  const URL = `${API}/movie/${id}?api_key=${KEY}`;

  try {
    const resolve = await axios.get(URL);
    if (resolve.status !== 200) {
      throw new Error('The service is unavailable.');
    }
    return resolve.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchFilmByCast = async id => {
  const URL = `${API}/movie/${id}/credits?api_key=${KEY}`;

  try {
    const resolve = await axios.get(URL);
    if (resolve.status !== 200) {
      throw new Error('The service is unavailable.');
    }

    return resolve.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchFilmByReviews = async id => {
  const URL = `${API}/movie/${id}/reviews?api_key=${KEY}`;

  try {
    const resolve = await axios.get(URL);
    if (resolve.status !== 200) {
      throw new Error('The service is unavailable.');
    }

    return resolve.data;
  } catch (error) {
    toast.error(error.message);
  }
};
