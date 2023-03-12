import { Item, MovieLink } from './FilmListItem.styled';

export const FilmsListItem = ({ id, title, state, onClick }) => {
  const handleClick = () => {
    onClick(state);
  };

  return (
    <Item>
      <MovieLink to={`/movies/${id}`} state={state} onClick={handleClick}>
        {title}
      </MovieLink>
    </Item>
  );
};
