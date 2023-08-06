import React from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import ProductContainer from '../components/product/ProductContainer';
import Title from '../components/reusable/Title';

const ProductsByCategoriesPage = () => {
  const { category, id } = useParams();

  return (
    <Container>
      <CustomTitle>{category}</CustomTitle>
      <ProductContainer id={id} />
    </Container>
  );
};
const Container = styled.div`
  ${(props) => props.theme.mixins.container};
`;
const CustomTitle = styled(Title)`
  margin-bottom: 80px;
`;

export default ProductsByCategoriesPage;
