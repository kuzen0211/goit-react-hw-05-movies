import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Movies } from 'pages/Movies/Movies';
import { Home } from '../pages/Home/Home';
import { Layout } from './Layout/Layout';
import { GetMoviesDetails } from '../pages/GetMoviesDetails/GetMoviesDetails';
import { Cast } from '../pages/GetMoviesDetails/Cast/Cast';
import { Reviews } from '../pages/GetMoviesDetails/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<GetMoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>

      <ToastContainer />
    </>
  );
};
