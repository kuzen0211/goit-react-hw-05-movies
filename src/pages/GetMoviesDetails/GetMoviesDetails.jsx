import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';

import { fetchFilmById } from '../../components/services/fetchFilmApi';
import { IMG } from '../../components/const/const';
import noImage from '../../components/const/noImage.jpg';
import {
  Wraper,
  ImgWraper,
  Inner,
  LinkStyled,
} from './GetMoviesDetails.styled';

const GetMoviesDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [option, setOption] = useState({});

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetchFilmById(movieId)
      .then(
        ({
          title,
          release_date,
          vote_average,
          overview,
          genres,
          tagline,
          poster_path,
        }) => {
          const year = release_date.substring(0, 4);
          const score = Math.round(vote_average * 10) + '%';
          const genre = genres.map(genre => genre['name']).join(' ');
          const imgURL = poster_path ? IMG + poster_path : noImage;

          return setOption({
            title,
            year,
            score,
            overview,
            genre,
            tagline,
            imgURL,
          });
        }
      )
      .catch(error => error.message);
  }, [movieId]);

  const { title, year, score, overview, genre, tagline, imgURL } = option;

  return (
    <>
      <LinkStyled to={location.state.from}>&#x261A; Go back</LinkStyled>
      <Wraper>
        <ImgWraper>
          <img src={imgURL} alt={tagline} width={300} />
        </ImgWraper>
        <div>
          <h1>
            {title} ({year})
          </h1>
          <p>User score: {score}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genre}</p>
        </div>
      </Wraper>

      <Inner>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </Inner>
      <Outlet />
    </>
  );
};

export default GetMoviesDetails;
