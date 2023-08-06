import React, { useEffect } from 'react';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = () => {
  const { pathname } = useLocation(); // текущий URL

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // при изменении Route, скроллит вверх
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
