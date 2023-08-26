import React from 'react';
import { styled, keyframes } from 'styled-components';
import { BASEURL, CURRENCY } from '../../assets/constants/URL';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add_to_cart } from '../../store/slice/cartSlice';
import { Image } from 'antd';

const ProductCard = ({ id, image, title, price, discont_price }) => {
  const discount = Math.round(((price - discont_price) / price) * 100);
  const dispatch = useDispatch();
  const handleAddToCart = (event) => {
    event.preventDefault(); // Предотвращение стандартного перехода
    dispatch(add_to_cart({ id, image, title, discont_price, price }));
  };
  return (
    <Card>
      <CustomImage src={`${BASEURL}${image}`} alt={title} width={`100%`} />
      <Link to={`/products/${id}`}>
        <AddToCart onClick={handleAddToCart}>Add to cart</AddToCart>
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
const CustomImage = styled(Image)`
  &.ant-image-img {
    width: 100%;
    height: clamp(12.5rem, calc(11rem + 7.5vw), 20rem);
    object-fit: contain;
  }
`;
const AddToCart = styled.button`
  border-radius: 21px;
  border: 2px solid ${(props) => props.theme.colors.clr_accent};
  background: #f1fff1;
  padding: 15px 0;
  width: 70%;
  cursor: pointer;

  position: absolute;
  z-index: 100;
  top: clamp(9.38rem, calc(8.75rem + 3.13vw), 12.5rem);
  left: 50%; /* Сдвигаем элемент на половину его ширины влево */
  transform: translateX(-50%);

  color: ${(props) => props.theme.colors.clr_accent};
  font-size: ${(props) => props.theme.font_size.fs_24};
  line-height: ${(props) => props.theme.line_height.primary};
  text-align: center;

  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
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

  &:hover {
    ${Discount} {
      animation: ${Shake} 1.5s infinite;
    }
    ${AddToCart} {
      visibility: visible;
      opacity: 1;
    }
    box-shadow: 0 5px 10px ${(props) => props.theme.colors.clr_black};
  }
`;
const ContainerPrices = styled.div`
  width: clamp(12.5rem, calc(11rem + 7.5vw), 20rem);
  padding: 20px 10px;
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
  padding: 0 10px;
  color: #3a3a3a;
  font-size: ${(props) => props.theme.font_size.fs_16};
  font-weight: 500;
  letter-spacing: 0.48px;
  @media (max-width: 434px) {
    font-size: 16px;
  }
`;

export default ProductCard;
