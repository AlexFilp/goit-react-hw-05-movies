import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 15px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NaviLink = styled(NavLink)`
  font-size: 25px;
  font-weight: 500;
  transition: color 200ms ease-in;

  &:hover,
  &:focus,
  &:active {
    color: red;
  }

  &:not(:last-child) {
    margin-right: 30px;
  }
`;
