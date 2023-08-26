import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// IMP ========== COMPONENTS ========== //
import PageContainer from '../components/reusableComponents/PageContainer';
import BreadCrumbs from '../components/reusableComponents/BreadCrumbs';
import ProductSingleContainer from '../components/product/ProductSingleContainer';

const ProductPage = () => {
  const { id } = useParams();
  const { titleBreadCrumbs } = useSelector((state) => state.products); // массив с title товаров
  const title = titleBreadCrumbs.find((el) => +el.id === +id)?.title; // находим конкретный title

  return (
    <PageContainer>
      <BreadCrumbs
        secondLink={'/products'}
        secondTitle={'All Products'}
        thirdTitle={title}
      />

      <ProductSingleContainer id={id} />
    </PageContainer>
  );
};

export default ProductPage;
