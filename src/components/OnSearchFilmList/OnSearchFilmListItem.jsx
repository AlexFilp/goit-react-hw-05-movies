import { Item, MovieLink } from './OnSearchFilmListItem.styled';

export const OnSearchFilmListItem = ({ id, title, state }) => {
  return (
    <Item>
      <MovieLink to={`${id}`} state={state}>
        {title}
      </MovieLink>
    </Item>
  );
};
