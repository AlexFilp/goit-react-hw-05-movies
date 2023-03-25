import { FilmReviewsListItem } from 'components/FilmReviewsListItem/FilmReviewsListItem';
import { PageLoading } from 'components/PageLoading/PageLoading';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmReviews } from '../../FilmService';
import { Text, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    fetchFilmReviews(movieId).then(data => {
      console.log(data);
      setReviews(data);
      SetLoading(false);
    });
  }, [movieId]);

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
