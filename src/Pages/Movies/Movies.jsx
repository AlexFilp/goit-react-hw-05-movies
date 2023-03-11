import { OnSearchFilmListItem } from 'components/OnSearchFilmList/OnSearchFilmListItem';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { FilmService } from '../../FilmService';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Main, List } from './Movies.styled';

const filmServise = new FilmService();

const Movies = () => {
  const location = useLocation();

  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  const onSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setFilms([]);
    filmServise.fetchFilmsOnSearch('search', movieName).then(data => {
      console.log(data);
      if (data.results.length === 0) {
        alert('There is no such films!');
      }
      loadFilms(data);
    });
  }, [movieName]);

  const loadFilms = newData => {
    setFilms(prevState => [...prevState, ...newData.results]);
  };

  return (
    <Main>
      <SearchBar onSubmit={onSubmit} />
      <List>
        {films.map(({ id, title }) => {
          return (
            <OnSearchFilmListItem
              key={id}
              id={id}
              title={title}
              state={{ from: location }}
            />
          );
        })}
      </List>
    </Main>
  );
};

export default Movies;
