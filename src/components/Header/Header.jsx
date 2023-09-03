import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
// IMP ========== COMPONENTS ========== //
import NavMenu from './NavMenu/NavMenu';
import BurgerMenu from './BurgerMenu';
// IMP ========== COMPONENTS FROM LIBRARIES ========== //
import { ShoppingCartOutlined } from '@ant-design/icons';
// IMP ========== OTHERS ========== //
import logo from '../../assets/images/logo.gif';

const Header = () => {
  const countState = useSelector((state) => state.cart.total_count);
  const { pathname } = useLocation(); // текущий URL

  return (
    <Head $pathname={pathname}>
      <LogoContainer>
        <LogoLink to="/">
          <img src={logo} alt="Logo" />
        </LogoLink>
      </LogoContainer>
      <NavMenuContainer>
        <NavMenu />
        <CartLink to="/cart">
          <CartLogo />
          {countState > 0 && (
            <ContainerCountState>{countState}</ContainerCountState>
          )}
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
  padding-bottom: ${(props) => (props.$pathname === '/' ? '80px' : '0')};
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
    filter: invert(50%);
  }
  @media (max-width: 450px) {
    display: none;
  }
`;
const CartLogo = styled(ShoppingCartOutlined)`
  font-size: 3em;
`;
const ContainerCountState = styled.span`
  font-size: ${(state) => state.theme.font_size.fs_30};
  color: ${clr_accent};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Header;
