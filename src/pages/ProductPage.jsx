import React from 'react';
import { useParams } from 'react-router-dom';
import ProductSingleContainer from '../components/product/ProductSingleContainer';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import BreadCrumbs from '../components/reusableComponents/BreadCrumbs';

const ProductPage = () => {
  const { id } = useParams();
  const { titleBreadCrumbs } = useSelector((state) => state.products); // массив с title товаров
  const title = titleBreadCrumbs.find((el) => el.id == id)?.title; // находим конкретный title

  return (
    <Container>
      <BreadCrumbs
        secondLink={'/products'}
        secondTitle={'All Products'}
        thirdTitle={title}
      />

      <ProductSingleContainer id={id} />
    </Container>
  );
};
const Container = styled.section`
  ${(props) => props.theme.mixins.container}
`;

export default ProductPage;
