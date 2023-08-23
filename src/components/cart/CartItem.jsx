import React from 'react';
import { styled } from 'styled-components';
import { BASEURL, CURRENCY } from '../../assets/constants/URL';
import { BiMinus } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';

import { useDispatch } from 'react-redux';
import {
  decrement_count,
  delete_from_cart,
  increment_count,
} from '../../store/slice/cartSlice';

const CartItem = ({ id, image, title, discont_price, price, count }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <Image src={`${BASEURL}${image}`} alt={title} />
      <ContainerTitleAndCount>
        <Title>{title}</Title>
        <ContainerCount>
          <Minus
            onClick={() => {
              dispatch(decrement_count(id));
            }}
          />
          <Count>{count}</Count>

          <Plus
            onClick={() => {
              dispatch(increment_count(id));
            }}
          />
        </ContainerCount>
      </ContainerTitleAndCount>
      <ContainerPrices>
        <ContainerCardPrices $exist_discont_price={discont_price}>
          <DiscountPrice>
            {discont_price ? `${discont_price}` : ''}
            {discont_price && <CurrencySymbol>{CURRENCY}</CurrencySymbol>}
          </DiscountPrice>
          <Price $exist_discont_price={discont_price}>
            {`${price}`}
            <CurrencySymbol $exist_discont_price={discont_price}>
              {CURRENCY}
            </CurrencySymbol>
          </Price>
        </ContainerCardPrices>
        <TotalSum>
          Subtotal: {CURRENCY}
          {discont_price
            ? (discont_price * count).toFixed(2)
            : (price * count).toFixed(2)}
        </TotalSum>
      </ContainerPrices>
      <Close
        onClick={() => {
          dispatch(delete_from_cart(id));
        }}
      />
    </Card>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const fs_20 = (props) => props.theme.font_size.fs_20;
const fs_40 = (props) => props.theme.font_size.fs_40;
const clr_black = (props) => props.theme.colors.clr_black;
// SCC ========== STYLED COMPONENTS ========== //
const Card = styled.article`
  padding: 40px 0;
  border-top: 1px solid #a7a7a7;
  display: flex;
  gap: 25px;
  position: relative;
  @media (max-width: 1000px) {
    /* flex-direction: column;
    align-items: center; */
    display: grid;
    grid-template-columns: 1fr 1fr; /* Два столбца */
    grid-template-rows: auto auto; /* Два ряда */
    grid-gap: 10px;
  }
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Image = styled.img`
  width: clamp(8.13rem, calc(7.38rem + 3.75vw), 11.88rem);
  height: clamp(8.13rem, calc(7.38rem + 3.75vw), 11.88rem);
  object-fit: contain;
  border-radius: 20px;
  @media (max-width: 1000px) {
    width: clamp(12.5rem, calc(5.74rem + 33.82vw), 26.88rem);
    height: clamp(12.5rem, calc(5.74rem + 33.82vw), 26.88rem);
    grid-column: 1;
    grid-row: span 2;
  }
`;
const ContainerTitleAndCount = styled.div`
  width: 39%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  @media (max-width: 1000px) {
    width: clamp(12.5rem, calc(5.74rem + 33.82vw), 26.88rem);
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 760px) {
    width: 100%;
  }
`;
const Title = styled.h6`
  color: #3a3a3a;
  font-size: ${(props) => props.theme.font_size.fs_18};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.54px;
  @media (max-width: 1000px) {
    font-size: ${(props) => props.theme.font_size.fs_40};
    text-align: center;
  }
`;
const ContainerCount = styled.div`
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 15px;
  border-radius: 12px;
  border: 1px solid #000;
`;
const Count = styled.p`
  font-size: ${(props) => props.theme.font_size.fs_18};
  font-style: normal;
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.54px;
  @media (max-width: 1000px) {
    font-size: ${(props) => props.theme.font_size.fs_24};
  }
`;
const Minus = styled(BiMinus)`
  color: red;
  cursor: pointer;
  @media (max-width: 1000px) {
    font-size: ${(props) => props.theme.font_size.fs_28};
  }
`;
const Plus = styled(AiOutlinePlus)`
  color: green;
  cursor: pointer;
  @media (max-width: 1000px) {
    font-size: ${(props) => props.theme.font_size.fs_28};
  }
`;
const ContainerPrices = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 1000px) {
    width: clamp(12.5rem, calc(5.74rem + 33.82vw), 26.88rem);
    /* flex-direction: row; */

    align-items: center;
    /* gap: 20px; */
  }
  @media (max-width: 760px) {
    width: 100%;
    flex-direction: row;

    align-items: baseline;
    /* gap: 20px; */
  }
`;
const ContainerCardPrices = styled.div`
  display: flex;
  justify-content: start;
  gap: ${(props) =>
    props.$exist_discont_price
      ? 'clamp(0.94rem, calc(0.25rem + 2vw), 4.38rem)'
      : '0'};
  align-items: center;
  @media (max-width: 760px) {
    align-items: baseline;
  }
`;
const DiscountPrice = styled.p`
  color: ${clr_black};
  font-size: ${(props) => props.theme.font_size.fs_40};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.9px;
  /* @media (max-width: 434px) {
    font-size: 20px;
  } */
`;
const Price = styled.p`
  color: ${(props) => (props.$exist_discont_price ? '#8b8b8b' : clr_black)};
  font-size: ${(props) => (props.$exist_discont_price ? fs_20 : fs_40)};
  font-weight: ${(props) => (props.$exist_discont_price ? 500 : 600)};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.6px;
  text-decoration-line: ${(props) =>
    props.$exist_discont_price ? 'line-through' : 'none'};
  /* @media (max-width: 434px) {
    font-size: ${(props) => (props.$exist_discont_price ? '20px' : '30px')};
  } */
`;
const CurrencySymbol = styled.span`
  font-size: ${fs_20};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.6px;
  /* @media (max-width: 434px) {
    font-size: 20px;
  } */
`;
const TotalSum = styled.p`
  /* background-color: yellow; */
`;
const Close = styled(GrFormClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 0;
  font-size: 20px;
  transition: all 0.3s linear;

  &:hover {
    transform: rotate(90deg);
  }
  @media (max-width: 1000px) {
    top: 10px;
    font-size: 30px;
  }
`;
export default CartItem;
