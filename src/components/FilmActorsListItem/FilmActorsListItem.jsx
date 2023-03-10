import actorImg from '../../image/actor.jpg';

export const FilmActorslistItem = ({ character, name, profileImg }) => {
  const baseImgUrl = `https://image.tmdb.org/t/p/w200${profileImg}`;

  return (
    <li>
      {
        <img
          src={profileImg ? baseImgUrl : actorImg}
          alt=""
          style={{ width: 200 }}
        />
      }
      <p>{name}</p>
      <p>Character: {character === '' ? 'No info' : character}</p>
    </li>
  );
};
