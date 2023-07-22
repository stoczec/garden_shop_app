import React from 'react';
import style from './header.module.scss';
import logo from '../../assets/images/logo.png';
import cartIcon from '../../assets/images/cart.png';
import { Link } from 'react-router-dom';
import { NavMenu } from './NavMenu/NavMenu';

export const Header = () => {
  return (
    <header>
      <div className={style.logo_container}>
        <Link to="/" className={style.logo}>
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/categories" className={style.categories}>
          Catalog
        </Link>
      </div>
      <div className={style.nav_menu}>
        <NavMenu />
        <Link to="/cart" className={style.cart}>
          <img src={cartIcon} alt="Cart Icon" />
        </Link>
      </div>
    </header>
  );
};
