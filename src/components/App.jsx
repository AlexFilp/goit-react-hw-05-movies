import { Home } from '../Pages/Home/Home';
import { MovieDetails } from '../Pages/MovieDetails';
import { Movies } from '../Pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { Cast } from 'Pages/Cast';
import { Reviews } from 'Pages/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
