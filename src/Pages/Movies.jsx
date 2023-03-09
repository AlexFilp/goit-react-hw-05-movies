import { OnSearchFilmListItem } from 'components/OnSearchFilmList/OnSearchFilmListItem';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { FilmService } from '../FilmService';

const filmServise = new FilmService();

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);

  const onSubmit = query => {
    setQuery(query);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    setFilms([]);
    filmServise.fetchFilmsOnSearch('search', query).then(data => {
      console.log(data);
      if (data.results.length === 0) {
        alert('There is no such films!');
      }
      loadFilms(data);
    });
  }, [query]);

  const loadFilms = newData => {
    setFilms(prevState => [...prevState, ...newData.results]);
  };

  return (
    <main>
      <SearchBar onSubmit={onSubmit} />
      <ul>
        {films.map(({ id, title }) => {
          return <OnSearchFilmListItem key={id} id={id} title={title} />;
        })}
      </ul>
    </main>
  );
};
