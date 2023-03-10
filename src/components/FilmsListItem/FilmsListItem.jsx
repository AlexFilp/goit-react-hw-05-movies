import { Link } from 'react-router-dom';

export const FilmsListItem = ({ id, title, state }) => {
  return (
    <li>
      <Link to={`/movies/${id}`} state={state}>
        {title}
      </Link>
    </li>
  );
};
