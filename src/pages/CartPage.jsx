import React from 'react';
import { styled } from 'styled-components';
import Title from '../components/reusable/Title';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { TbGardenCartOff } from 'react-icons/tb';
import CartContainer from '../components/cart/CartContainer';
import { useDispatch } from 'react-redux';
import { delete_all_products } from '../store/slice/cartSlice';

const CartPage = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Title>Cart</Title>
      <ContainerPath>
        <Path>Main / Cart</Path>
        <CartOff onClick={() => dispatch(delete_all_products(id))} />
        <BackLink to={'/products'}>
          Back to shop <ArrowForwardStyled />
          <ArrowForwardStyled />
          <ArrowForwardStyled />
        </BackLink>
      </ContainerPath>
      <ContainerProducts>
        <Products>
          <CartContainer />
        </Products>
      </ContainerProducts>
    </Container>
  );
};
// SCC ========== STYLED COMPONENTS ========== //

const Container = styled.section`
  ${(props) => props.theme.mixins.container}
  padding-bottom: 30px;
`;

const ContainerProducts = styled.div`
  width: 50%;
`;
const ContainerPath = styled.div`
  margin: 20px 0 35px 0;
  display: flex;
  justify-content: space-between;
`;
const Path = styled.p`
  font-size: ${(props) => props.theme.font_size.fs_16};
  font-weight: 500;
  line-height: ${(props) => props.theme.font_size.primary};
`;
const ArrowForwardStyled = styled(IoIosArrowForward)`
  transition: color 0.3s ease;
`;
const BackLink = styled(Link)`
  font-size: ${(props) => props.theme.font_size.fs_20};
  font-weight: 500;
  line-height: ${(props) => props.theme.font_size.primary};
  display: flex;
  align-items: center;
  &:hover {
    ${ArrowForwardStyled} {
      color: ${(props) => props.theme.colors.clr_accent};
    }
  }
`;

const Products = styled.div`
  width: 50%;
`;
const CartOff = styled(TbGardenCartOff)`
  cursor: pointer;
  font-size: 2em;
`;
export default CartPage;
