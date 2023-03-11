import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import movieImg from '../../image/movie.jpg';
import { FilmService } from '../../FilmService';
import { BsArrowLeft } from 'react-icons/bs';
import {
  Container,
  Main,
  InfoContainer,
  GoBackBtn,
  ImgContainer,
  FilmName,
  UserScore,
  Overview,
  Text,
  Genres,
  GenresList,
  InfoTitle,
  InfoList,
  MoreInfoContainer,
  InfoItem,
  InfoLink,
  Img,
} from './MovieDetails.styled';
import { PageLoading } from 'components/PageLoading/PageLoading';

const filmservice = new FilmService();

const MovieDetails = () => {
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

  const baseImgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <Main>
      <GoBackBtn to={backLinkHref}>
        <BsArrowLeft />
        Go back
      </GoBackBtn>
      {title && (
        <Container>
          <ImgContainer>
            <Img src={poster_path ? baseImgUrl : movieImg} alt="" width="300" />
          </ImgContainer>
          <InfoContainer>
            <FilmName>
              {title}{' '}
              {release_date === '' || !release_date
                ? 'No date'
                : `(${release_date.slice(0, 4)})`}
            </FilmName>
            <UserScore>
              User Score: {Number(vote_average).toFixed(1) * 10}%
            </UserScore>
            <Overview>Overview</Overview>
            <Text>{overview === '' ? 'No overview' : overview}</Text>
            <Genres>Genres</Genres>
            <GenresList>
              {genres
                ? `${genres.map(genre => genre.name).join(', ')}`
                : 'No genres'}
            </GenresList>
          </InfoContainer>
        </Container>
      )}
      {title && (
        <MoreInfoContainer>
          {' '}
          <InfoTitle>Aditional information</InfoTitle>
          <InfoList>
            <InfoItem>
              <InfoLink to={'cast'}>Cast</InfoLink>
            </InfoItem>
            <InfoItem>
              <InfoLink to={'reviews'}>Reviews</InfoLink>
            </InfoItem>
          </InfoList>
        </MoreInfoContainer>
      )}
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default MovieDetails;
