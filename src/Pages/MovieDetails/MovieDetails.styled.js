import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  padding-top: 25px;
`;

export const GoBackBtn = styled(Link)`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 22px;
  width: 150px;
  height: 35px;
  border-radius: 4px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  transition: color 200ms ease-in, transform 200ms ease-in;

  & > svg {
    width: 25px;
    height: 25px;
  }

  &:hover,
  &:focus {
    color: red;
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  justify-content: center;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  transition: color 200ms ease-in, transform 200ms ease-in;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ImgContainer = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  width: 500px;
  padding: 10px;
`;

export const FilmName = styled.h2`
  font-size: 35px;
`;

export const UserScore = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const Overview = styled.h3`
  font-size: 28px;
  margin-top: 20px;
`;

export const Text = styled.p`
  width: 500px;
  margin-top: 10px;
  font-weight: 500;
  font-size: 17px;
  text-align: start;
`;

export const Genres = styled.h3`
  font-size: 28px;
  margin-top: 20px;
`;

export const GenresList = styled.p`
  margin-top: 10px;
  font-size: 17px;
  font-weight: 500;
`;

export const MoreInfoContainer = styled.div`
  margin-top: 20px;
  box-shadow: rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  padding-bottom: 10px;
`;

export const InfoTitle = styled.h2`
  margin-top: 10px;
  text-align: center;
`;

export const InfoList = styled.ul`
  margin-top: 10px;
  display: flex;
  gap: 25px;
  justify-content: center;
`;

export const InfoItem = styled.li``;

export const InfoLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;

  transition: color 200ms ease-in;

  &:hover,
  &:focus,
  &:active {
    color: red;
  }
`;
