import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import style from './navMenu.module.scss';
import { Divide as Hamburger } from 'hamburger-react';

export default function NavMenu() {
  const navRef = useRef();
  const showNavMenu = () => {
    navRef.current.classList.toggle('active_navMenu');
  };

  return (
    <>
      <nav className={style.nav_menu} ref={navRef}>
        <Link to="/">Main Page</Link>
        <Link to="/products">All products</Link>
        <Link to="/sales">All sales</Link>
      </nav>
      <div className={style.burger} onClick={showNavMenu}>
        <Hamburger />
      </div>
    </>
  );
}
