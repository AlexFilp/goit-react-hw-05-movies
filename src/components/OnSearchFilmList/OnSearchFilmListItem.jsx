import { Link } from 'react-router-dom';

export const OnSearchFilmListItem = ({ id, title, state }) => {
  return (
    <li>
      <Link to={`${id}`} state={state}>
        {title}
      </Link>
    </li>
  );
};
