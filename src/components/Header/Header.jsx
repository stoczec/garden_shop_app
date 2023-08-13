import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu/NavMenu';
import logo from '../../assets/images/logo.png';
import cartIcon from '../../assets/images/cart.png';
import { TbGardenCart } from 'react-icons/tb';

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
          <CartLogo />
        </CartLink>
      </NavMenuContainer>
    </Head>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const clr_accent = (props) => props.theme.colors.clr_accent;
// SCC ========== STYLED COMPONENTS ========== //
const Head = styled.header`
  padding: 20px 0 80px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.theme.mixins.container};
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(1.88rem, calc(1.5rem + 1.88vw), 3.75rem);
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
export default Header;
