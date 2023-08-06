import React from 'react';
import ProductContainer from '../components/product/ProductContainer';
import Title from '../components/reusable/Title';
import { styled } from 'styled-components';

const AllProductsPage = () => {
  return (
    <Container>
      <Title>All products</Title>
      <ProductContainer />
    </Container>
  );
};
const Container = styled.div`
  ${(props) => props.theme.mixins.container};
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, calc(2rem + 2.5vw), 5rem);
  padding-bottom: 30px;
`;
export default AllProductsPage;
