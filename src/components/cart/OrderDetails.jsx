import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
// IMP ========== COMPONENTS ========== //
import FormPost from '../reusableComponents/FormPost';
// IMP ========== OTHERS ========== //
import { CURRENCY } from '../../assets/constants/CURRENCY';

const OrderDetails = () => {
  const totalSumState = useSelector((state) => state.cart.total_sum).toFixed(2);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Container>
      <Title>Order Details</Title>
      <ContainerSum>
        <SubTitle>Total</SubTitle>
        <TotalSumState>
          {totalSumState}
          <CurrencySymbol>{CURRENCY}</CurrencySymbol>
        </TotalSumState>
      </ContainerSum>
      <FormPost style_props={'cart'} title={'Order'} order={cart} />
    </Container>
  );
};
// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.article`
  height: 440px;
  padding: 25px;
  border-radius: 21px;
  border: 2px solid ${(props) => props.theme.colors.clr_black};
  margin-top: 129px;
  @media (max-width: 1000px) {
    height: 300px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px;
  }
  @media (max-width: 660px) {
    height: 370px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 50px;
  }
`;
const Title = styled.h3`
  font-size: ${(props) => props.theme.font_size.fs_28};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.84px;
  margin-bottom: 42px;
  @media (max-width: 1000px) {
    font-size: 28px;
    grid-column: span 2;
    grid-row: span 2;
    text-align: center;
    border-bottom: none;
  }
  @media (max-width: 660px) {
    margin-bottom: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid ${(props) => props.theme.colors.clr_black};
  }
`;
const ContainerSum = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 0;
  }
  @media (max-width: 660px) {
    flex-direction: row;
    align-items: baseline;
  }
`;
const SubTitle = styled.span`
  font-size: ${(props) => props.theme.font_size.fs_24};
  font-weight: 500;
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.72px;
  @media (max-width: 1000px) {
    font-size: ${(props) => props.theme.font_size.fs_40};
    font-weight: 600;
  }
`;
const TotalSumState = styled.span`
  font-size: ${(props) => props.theme.font_size.fs_30};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.96px;
  @media (max-width: 1000px) {
    font-size: ${(props) => props.theme.font_size.fs_70};
  }
`;
const CurrencySymbol = styled.span`
  font-size: ${(props) => props.theme.font_size.fs_12};
  font-weight: 500;
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.3px;
  @media (max-width: 1000px) {
    font-size: ${(props) => props.theme.font_size.fs_36};
  }
`;
export default OrderDetails;
