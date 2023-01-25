import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const GetMoviesDetails = lazy(() =>
  import('../pages/GetMoviesDetails/GetMoviesDetails')
);
const Cast = lazy(() => import('../pages/GetMoviesDetails/Cast/Cast'));
const Reviews = lazy(() => import('../pages/GetMoviesDetails/Reviews/Reviews'));

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
