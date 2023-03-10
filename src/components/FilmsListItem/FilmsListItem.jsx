import { Link } from 'react-router-dom';
import { Item } from './FilmListItem.styled';

export const FilmsListItem = ({ id, title, state }) => {
  return (
    <Item>
      <Link to={`/movies/${id}`} state={state}>
        {title}
      </Link>
    </Item>
  );
};
