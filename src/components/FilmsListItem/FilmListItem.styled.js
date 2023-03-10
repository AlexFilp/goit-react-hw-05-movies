import styled from 'styled-components';
export const Item = styled.li`
  margin: 0 auto;
  font-size: 17px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 25px;
  width: 500px;
  border-radius: 5px;
  text-align: center;
  transition: transform 200ms ease-in, color 200ms ease-in;

  &:not(:last-child) {
    margin-bottom: 13px;
  }

  &:hover,
  &:focus {
    transform: scale(1.2);
    color: red;
  }
`;
