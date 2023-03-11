import { Outlet } from 'react-router-dom';
import { Header, NaviLink, Nav } from './SharedLayout.styled';
import { Suspense } from 'react';
import { PageLoading } from 'components/PageLoading/PageLoading';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <NaviLink to="/">Home</NaviLink>
          <NaviLink to="/movies">Movies</NaviLink>
        </Nav>
      </Header>
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
