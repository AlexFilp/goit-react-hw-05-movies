import { Link } from 'react-router-dom';

export const FilmsListItem = ({ id, title }) => {
  return (
    <li>
      <Link to={`${id}`}>{title}</Link>
    </li>
  );
};
