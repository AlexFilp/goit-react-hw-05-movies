import { FilmReviewsListItem } from 'components/FilmReviewsListItem/FilmReviewsListItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilmService } from '../FilmService';
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
    <>
      {reviews.length === 0 ? (
        <p>We dont have any review for this movie</p>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => {
            return (
              <FilmReviewsListItem key={id} author={author} content={content} />
            );
          })}
        </ul>
      )}
    </>
  );
};
