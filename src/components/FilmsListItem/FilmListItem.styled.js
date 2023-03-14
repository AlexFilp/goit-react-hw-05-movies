import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  margin: 0 auto;
  font-size: 17px;
  box-shadow: ${pr => pr.theme.boxShadow};
  height: 25px;
  width: 500px;
  border-radius: 5px;
  text-align: center;
  transition: transform ${pr => pr.theme.transition},
    color ${pr => pr.theme.transition};

  &:not(:last-child) {
    margin-bottom: 13px;
  }

  &:hover,
  &:focus {
    transform: scale(1.2);
    color: ${pr => pr.theme.color.accentColor};
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  width: inherit;
  height: inherit;
`;
