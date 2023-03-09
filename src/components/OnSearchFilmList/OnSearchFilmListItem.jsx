import { Link } from 'react-router-dom';

export const OnSearchFilmListItem = ({ id, title }) => {
  return (
    <li>
      <Link to={`${id}`}>{title}</Link>
    </li>
  );
};
