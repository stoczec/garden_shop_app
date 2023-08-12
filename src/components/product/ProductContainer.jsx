import React from 'react';
import { styled } from 'styled-components';
import ProductCard from './ProductCard';

const ProductContainer = ({ products_data }) => {
  return (
    <Container>
      {products_data.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Container>
  );
};
// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    clamp(12.5rem, calc(11rem + 7.5vw), 20rem)
  );
  justify-content: space-between;
  row-gap: 45px;
  @media (max-width: 957px) {
    justify-content: space-around;
  }
`;
export default ProductContainer;
