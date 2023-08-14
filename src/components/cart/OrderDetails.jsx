import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { CURRENCY } from '../../assets/constants/URL';

const OrderDetails = () => {
  const [phoneNumber, setPhoneNumber] = useState('+49');
  const totalSumState = useSelector((state) => state.cart.total_sum).toFixed(2);
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <Container>
      <Title>Order Details</Title>
      <ContainerSum>
        <Sum>Total</Sum>
        <TotalSumState>
          {totalSumState}
          <CurrencySymbol>{CURRENCY}</CurrencySymbol>
        </TotalSumState>
      </ContainerSum>
      <Form>
        <Input
          type="tel"
          required
          pattern="\+49\d{10}"
          placeholder="+49"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <Button>Order</Button>
      </Form>
    </Container>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
// const fs_80 = (props) => props.theme.font_size.fs_80;
const clr_accent = (props) => props.theme.colors.clr_accent;
// const primary_lh = (props) => props.theme.line_height.primary;
// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.article`
  height: 394px;
  padding: 25px;
  border-radius: 21px;
  border: 2px solid ${(props) => props.theme.colors.clr_black};
`;
const Title = styled.h3`
  font-size: ${(props) => props.theme.font_size.fs_28};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.84px;
  margin-bottom: 42px;
`;
const ContainerSum = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const Sum = styled.span`
  font-size: ${(props) => props.theme.font_size.fs_24};
  font-weight: 500;
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.72px;
`;
const TotalSumState = styled.span`
  font-size: ${(props) => props.theme.font_size.fs_30};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.96px;
`;
const CurrencySymbol = styled.span`
  font-size: ${(props) => props.theme.font_size.fs_12};
  font-weight: 500;
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.3px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 25px;
`;
const Input = styled.input`
  width: clamp(17.5rem, calc(15.09rem + 12.06vw), 29.56rem);
  height: clamp(2.81rem, calc(2.44rem + 1.88vw), 4.69rem);
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.clr_black};
  padding-left: 25px;

  color: #929292;
  font-size: ${(props) => props.theme.font_size.fs_18};
  font-weight: 500;
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.54px;
`;
const Button = styled.button`
  width: clamp(17.5rem, calc(15.09rem + 12.06vw), 29.56rem);
  height: clamp(2.81rem, calc(2.44rem + 1.88vw), 4.69rem);
  border-radius: 25.147px;
  border: 2.395px solid ${(props) => props.theme.colors.clr_white};
  background-color: ${clr_accent};
  color: ${(props) => props.theme.colors.clr_white};
  font-size: ${(props) => props.theme.font_size.fs_28};
  font-weight: 700;
  line-height: ${(props) => props.theme.line_height.secondary};
  letter-spacing: 0.862px;
  cursor: pointer;

  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 ${clr_accent};
  transition: all 350ms ease-in-out;
  &:hover {
    color: ${clr_accent};
    background-color: ${(props) => props.theme.colors.clr_white};
    box-shadow: 0 0 10px 0 ${clr_accent} inset, 0 0 10px 4px ${clr_accent};
  }
`;
export default OrderDetails;
