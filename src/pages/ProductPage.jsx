import React from 'react';
import { useParams } from 'react-router-dom';
import ProductSingleContainer from '../components/product/ProductSingleContainer';
import { styled } from 'styled-components';

const ProductPage = () => {
  const { id } = useParams();

  return (
    <Container>
      <ProductSingleContainer id={id} />
    </Container>
  );
};
const Container = styled.section`
  ${(props) => props.theme.mixins.container}
`;
export default ProductPage;
