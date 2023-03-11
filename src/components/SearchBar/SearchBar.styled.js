import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const Input = styled.input`
  width: 300px;
  height: 37px;
  outline: none;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  border-color: black;

  &:focus-within {
    border-color: red;
  }
`;

export const Btn = styled.button`
  border: none;
  border-radius: 4px;
  background-color: white;
  color: black;
  width: 70px;
  font-size: 18px;
  font-weight: 500;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  transition: color 200ms ease-in, transform 200ms ease-in;

  &:hover,
  &:focus {
    color: red;
    transform: scale(1.1);
  }
`;
