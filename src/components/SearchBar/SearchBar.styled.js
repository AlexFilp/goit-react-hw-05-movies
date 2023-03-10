import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  outline: none;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;

  &:focus-within {
    border-color: red;
  }
`;

export const Btn = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  color: black;
  width: 70px;
  font-size: 18px;
  font-weight: 500;
  transition: color 200ms ease-in;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover,
  &:focus {
    color: red;
  }
`;
