import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Nav, NavLinkStyle } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavLinkStyle to="/">Home</NavLinkStyle>
          <NavLinkStyle to="/movies">Movies</NavLinkStyle>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
