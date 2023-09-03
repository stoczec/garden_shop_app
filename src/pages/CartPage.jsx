import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// IMP ========== REQUEST ========== //
import { delete_all_products } from '../store/slice/cartSlice';
// IMP ========== COMPONENTS ========== //
import PageContainer from '../components/reusableComponents/PageContainer';
import BreadCrumbs from '../components/reusableComponents/BreadCrumbs';
import Title from '../assets/reusableStyles/Title';
import CartContainer from '../components/cart/CartContainer';
import OrderDetails from '../components/cart/OrderDetails';
// IMP ========== COMPONENTS FROM LIBRARIES ========== //
import { ShoppingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
// IMP ========== OTHERS ========== //
import { CURRENCY } from '../assets/constants/CURRENCY';

const CartPage = ({ id }) => {
  const dispatch = useDispatch();
  const countState = useSelector((state) => state.cart.total_count);
  const totalSumState = useSelector((state) => state.cart.total_sum).toFixed(2);
  return (
    <PageContainer>
      <BreadCrumbs secondTitle={'Shopping Cart'} />
      <ContainerContent>
        <ContainerLeftSide>
          <Title>Shopping Cart</Title>
          <ContainerPath>
            <CustomButton
              danger
              onClick={() => dispatch(delete_all_products())}
            >
              Clear Cart
            </CustomButton>
            <BackLink to={'/products'}>
              Back to store (Add more items) <ShoppingOutlinedStyled />
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
    </PageContainer>
  );
};
// SCC ========== STYLED COMPONENTS ========== //

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
const ContainerProducts = styled.div``;
const ContainerPath = styled.div`
  margin: 20px 0 35px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: column;
    gap: 15px;
  }
`;
const CustomButton = styled(Button)`
  &.ant-btn {
    font-family: inherit;
    font-weight: inherit;
  }
`;
const ShoppingOutlinedStyled = styled(ShoppingOutlined)`
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
    ${ShoppingOutlinedStyled} {
      color: ${(props) => props.theme.colors.clr_accent};
      transform: rotateY(180deg);
    }
  }
`;
const Products = styled.div``;
const Subtotall = styled.p`
  border-top: 1px solid #a7a7a7;
  padding: 25px 0;
  text-align: end;
`;

export default CartPage;
