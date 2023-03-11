import {
  Item,
  Comment,
  Line,
} from 'components/FilmReviewsListItem/FilmReviewsListItem.styled';

export const FilmReviewsListItem = ({ author, content }) => {
  return (
    <Item>
      <h3>Author: {author}</h3>
      <Comment>{content}</Comment>
      <Line></Line>
    </Item>
  );
};
