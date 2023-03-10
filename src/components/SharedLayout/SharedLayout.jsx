import { Outlet } from 'react-router-dom';
import { Header, NaviLink, Nav } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <NaviLink to="/">Home</NaviLink>
          <NaviLink to="/movies">Movies</NaviLink>
        </Nav>
      </Header>
      <Outlet />
    </div>
  );
};
