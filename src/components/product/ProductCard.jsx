import React from 'react';
import { styled } from 'styled-components';
import { BASEURL, CURRENCY } from '../../assets/constants/URL';

const ProductCard = ({ image, title, price, discont_price }) => {
  const discount = Math.round(((price - discont_price) / price) * 100);
  return (
    <Card>
      <Image src={`${BASEURL}${image}`} alt={title} />
      <PricesContainer exist_discont_price={discont_price}>
        <DiscountPrice>
          {discont_price ? `${discont_price}` : ''}
          {discont_price && <CurrencySymbol>{CURRENCY}</CurrencySymbol>}
        </DiscountPrice>

        <Price exist_discont_price={discont_price}>
          {`${price}`}
          <CurrencySymbol exist_discont_price={discont_price}>
            {CURRENCY}
          </CurrencySymbol>
        </Price>

        <Discount>{discont_price ? `-${discount}%` : ''}</Discount>
      </PricesContainer>
      <Title>{title}</Title>
    </Card>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const fs_16 = (props) => props.theme.font_size.fs_16;
const fs_20 = (props) => props.theme.font_size.fs_20;
const fs_30 = (props) => props.theme.font_size.fs_30;
const clr_black = (props) => props.theme.colors.clr_black;
const clr_sale = (props) => props.theme.colors.clr_sale;
const primary_lh = (props) => props.theme.line_height.primary;
// SCC ========== STYLED COMPONENTS ========== //
const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  padding: 0 10px;
`;
const Image = styled.img`
  width: clamp(11.25rem, calc(9.75rem + 7.5vw), 18.75rem);
  height: clamp(11.25rem, calc(9.75rem + 7.5vw), 18.75rem);
  object-fit: contain;
  margin-bottom: 20px;
`;
const PricesContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: ${(props) =>
    props.exist_discont_price ? 'space-between' : 'start'};
  align-items: center;
  margin-bottom: 10px;
`;
const DiscountPrice = styled.p`
  color: ${clr_black};
  font-size: ${fs_30};
  line-height: ${primary_lh};
  letter-spacing: 0.9px;
`;
const Price = styled.p`
  color: ${(props) => (props.exist_discont_price ? '#8b8b8b' : clr_black)};
  font-size: ${(props) => (props.exist_discont_price ? fs_20 : fs_30)};
  font-weight: ${(props) => (props.exist_discont_price ? 500 : 600)};
  line-height: ${primary_lh};
  letter-spacing: 0.6px;
  text-decoration-line: ${(props) =>
    props.exist_discont_price ? 'line-through' : 'none'};
`;
const Discount = styled.p`
  color: ${clr_sale};
  font-size: ${fs_20};
  line-height: ${primary_lh};
  letter-spacing: 0.6px;
`;
const CurrencySymbol = styled.span`
  color: ${(props) => (props.exist_discont_price ? '#8b8b8b' : clr_black)};
  font-size: ${fs_20};
  line-height: ${primary_lh};
  letter-spacing: 0.6px;
`;
const Title = styled.h6`
  color: #3a3a3a;
  font-size: ${fs_16};
  font-weight: 500;
  letter-spacing: 0.48px;
`;
export default ProductCard;
