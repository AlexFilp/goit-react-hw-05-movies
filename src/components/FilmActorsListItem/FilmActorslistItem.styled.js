import styled from 'styled-components';

export const Item = styled.li`
  width: 250px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
`;

export const ImgThumb = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 250px;
  height: 375px;
`;

export const InfoContainer = styled.div`
  margin-top: 5px;
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 7px;
  padding-bottom: 7px;
`;

export const Name = styled.p`
  font-size: 17px;
  font-weight: 500;
`;

export const Character = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
