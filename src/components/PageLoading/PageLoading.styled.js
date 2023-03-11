import styled from 'styled-components';
import { MagnifyingGlass } from 'react-loader-spinner';

export const Main = styled.main`
  padding-top: 60px;
`;

export const Container = styled.div`
  margin: 0 auto;
`;

export const Loader = styled(MagnifyingGlass)`
  width: 500px;
  height: 500px;
`;
