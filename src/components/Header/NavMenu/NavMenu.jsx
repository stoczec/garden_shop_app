import React, { useState } from 'react';
import { css, styled } from 'styled-components';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

const NavMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const showNavMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <Nav $isActive={isActive.toString()}>
        <Link to="/">Main Page</Link>
        <Link to="/products">All products</Link>
        <Link to="/sales">All sales</Link>
      </Nav>
      <Burger onClick={showNavMenu}>
        <Hamburger />
      </Burger>
    </>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const fs_16 = (props) => props.theme.font_size.fs_16;
const clr_accent = (props) => props.theme.colors.clr_accent;
const clr_black = (props) => props.theme.colors.clr_black;
const clr_white = (props) => props.theme.colors.clr_white;
const primary_lh = (props) => props.theme.line_height.primary;
// SCC ========== STYLED COMPONENTS ========== //
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 330px;
  background-color: ${clr_white};
  & * {
    color: ${clr_black};
    font-size: ${fs_16};
    font-weight: 500;
    line-height: ${primary_lh};
    transition: all 1.5s ease;

    &:hover {
      text-shadow: 5px 5px 5px ${clr_black};
      transition: all 0.5s ease;
    }
  }
  @media (max-width: 900px) {
    justify-content: space-evenly;
    position: absolute;
    top: 110px;
    left: 0;
    width: 100%;
    transition: height 1.5s cubic-bezier(0.22, 0.61, 0.36, 1),
      background-color 1.5s ease;
    & * {
      font-size: 0;
      transition: font-size 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
  }
  ${(props) =>
    props.$isActive === 'true' &&
    css`
      height: 30px;
      transition: height 1.5s cubic-bezier(0.22, 0.61, 0.36, 1),
        background-color 1.5s ease;
      background-color: ${clr_accent};
      border-radius: 10px;
      padding: 0 5px;

      & > a {
        font-size: ${fs_16};
        transition: font-size 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55),
          color 1.5s ease, text-shadow 1.5s ease, background-color 1.5s ease;
      }
    `}
`;
const Burger = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;

export default NavMenu;
