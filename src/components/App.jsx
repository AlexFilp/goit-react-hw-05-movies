import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('../Pages/Home/Home'));
const MoviesPage = lazy(() => import('../Pages/Movies/Movies'));
const MovieDetailsPage = lazy(() =>
  import('../Pages/MovieDetails/MovieDetails')
);
const CastPage = lazy(() => import('../Pages/Cast/Cast'));
const ReviewsPage = lazy(() => import('../Pages/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} limit={3} />
      <GlobalStyle />
    </div>
  );
};
