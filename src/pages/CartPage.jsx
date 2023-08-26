import React from 'react';
import { styled } from 'styled-components';
import Title from '../assets/reusableStyledComponents/Title';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import CartContainer from '../components/cart/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { delete_all_products } from '../store/slice/cartSlice';
import { CURRENCY } from '../assets/constants/URL';
import OrderDetails from '../components/cart/OrderDetails';
import BreadCrumbs from '../components/reusableComponents/BreadCrumbs';
import { Button } from 'antd';

const CartPage = ({ id }) => {
  const dispatch = useDispatch();
  const countState = useSelector((state) => state.cart.total_count);
  const totalSumState = useSelector((state) => state.cart.total_sum).toFixed(2);
  return (
    <Container>
      <BreadCrumbs secondTitle={'Shopping Cart'} />

      <ContainerContent>
        <ContainerLeftSide>
          <Title>Shopping cart</Title>
          <ContainerPath>
            <CustomButton
              danger
              onClick={() => dispatch(delete_all_products(id))}
            >
              Clear Cart
            </CustomButton>
            <BackLink to={'/products'}>
              Back to store <ArrowForwardStyled />
              <ArrowForwardStyled />
              <ArrowForwardStyled />
            </BackLink>
          </ContainerPath>
          <ContainerProducts>
            <Products>
              <CartContainer />
            </Products>
          </ContainerProducts>
          <Subtotall>
            <span>
              Subtotal ({countState} {countState === 1 ? 'item' : 'items'}):{' '}
            </span>
            <span>
              {CURRENCY}
              {totalSumState}
            </span>
          </Subtotall>
        </ContainerLeftSide>
        <OrderDetails />
      </ContainerContent>
    </Container>
  );
};
// SCC ========== STYLED COMPONENTS ========== //

const Container = styled.section`
  ${(props) => props.theme.mixins.container}
  padding-bottom: 30px;
`;
const ContainerContent = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const ContainerLeftSide = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const ContainerProducts = styled.div`
  /* width: 50%; */
`;
const ContainerPath = styled.div`
  margin: 20px 0 35px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CustomButton = styled(Button)`
  &.ant-btn {
    font-family: inherit;
    font-weight: inherit;
  }
`;
const ArrowForwardStyled = styled(IoIosArrowForward)`
  transition: all 0.3s ease;
`;
const BackLink = styled(Link)`
  font-size: ${(props) => props.theme.font_size.fs_20};
  font-weight: 500;
  line-height: ${(props) => props.theme.font_size.primary};
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    ${ArrowForwardStyled} {
      color: ${(props) => props.theme.colors.clr_accent};
      transform: rotateY(180deg);
    }
  }
`;
const Products = styled.div`
  /* width: 50%; */
`;
const Subtotall = styled.p`
  border-top: 1px solid #a7a7a7;
  padding: 25px 0;
  text-align: end;
`;

export default CartPage;
