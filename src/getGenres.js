import { FilmService } from './FilmService';

const filmService = new FilmService();

export const GENRES_DATA = 'genresObject';

const saveGenresToLocalStorage = (key, value) => {
  const result = JSON.stringify(value);
  localStorage.setItem(key, result);
};

export const getGenresFromLocalStorage = key => {
  const data = localStorage.getItem(key);
  const genres = JSON.parse(data);
  return genres;
};

export const getGenres = () => {
  filmService
    .fetchFilmsOrGenres('genres')
    .then(data => {
      return data.genres;
    })
    .then(genres => {
      const genreById = genres.map(genre => {
        const genreArr = Object.values(genre);

        const genreObjectEl = {
          [genreArr[0]]: genreArr[1],
        };

        return genreObjectEl;
      });
      const genresObj = Object.assign({}, ...genreById);
      saveGenresToLocalStorage(GENRES_DATA, genresObj);
    });
};

export const getGenresNames = (genreIds, genresData) => {
  const genresEl = genreIds.map(id => genresData[id]);
  return genresEl.join(', ');
};
