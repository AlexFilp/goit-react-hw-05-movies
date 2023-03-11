import styled from 'styled-components';
export const Item = styled.li`
  margin: 0 auto;
  font-size: 17px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
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
