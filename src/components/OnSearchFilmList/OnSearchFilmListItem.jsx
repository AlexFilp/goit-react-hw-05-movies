import { Item, MovieLink } from './OnSearchFilmListItem.styled';

export const OnSearchFilmListItem = ({ id, title, state, onClick }) => {
  const handleClick = () => {
    onClick(state);
  };

  return (
    <Item>
      <MovieLink to={`${id}`} state={state} onClick={handleClick}>
        {title}
      </MovieLink>
    </Item>
  );
};
