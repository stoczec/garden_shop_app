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
      <ContainerPrices $exist_discont_price={discont_price}>
        <DiscountPrice>
          {discont_price ? `${discont_price}` : ''}
          {discont_price && <CurrencySymbol>{CURRENCY}</CurrencySymbol>}
        </DiscountPrice>
        <p>{discont_price * count}</p>
        <Price $exist_discont_price={discont_price}>
          {`${price}`}
          <CurrencySymbol $exist_discont_price={discont_price}>
            {CURRENCY}
          </CurrencySymbol>
        </Price>
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
const fs_30 = (props) => props.theme.font_size.fs_30;
const clr_black = (props) => props.theme.colors.clr_black;
const primary_lh = (props) => props.theme.line_height.primary;
// SCC ========== STYLED COMPONENTS ========== //
const Card = styled.article`
  padding: 40px 0;
  border-top: 1px solid #a7a7a7;
`;
const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: contain;
`;
const Title = styled.h6`
  padding: 0 10px;
  color: #3a3a3a;
  font-size: ${(props) => props.theme.font_size.fs_18};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.54px;
  @media (max-width: 434px) {
    font-size: 18px;
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
`;
const Minus = styled(BiMinus)`
  color: red;
  cursor: pointer;
`;
const Plus = styled(AiOutlinePlus)`
  color: green;
  cursor: pointer;
`;
const ContainerPrices = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: ${(props) =>
    props.$exist_discont_price ? 'space-between' : 'start'};
  align-items: center;
  margin-bottom: 10px;
`;
const DiscountPrice = styled.p`
  color: ${clr_black};
  font-size: ${fs_30};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.9px;
  @media (max-width: 434px) {
    font-size: 20px;
  }
`;
const Price = styled.p`
  color: ${(props) => (props.$exist_discont_price ? '#8b8b8b' : clr_black)};
  font-size: ${(props) => (props.$exist_discont_price ? fs_20 : fs_30)};
  font-weight: ${(props) => (props.$exist_discont_price ? 500 : 600)};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.6px;
  text-decoration-line: ${(props) =>
    props.$exist_discont_price ? 'line-through' : 'none'};
  @media (max-width: 434px) {
    font-size: ${(props) => (props.$exist_discont_price ? '20px' : '30px')};
  }
`;
const CurrencySymbol = styled.span`
  color: ${(props) => (props.$exist_discont_price ? '#8b8b8b' : clr_black)};
  font-size: ${fs_20};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.6px;
  @media (max-width: 434px) {
    font-size: 20px;
  }
`;
const Close = styled(GrFormClose)`
  cursor: pointer;
`;
export default CartItem;
