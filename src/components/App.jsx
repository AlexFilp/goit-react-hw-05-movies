import { lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Pages/Cast/Cast'));
const Reviews = lazy(() => import('../Pages/Reviews/Reviews'));

export const App = () => {
  const [backLocation, setBackLocation] = useState();

  const onSaveLocation = location => {
    setBackLocation(location);
    console.log(location);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home onClick={onSaveLocation} />} />
          <Route path="/movies" element={<Movies onClick={onSaveLocation} />} />
          <Route
            path="/movies/:movieId"
            element={<MovieDetails backLocation={backLocation} />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} limit={3} />
      <GlobalStyle />
    </div>
  );
};
