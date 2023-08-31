import React, { useState } from 'react';
import { css, styled } from 'styled-components';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import BurgerMenu from '../BurgerMenu';

const NavMenu = () => {
  return (
    <>
      <Nav>
        <Link to="/">Main Page</Link>
        <Link to="/products">All products</Link>
        <Link to="/sales">All sales</Link>
      </Nav>
    </>
  );
};
// SCC ========== STYLED COMPONENTS ========== //
const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 330px;
  background-color: ${(props) => props.theme.colors.clr_white};
  & * {
    color: ${(props) => props.theme.colors.clr_black};
    font-size: ${(props) => props.theme.font_size.fs_16};
    font-weight: 500;
    line-height: ${(props) => props.theme.line_height.primary};
    transition: all 1.5s ease;

    &:hover {
      text-shadow: 5px 5px 5px grey;
      transition: all 0.5s ease;
    }
  }
  @media (max-width: 900px) {
    display: none;
    /* justify-content: space-evenly;
    position: absolute;
    top: 110px;
    left: 0;
    width: 100%;
    transition: height 1.5s cubic-bezier(0.22, 0.61, 0.36, 1),
      background-color 1.5s ease;
    & * {
      font-size: 0;
      transition: font-size 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    } */
  }
  /* ${(props) =>
    props.$isActive === 'true' &&
    css`
      height: 30px;
      transition: height 1.5s cubic-bezier(0.22, 0.61, 0.36, 1),
        background-color 1.5s ease;
      background-color: ${(props) => props.theme.colors.clr_accent};
      border-radius: 10px;
      padding: 0 5px;

      & > a {
        font-size: ${(props) => props.theme.font_size.fs_16};
        transition: font-size 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55),
          color 1.5s ease, text-shadow 1.5s ease, background-color 1.5s ease;
      }
    `} */
`;

export default NavMenu;
