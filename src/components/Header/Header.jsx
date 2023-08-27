import React from 'react';
import { styled } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import NavMenu from './NavMenu/NavMenu';
import logo from '../../assets/images/logo.png';
import { TbGardenCart } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const countState = useSelector((state) => state.cart.total_count);
  const { pathname } = useLocation(); // текущий URL

  return (
    <Head pathname={pathname}>
      <LogoContainer>
        <LogoLink to="/">
          <img src={logo} alt="Logo" />
        </LogoLink>
        <CategoriesLink to="/categories">Catalog</CategoriesLink>
      </LogoContainer>
      <NavMenuContainer>
        <NavMenu />
        <CartLink to="/cart">
          <CartLogo />
          <ContainerCountState>{countState}</ContainerCountState>
        </CartLink>
        <BurgerMenu />
      </NavMenuContainer>
    </Head>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const clr_accent = (props) => props.theme.colors.clr_accent;
// SCC ========== STYLED COMPONENTS ========== //
const Head = styled.header`
  ${(props) => props.theme.mixins.container};
  padding-top: 20px;
  padding-bottom: ${(props) => (props.pathname === '/' ? '80px' : '0')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(0.5rem, calc(0.8rem + 1vw), 3.75rem);
`;
const LogoLink = styled(Link)`
  transition: all 350ms ease-in-out;
  &:hover {
    filter: contrast(200%);
  }
`;
const CategoriesLink = styled(Link)`
  color: ${(props) => props.theme.colors.clr_white};
  background-color: ${clr_accent};
  font-weight: 700;
  font-size: ${(props) => props.theme.font_size.fs_16};
  padding-block: clamp(0.44rem, calc(0.29rem + 0.71vw), 0.94rem);
  padding-inline: clamp(0.94rem, calc(0.67rem + 1.34vw), 1.88rem);
  border-radius: 5px;
  border: 2px solid ${clr_accent};

  box-shadow: 0 0 40px 40px ${clr_accent} inset, 0 0 0 0 ${clr_accent};
  transition: all 350ms ease-in-out;
  &:hover {
    color: ${clr_accent};
    background-color: ${(props) => props.theme.colors.clr_white};
    box-shadow: 0 0 10px 0 ${clr_accent} inset, 0 0 10px 4px ${clr_accent};
  }
`;
const NavMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: clamp(1rem, calc(-2.8rem + 19.02vw), 10.75rem);
`;
const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  transition: all 250ms ease-in-out;

  &:hover {
    filter: invert(75%);
  }
`;
const CartLogo = styled(TbGardenCart)`
  font-size: 3em;
`;
const ContainerCountState = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.clr_white};
  background-color: ${clr_accent};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Header;
