import { Item, MovieLink } from './FilmListItem.styled';

export const FilmsListItem = ({ id, title, state }) => {
  return (
    <Item>
      <MovieLink to={`/movies/${id}`} state={state}>
        {title}
      </MovieLink>
    </Item>
  );
};
