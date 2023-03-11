import { FilmReviewsListItem } from 'components/FilmReviewsListItem/FilmReviewsListItem';
import { PageLoading } from 'components/PageLoading/PageLoading';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilmService } from '../../FilmService';
import { Text, ReviewsList } from './Reviews.styled';
const filmservice = new FilmService();

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    filmservice.fetchFilmInfo('movieId', movieId, 'reviews').then(data => {
      console.log(data);
      SetLoading(false);
      loadFilms(data);
    });
  }, [movieId]);

  const loadFilms = newData => {
    setReviews(prevState => [...prevState, ...newData.results]);
  };

  return (
    <>
      {loading && <PageLoading />}

      {!loading && reviews.length === 0 ? (
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
    </>
  );
};

export default Reviews;
