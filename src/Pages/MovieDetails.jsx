import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GENRES_DATA, getGenresFromLocalStorage } from '../getGenres';
import { FilmService } from '../FilmService';
const filmservice = new FilmService();

const genresData = getGenresFromLocalStorage(GENRES_DATA);
console.log(genresData);

export const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const { id } = useParams();

  useEffect(() => {
    filmservice.fetchFilmById('movieId', id).then(film => {
      console.log(film);
      loadFilmInfo(film);
    });
  }, [id]);

  const loadFilmInfo = newData => {
    setFilm(newData);
  };

  const baseImgUrl = `https://image.tmdb.org/t/p/w300${film.poster_path}`;

  const { title, release_date, popularity, overview } = film;

  return (
    <main>
      <button type="button">Go back</button>
      <img src={baseImgUrl} alt="" />
      <div>
        <h2>
          {title}{' '}
          {release_date === '' || !release_date
            ? 'No date'
            : release_date.slice(0, 4)}
        </h2>
        <p>Popularity: {Number(popularity).toFixed(1)}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {/* <p>{getGenresNames(genres, genresData)}</p> */}
      </div>
    </main>
  );
};
