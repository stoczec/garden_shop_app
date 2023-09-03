import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { styled, keyframes } from 'styled-components';
// IMP ========== REQUEST ========== //
import { add_to_cart } from '../../store/slice/cartSlice';
// IMP ========== COMPONENTS ========== //
import Counter from '../reusableComponents/Counter';
// IMP ========== COMPONENTS FROM LIBRARIES ========== //
import { Image } from 'antd';
// IMP ========== OTHERS ========== //
import { BASEURL } from '../../assets/constants/URL';
import { CURRENCY } from '../../assets/constants/CURRENCY';

const ProductCard = ({ id, image, title, price, discont_price }) => {
  const { cart } = useSelector((state) => state.cart);
  const isAddedToCart = cart.some((item) => item.id === id);
  const cartItem = cart.find((item) => item.id === id); // находим в корзине товар по id
  const count = cartItem && cartItem.count ? cartItem.count : 0; // проверяем, если у него свойство count
  const discount = Math.round(((price - discont_price) / price) * 100);

  const dispatch = useDispatch();
  const handleAddToCart = (event) => {
    event.preventDefault(); // Предотвращение стандартного перехода
    dispatch(add_to_cart({ id, image, title, discont_price, price }));
  };
  const style = {
    position: 'absolute',
    zIndex: '100',
    left: '50%' /* Сдвигаем элемент на половину его ширины влево */,
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(241, 255, 241, 0.8)',
  };
  return (
    <Card>
      {isAddedToCart && <Counter id={id} count={count} style={style} />}
      <Link to={`/products/${id}`}>
        <CustomImage
          src={`${BASEURL}${image}`}
          alt={title}
          width={`100%`}
          preview={false}
        />
        <AddToCart onClick={handleAddToCart} $isAddedToCart={isAddedToCart}>
          {isAddedToCart ? 'Added' : 'Add to cart'}
        </AddToCart>
        <ContainerPrices $exist_discont_price={discont_price}>
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
          <Discount>{discont_price ? `-${discount}%` : ''}</Discount>
        </ContainerPrices>
        <Title>{title}</Title>
      </Link>
    </Card>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const fs_20 = (props) => props.theme.font_size.fs_20;
const fs_30 = (props) => props.theme.font_size.fs_30;
const clr_black = (props) => props.theme.colors.clr_black;
const box_shadow = `
0 2px 10px rgba(0, 0, 0, 0.1),
0 6px 20px rgba(0, 0, 0, 0.15),
0 -2px 10px rgba(255, 255, 255, 0.5),
0 -6px 20px rgba(255, 255, 255, 0.5)`;
// SCC ========== STYLED COMPONENTS ========== //
const Shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-1px);
  }

  20%, 40%, 60%, 80% {
    transform: translateX(1px);
  }
  
`;
const Discount = styled.p`
  color: ${(props) => props.theme.colors.clr_sale};
  font-size: ${fs_20};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.6px;
  transition: transform 0.9s ease-in-out;
  border: 1px solid transparent;
  cursor: pointer;

  @media (max-width: 434px) {
    font-size: 20px;
  }
`;
const CustomImage = styled.img`
  width: 100%;
  height: clamp(12.5rem, calc(11rem + 7vw), 20rem);
  object-fit: contain;
`;
const AddToCart = styled.button`
  border-radius: 21px;
  border: ${(props) =>
    props.$isAddedToCart
      ? `2px solid #ff4d4f`
      : `2px solid ${props.theme.colors.clr_accent}`};
  background-color: rgba(241, 255, 241, 0.8);
  padding: 15px 0;
  width: 70%;
  cursor: pointer;

  position: absolute;
  z-index: 100;
  top: clamp(6.25rem, calc(5.75rem + 2.5vw), 8.75rem);
  left: 50%; /* Сдвигаем элемент на половину его ширины влево */
  transform: translateX(-50%);

  color: ${(props) =>
    props.$isAddedToCart ? `#ff4d4f` : `${props.theme.colors.clr_accent}`};
  font-size: ${(props) => props.theme.font_size.fs_24};
  line-height: ${(props) => props.theme.line_height.primary};
  text-align: center;

  opacity: ${(props) => (props.$isAddedToCart ? 1 : 0)};
  transition: opacity 0.3s ease;

  --c: ${(props) => props.theme.colors.clr_white};
  background: ${(props) =>
    props.$isAddedToCart
      ? `linear-gradient(
        90deg,
        #0000 33%,
        rgba(255, 77, 79, 0.8) 50%,
        #0000 67%
      )
      var(--_p, 100%) / 300% no-repeat,
    var(--c)`
      : `
  linear-gradient(
        90deg,
        #0000 33%,
        rgba(51, 153, 51, 0.8) 50%,
        #0000 67%
      )
      var(--_p, 100%) / 300% no-repeat,
    var(--c)`};
  text-shadow: calc(var(--_i, -1) * 0.08em) -0.01em 0 var(--c),
    calc(var(--_i, -1) * -0.08em) 0.01em 2px #0004;
  outline-offset: 0.1em;
  transition: 0.7s;

  &:hover,
  &:focus-visible {
    --_p: 0%;
    --_i: 1;
  }

  &:active {
    text-shadow: none;
    color: var(--c);
    box-shadow: ${(props) =>
      props.$isAddedToCart
        ? `inset 0 0 9e9Q  #ff4d4f`
        : `inset 0 0 9e9Q ${props.theme.colors.clr_accent}`};
    transition: 0s;
  }
`;
const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding-bottom: 20px;
  cursor: pointer;
  box-shadow: ${box_shadow};
  transition: box-shadow 0.1s ease-in-out;
  position: relative;
  overflow: hidden;
  &:hover {
    ${Discount} {
      animation: ${Shake} 1.5s infinite;
    }
    ${AddToCart} {
      opacity: 1;
    }
    box-shadow: 0 5px 10px ${(props) => props.theme.colors.clr_black};
  }
`;
const ContainerPrices = styled.div`
  width: clamp(12.5rem, calc(11rem + 7.5vw), 20rem);
  padding: 20px;
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
const Title = styled.h6`
  padding: 0 20px;
  color: #3a3a3a;
  font-size: ${(props) => props.theme.font_size.fs_16};
  font-weight: 500;
  letter-spacing: 0.48px;
  @media (max-width: 434px) {
    font-size: 16px;
  }
`;

export default ProductCard;
