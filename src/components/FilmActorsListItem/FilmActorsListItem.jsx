import actorImg from '../../image/actor.jpg';
import {
  Item,
  ImgThumb,
  Img,
  InfoContainer,
  Name,
  Character,
} from './FilmActorslistItem.styled';

export const FilmActorslistItem = ({ character, name, profileImg }) => {
  const baseImgUrl = `https://image.tmdb.org/t/p/w500${profileImg}`;

  return (
    <Item>
      <ImgThumb>
        <Img src={profileImg ? baseImgUrl : actorImg} alt="" width="200" />
      </ImgThumb>

      <InfoContainer>
        <Name>{name}</Name>
        <Character>
          Character: {character === '' ? 'No info' : character}
        </Character>
      </InfoContainer>
    </Item>
  );
};
