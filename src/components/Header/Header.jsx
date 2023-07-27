import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu/NavMenu';
import logo from '../../assets/images/logo.png';
import cartIcon from '../../assets/images/cart.png';

const Header = () => {
  return (
    <Head>
      <LogoContainer>
        <LogoLink to="/">
          <img src={logo} alt="Logo" />
        </LogoLink>
        <CategoriesLink to="/categories">Catalog</CategoriesLink>
      </LogoContainer>
      <NavMenuContainer>
        <NavMenu />
        <CartLink to="/cart">
          <img src={cartIcon} alt="Cart Icon" />
        </CartLink>
      </NavMenuContainer>
    </Head>
  );
};

// VARIABLES STYLED COMPONENTS
const clr_white = (props) => props.theme.colors.clr_white;
const clr_accent = (props) => props.theme.colors.clr_accent;
const fs_16 = (props) => props.theme.font_size.fs_16;
// STYLED COMPONENTS
const Head = styled.header`
  ${(props) => props.theme.mixins.flex({ ai: 'center', jc: 'space-between' })};
  ${(props) => props.theme.mixins.container};
`;
const LogoContainer = styled.div`
  ${(props) =>
    props.theme.mixins.flex({
      ai: 'center',
      jc: 'space-between',
      gap: 'clamp(1rem, calc(-0.07rem + 5.37vw), 3.75rem)',
    })};
`;
const LogoLink = styled(Link)`
  transition: all 350ms ease-in-out;
  &:hover {
    filter: contrast(200%);
  }
`;
const CategoriesLink = styled(Link)`
  color: ${clr_white};
  background-color: ${clr_accent};
  font-weight: 700;
  font-size: ${fs_16};
  padding-block: clamp(0.44rem, calc(0.29rem + 0.71vw), 0.94rem);
  padding-inline: clamp(0.94rem, calc(0.67rem + 1.34vw), 1.88rem);
  border-radius: 5px;
  border: 2px solid ${clr_accent};

  box-shadow: 0 0 40px 40px ${clr_accent} inset, 0 0 0 0 ${clr_accent};
  transition: all 350ms ease-in-out;
  &:hover {
    color: ${clr_accent};
    background-color: ${clr_white};
    box-shadow: 0 0 10px 0 ${clr_accent} inset, 0 0 10px 4px ${clr_accent};
  }
`;
const NavMenuContainer = styled.div`
  ${(props) =>
    props.theme.mixins.flex({
      jc: 'space-between',
      gap: 'clamp(1rem, calc(-2.8rem + 19.02vw), 10.75rem)',
    })};
`;
const CartLink = styled(Link)`
  ${(props) => props.theme.mixins.flex({ ai: 'center' })};

  transition: all 250ms ease-in-out;

  &:hover {
    filter: invert(75%);
  }
`;
export default Header;
