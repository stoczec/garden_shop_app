import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <>
      <Nav>
        <Link to="/">Main Page</Link>
        <Link to="/categories">All categories</Link>
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
  gap: 50px;
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
  @media (max-width: 1000px) {
    display: none;
  }
`;

export default NavMenu;
