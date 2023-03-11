import { FilmReviewsListItem } from 'components/FilmReviewsListItem/FilmReviewsListItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilmService } from '../../FilmService';
import { Text, ReviewsList, Container } from './Reviews.styled';
const filmservice = new FilmService();

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    filmservice.fetchFilmInfo('movieId', movieId, 'reviews').then(data => {
      console.log(data);
      loadFilms(data);
    });
  }, [movieId]);

  const loadFilms = newData => {
    setReviews(prevState => [...prevState, ...newData.results]);
  };

  return (
    <Container>
      {reviews.length === 0 ? (
        <Text>We dont have any review for this movie.</Text>
      ) : (
        <ReviewsList>
          {reviews.map(({ author, content, id }) => {
            return (
              <FilmReviewsListItem key={id} author={author} content={content} />
            );
          })}
        </ReviewsList>
      )}
    </Container>
  );
};
