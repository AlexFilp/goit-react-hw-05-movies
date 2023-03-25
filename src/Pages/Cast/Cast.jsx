import { FilmActorslistItem } from 'components/FilmActorsListItem/FilmActorsListItem';
import { PageLoading } from 'components/PageLoading/PageLoading';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmCast } from '../../FilmService';
import { Text, ActorsList } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    fetchFilmCast(movieId).then(data => {
      console.log(data);
      setActors(data);
      SetLoading(false);
    });
  }, [movieId]);

  return (
    <>
      {loading && <PageLoading />}
      {!loading && actors.length === 0 ? (
        <Text>Cant find the actors for this movie. Sorry.</Text>
      ) : (
        <ActorsList>
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
        </ActorsList>
      )}
    </>
  );
};

export default Cast;
