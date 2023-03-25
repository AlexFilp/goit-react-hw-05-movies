import { OnSearchFilmListItem } from 'components/OnSearchFilmList/OnSearchFilmListItem';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { fetchOnSearch } from '../../FilmService';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Main, List } from './Movies.styled';
import { PageLoading } from 'components/PageLoading/PageLoading';
import { toast } from 'react-toastify';

const Movies = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    fetchOnSearch(movieName).then(data => {
      console.log(data);
      if (data.length === 0) {
        setLoading(false);
        return toast.error('There is no such films!');
      }
      setFilms(data);
      setLoading(false);
    });
  }, [movieName]);

  // const loadFilms = newData => {
  //   setFilms(prevState => [...prevState, ...newData.results]);
  // };

  return (
    <Main>
      <SearchBar onSubmit={onSubmit} />
      {loading && <PageLoading />}
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
