import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
// IMP ========== REQUEST ========== //
import { add_to_cart } from '../../store/slice/cartSlice';
// IMP ========== COMPONENTS ========== //
import Counter from '../reusableComponents/Counter';
// IMP ========== COMPONENTS FROM LIBRARIES ========== //
import { Image } from 'antd';
// IMP ========== OTHERS ========== //
import { BASEURL } from '../../assets/constants/URL';
import { CURRENCY } from '../../assets/constants/CURRENCY';

const ProductSingleCard = ({
  id,
  image,
  title,
  price,
  discont_price,
  description,
}) => {
  const { cart } = useSelector((state) => state.cart); // массив с товарами в корзине
  const addedToCart = cart.some((item) => item.id === id); // находим в массиве товар по id
  const cartItem = cart.find((item) => item.id === id); // находим в массиве товар по id
  const count = cartItem && cartItem.count ? cartItem.count : 0; // проверяем, если у него свойство count
  const discount = Math.round(((price - discont_price) / price) * 100);
  const dispatch = useDispatch();
  const handleAddToCart = (event) => {
    event.preventDefault(); // Предотвращение стандартного перехода
    dispatch(add_to_cart({ id, image, title, discont_price, price }));
  };
  return (
    <Container>
      <Title>{title}</Title>

      <Card>
        <CustomImage src={`${BASEURL}${image}`} alt={title} />
        <ContainerInfo>
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
            <Discount>
              {discont_price ? `-${discount}` : ''}
              {discont_price && <PercentageSpan>%</PercentageSpan>}
            </Discount>
          </ContainerPrices>
          <AddToCart onClick={handleAddToCart} $addedToCart={addedToCart}>
            {addedToCart ? 'Added' : 'Add to cart'}
          </AddToCart>
          {addedToCart && <Counter id={id} count={count} />}
          <ContainerDescription>
            <TitleDescrption>Description</TitleDescrption>
            <Description>{description}</Description>
          </ContainerDescription>
        </ContainerInfo>
      </Card>
    </Container>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const fs_36 = (props) => props.theme.font_size.fs_36;
const fs_70 = (props) => props.theme.font_size.fs_70;
const clr_black = (props) => props.theme.colors.clr_black;
// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding: 60px 30px;
  gap: 30px;

  background-color: #ebeaea;
  border-radius: 15px;
`;
const Title = styled.h3`
  color: #3a3a3a;
  font-size: ${(props) => props.theme.font_size.fs_36};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 1.08px;
  @media (max-width: 900px) {
    text-align: center;
  }
`;
const Card = styled.div`
  display: flex;
  gap: clamp(4.06rem, calc(1rem + 5.24vw), 8.13rem);
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: clamp(0.94rem, calc(0.42rem + 2.59vw), 1.88rem);
  }
`;
const CustomImage = styled(Image)`
  &.ant-image-img {
    width: clamp(17.5rem, calc(12.13rem + 26.88vw), 44.38rem);
    height: clamp(17.5rem, calc(12.13rem + 26.88vw), 44.38rem);
    object-fit: contain;
    border-radius: 15px;
    @media (max-width: 900px) {
      width: clamp(17.5rem, calc(2.67rem + 74.14vw), 44.38rem);
      height: clamp(17.5rem, calc(2.67rem + 74.14vw), 44.38rem);
    }
  }
`;
const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    align-items: center;
  }
`;
const ContainerPrices = styled.div`
  padding-top: clamp(1.88rem, calc(1.45rem + 2.13vw), 4rem);
  display: flex;
  justify-content: ${(props) =>
    props.$exist_discont_price ? 'space-between' : 'start'};
  align-items: baseline;
  margin-bottom: 40px;
  @media (max-width: 900px) {
    justify-content: ${(props) =>
      props.$exist_discont_price ? 'space-evenly' : 'start'};
    width: 100%;
    padding-top: 0;
  }
`;
const DiscountPrice = styled.p`
  color: ${clr_black};
  line-height: ${(props) => props.theme.line_height.primary};
  font-size: ${(props) => props.theme.font_size.fs_70};
  letter-spacing: 2.1px;
`;
const Price = styled.p`
  color: ${(props) => (props.$exist_discont_price ? '#8b8b8b' : clr_black)};
  font-size: ${(props) => (props.$exist_discont_price ? fs_36 : fs_70)};
  font-weight: ${(props) => (props.$exist_discont_price ? 500 : 600)};
  line-height: ${(props) => props.theme.line_height.primary};
  text-decoration-line: ${(props) =>
    props.$exist_discont_price ? 'line-through' : 'none'};
  letter-spacing: 2.1px;
`;
const CurrencySymbol = styled.span`
  color: ${(props) => (props.$exist_discont_price ? '#8b8b8b' : clr_black)};
  font-size: ${(props) => props.theme.font_size.fs_28};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.6px;
`;
const Discount = styled.p`
  color: ${(props) => props.theme.colors.clr_sale};
  font-size: ${fs_36};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.84px;
`;
const PercentageSpan = styled.span`
  font-size: ${(props) => props.theme.font_size.fs_28};
  letter-spacing: 0.6px;
`;
const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;
const TitleDescrption = styled.h4`
  font-size: ${(props) => props.theme.font_size.fs_28};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.6px;
`;
const Description = styled.p`
  font-size: ${(props) => props.theme.font_size.fs_20};
  font-weight: 500;
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.6px;
  padding: 15px;
  background-color: lightgray;
  border-radius: 15px;
`;
const AddToCart = styled.button`
  width: clamp(12.5rem, calc(4.78rem + 13.73vw), 21.25rem);
  padding: clamp(0.75rem, calc(0.03rem + 1.27vw), 1.56rem)
    clamp(2.5rem, calc(-0.26rem + 4.9vw), 5.63rem);
  margin-bottom: 66px;
  border: ${(props) =>
    props.$addedToCart
      ? `2px solid #ff4d4f`
      : `2px solid ${props.theme.colors.clr_accent}`};
  border-radius: 10px;
  background: ${(props) =>
    props.$addedToCart ? '#ff4d4f' : `${props.theme.colors.clr_accent}`};
  color: ${(props) =>
    props.$addedToCart ? `#ff4d4f` : `${props.theme.colors.clr_accent}`};
  font-size: ${(props) => props.theme.font_size.fs_28};
  font-weight: 700;
  cursor: pointer;

  --c: ${(props) => props.theme.colors.clr_white};
  background: ${(props) =>
    props.$addedToCart
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
      props.$addedToCart
        ? `inset 0 0 9e9Q  #ff4d4f`
        : `inset 0 0 9e9Q ${props.theme.colors.clr_accent}`};
    transition: 0s;
  }
  @media (max-width: 900px) {
    width: 60%;
    padding: 10px 20px;
  }
`;
export default ProductSingleCard;
