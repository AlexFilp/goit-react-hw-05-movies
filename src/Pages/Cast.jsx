import { FilmActorslistItem } from 'components/FilmActorsListItem/FilmActorsListItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilmService } from '../FilmService';
const filmservice = new FilmService();

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    filmservice.fetchFilmInfo('movieId', movieId, 'credits').then(data => {
      console.log(data);
      loadFilms(data);
    });
  }, [movieId]);

  const loadFilms = newData => {
    setActors(prevState => [...prevState, ...newData.cast]);
  };

  return (
    <>
      {actors.length === 0 ? (
        <p>Cant find the actors for this movie. Sorry.</p>
      ) : (
        <ul>
          {actors.map(({ cast_id, character, name, profile_path }) => {
            return (
              <FilmActorslistItem
                key={cast_id}
                character={character}
                name={name}
                profileImg={profile_path}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};
