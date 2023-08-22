import React from 'react';
import { styled } from 'styled-components';
import { BASEURL, CURRENCY } from '../../assets/constants/URL';
import TitleRE from '../../assets/reusableStyledComponents/Title';

import {
  Discount,
  CustomImage,
  AddToCart,
  Card,
  ContainerPrices,
  DiscountPrice,
  Title,
} from './ProductCard';
import { add_to_cart } from '../../store/slice/cartSlice';
import { useDispatch } from 'react-redux';

const ProductSingleCard = ({
  id,
  image,
  title,
  price,
  discont_price,
  description,
}) => {
  const discount = Math.round(((price - discont_price) / price) * 100);
  const dispatch = useDispatch();
  const handleAddToCart = (event) => {
    event.preventDefault(); // Предотвращение стандартного перехода
    dispatch(add_to_cart({ id, image, title, discont_price, price }));
  };
  return (
    <_Card>
      <SingleTitle>{title}</SingleTitle>

      <SingleContainer>
        <SingleContainerImage>
          <SingleImage src={`${BASEURL}${image}`} alt={title} />
        </SingleContainerImage>
        <SingleContainerPricesButtonDescription>
          <SingleContainerPrices $exist_discont_price={discont_price}>
            <SingleDiscountPrice>
              {discont_price ? `${discont_price}` : ''}
              {discont_price && <CurrencySymbol>{CURRENCY}</CurrencySymbol>}
            </SingleDiscountPrice>
            <_Price>
              {`${price}`}
              <CurrencySymbol>{CURRENCY}</CurrencySymbol>
            </_Price>
            <SingleDiscount>
              {discont_price ? `-${discount}` : ''}
              {discont_price && <PercentageSpan>%</PercentageSpan>}
            </SingleDiscount>
          </SingleContainerPrices>
          <SingleAddToCart onClick={handleAddToCart}>
            Add to cart
          </SingleAddToCart>
          <SingleContainerDescription>
            <TitleDescrption>Description</TitleDescrption>
            <Description>{description}</Description>
          </SingleContainerDescription>
        </SingleContainerPricesButtonDescription>
      </SingleContainer>
    </_Card>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const clr_white = (props) => props.theme.colors.clr_white;
const clr_black = (props) => props.theme.colors.clr_black;
const clr_accent = (props) => props.theme.colors.clr_accent;

// SCC ========== STYLED COMPONENTS ========== //
const SingleAddToCart = styled(AddToCart)`
  visibility: visible;
  opacity: 1;
  position: relative;
  top: 0;
  left: 0;
  transform: translateX(0);
  margin-bottom: 66px;
  border-radius: 10px;
  background: ${clr_accent};
  color: ${clr_white};
  font-size: ${(props) => props.theme.font_size.fs_28};
  font-weight: 700;

  box-shadow: 0 0 40px 40px ${clr_accent} inset, 0 0 0 0 ${clr_accent};
  transition: all 350ms ease-in-out;
  &:hover {
    color: ${clr_accent};
    background-color: ${clr_white};
    box-shadow: 0 0 10px 0 ${clr_accent} inset, 0 0 10px 4px ${clr_accent};
  }
`;
const _Card = styled(Card)`
  padding: 60px 0 190px 0;
  box-shadow: none;
  align-items: start;
  gap: 30px;
  &:hover {
    box-shadow: none;
    ${SingleAddToCart} {
      visibility: visible;
      opacity: 1;
    }
    ${Discount} {
      filter: none;
      animation: none;
    }
  }
`;
const SingleTitle = styled(Title)`
  padding: 0;
  font-size: ${(props) => props.theme.font_size.fs_36};
  font-weight: 600;
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 1.08px;
`;
const SingleContainer = styled.div`
  display: flex;
  gap: clamp(1.88rem, calc(1.5rem + 1.88vw), 3.75rem);
`;
const SingleContainerImage = styled.div`
  /* padding: 0 60px; */
`;
const SingleImage = styled(CustomImage)`
  &.ant-image-img {
    width: clamp(17.5rem, calc(12.13rem + 26.88vw), 44.38rem);
    height: clamp(17.5rem, calc(12.13rem + 26.88vw), 44.38rem);
  }
`;
const SingleContainerPricesButtonDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
const SingleContainerPrices = styled(ContainerPrices)`
  padding-top: clamp(1.88rem, calc(1.45rem + 2.13vw), 4rem);
  align-items: baseline;
  margin-bottom: 40px;
`;
const SingleDiscountPrice = styled(DiscountPrice)`
  font-size: ${(props) => props.theme.font_size.fs_70};
  font-style: normal;
  letter-spacing: 2.1px;
`;
const _Price = styled.p`
  font-size: ${(props) => props.theme.font_size.fs_70};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 2.1px;
`;
const CurrencySymbol = styled.span`
  color: ${(props) => (props.$exist_discont_price ? '#8b8b8b' : clr_black)};
  font-size: ${(props) => props.theme.font_size.fs_20};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.6px;
`;
const SingleDiscount = styled(Discount)`
  font-size: 28px;
  letter-spacing: 0.84px;
`;
const PercentageSpan = styled.span`
  font-size: ${(props) => props.theme.font_size.fs_20};
  letter-spacing: 0.6px;
`;
const SingleContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const TitleDescrption = styled(TitleRE)`
  font-size: ${(props) => props.theme.font_size.fs_20};
  font-weight: 600;
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.6px;
`;
const Description = styled.p`
  font-size: ${(props) => props.theme.font_size.fs_20};
  font-weight: 500;
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.6px;
`;
export default ProductSingleCard;
