import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import movieImg from '../image/movie.jpg';
import { FilmService } from '../FilmService';
import { BsArrowLeft } from 'react-icons/bs';

const filmservice = new FilmService();

export const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    filmservice.fetchFilmById('movieId', movieId).then(film => {
      console.log(film);
      loadFilmInfo(film);
    });
  }, [movieId]);

  const loadFilmInfo = newData => {
    setFilm(newData);
  };

  const { title, release_date, poster_path, vote_average, overview, genres } =
    film;

  const baseImgUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;

  return (
    <main>
      <Link to={backLinkHref}>
        <BsArrowLeft />
        Go back
      </Link>
      <img src={poster_path ? baseImgUrl : movieImg} alt="" width="300" />
      <div>
        <h2>
          {title}{' '}
          {release_date === '' || !release_date
            ? 'No date'
            : release_date.slice(0, 4)}
        </h2>
        <p>User Score: {Number(vote_average).toFixed(1) * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>
          {genres
            ? `${genres.map(genre => genre.name).join(', ')}.`
            : 'no genre'}
        </p>
      </div>
      <p>Aditional information</p>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
