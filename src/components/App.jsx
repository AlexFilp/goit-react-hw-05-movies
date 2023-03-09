import { Home } from '../Pages/Home';
import { MovieDetails } from '../Pages/MovieDetails';
import { Movies } from '../Pages/Movies';
import { Route, Routes, NavLink } from 'react-router-dom';
import { getGenres } from '../getGenres';

getGenres();

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
