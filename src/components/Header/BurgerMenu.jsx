import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import SocialLinks from '../contactDetails/SocialLinks';

const BurgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
    setIsHamburgerActive((prev) => !prev);
  };

  const closeMenu = () => {
    setIsActive(false);
    setIsHamburgerActive(false);
  };
  return (
    <Container $isOpen={isActive}>
      <BurgerNav $isOpen={isActive}>
        <Title>Navigation menu</Title>
        <Link to="/" onClick={closeMenu}>
          Main Page
        </Link>
        <Link to="/products" onClick={closeMenu}>
          All products
        </Link>
        <Link to="/sales" onClick={closeMenu}>
          All sales
        </Link>
        <Link to="/cart" onClick={closeMenu}>
          Shopping cart
        </Link>
        <SocialLinks margin={isActive} />
      </BurgerNav>
      <Burger onClick={toggleMenu} $isOpen={isHamburgerActive}>
        <Hamburger toggled={isHamburgerActive} />
      </Burger>
    </Container>
  );
};
const Container = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
    background-color: ${(props) =>
      props.$isOpen ? 'rgba(0, 0, 0, 0.7)' : 'none'};
    width: ${(props) => (props.$isOpen ? '100vw' : 'auto')};
    height: ${(props) => (props.$isOpen ? '100vh' : '')};
    position: ${(props) => (props.$isOpen ? 'fixed' : 'relative')};
    z-index: ${(props) => (props.$isOpen ? '1000' : '0')};
    top: 0;
    right: 0;
  }
`;
const BurgerNav = styled.nav`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 1);

  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
  transition: visibility 1s ease; /* анимация */

  & > *:not(:first-child, :last-child) {
    padding: 15px;
    color: ${(props) => props.theme.colors.clr_white};
    font-size: ${(props) => props.theme.font_size.fs_30};
    font-weight: 500;
    line-height: ${(props) => props.theme.line_height.primary};
    transition: all 0.5s ease;
    width: 100%;
    text-align: center;

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
      transition: all 0.5s ease;
    }
  }
`;
const Title = styled.p`
  padding: 20px;
  background-color: #339933;
  color: ${(props) => props.theme.colors.clr_white};
  font-size: ${(props) => props.theme.font_size.fs_30};
  font-weight: 500;
  line-height: ${(props) => props.theme.line_height.primary};
  transition: all 0.5s ease;
  width: 100%;
  text-align: center;
`;
const Burger = styled.div`
  display: none;
  @media (max-width: 900px) {
    color: ${(props) => (props.$isOpen ? '#ffff' : 'inherit')};
    display: block;
    position: ${(props) => (props.$isOpen ? 'fixed' : 'relative')};
    right: ${(props) => (props.$isOpen ? '50vw' : '0')};
    z-index: 1000;
    top: 0;
  }
`;

export default BurgerMenu;
