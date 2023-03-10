import { Link } from 'react-router-dom';
import { Item } from './OnSearchFilmListItem.styled';

export const OnSearchFilmListItem = ({ id, title, state }) => {
  return (
    <Item>
      <Link to={`${id}`} state={state}>
        {title}
      </Link>
    </Item>
  );
};
