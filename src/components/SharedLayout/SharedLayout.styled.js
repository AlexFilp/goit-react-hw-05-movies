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
  transition: color ${pr => pr.theme.transition};

  &:hover,
  &:focus,
  &.active {
    color: ${pr => pr.theme.color.accentColor};
  }

  &:not(:last-child) {
    margin-right: 30px;
  }
`;
