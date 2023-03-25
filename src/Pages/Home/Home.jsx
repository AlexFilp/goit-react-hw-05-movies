import { FilmsListItem } from 'components/FilmsListItem/FilmsListItem';
import { PageLoading } from 'components/PageLoading/PageLoading';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendMovies } from '../../FilmService';
import { List, Main, Title } from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrendMovies()
      .then(data => {
        console.log(data);
        setFilms(data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  // const loadFilms = newData => {
  //   setFilms(prevState => [...prevState, ...newData.results]);
  // };

  return (
    <Main>
      <Title>Trending today</Title>
      {loading && <PageLoading />}
      <List>
        {films.map(({ id, title }) => {
          return (
            <FilmsListItem
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

export default Home;
