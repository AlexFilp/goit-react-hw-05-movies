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
    border-color: ${pr => pr.theme.color.accentColor};
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
  box-shadow: ${pr => pr.theme.boxShadow};
  transition: color ${pr => pr.theme.transition},
    transform ${pr => pr.theme.transition};

  &:hover,
  &:focus {
    color: ${pr => pr.theme.color.accentColor};
    transform: scale(1.1);
  }
`;
