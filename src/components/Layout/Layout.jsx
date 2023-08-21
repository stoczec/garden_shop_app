import React, { useEffect } from 'react';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Divider, FloatButton } from 'antd';

const Layout = () => {
  const { pathname } = useLocation(); // текущий URL

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // при изменении Route, скроллит вверх
  return (
    <>
      <Header />
      {pathname !== '/' && <Divider style={{ margin: '40px 0' }} />}
      <Outlet />
      <Divider style={{ margin: '40px 0' }} />
      <Footer />
      <FloatButton.BackTop />
    </>
  );
};

export default Layout;
