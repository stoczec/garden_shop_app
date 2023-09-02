import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// IMP ========== REQUEST ========== //
import {
  fetchProducts,
  sortBy,
  filterByPrice,
  checkByDiscount,
} from '../store/slice/productSlice';
// IMP ========== COMPONENTS ========== //
import Loading from '../components/ui/Loading';
import NotFoundPage from './NotFoundPage';
import PageContainer from '../components/reusableComponents/PageContainer';
import BreadCrumbs from '../components/reusableComponents/BreadCrumbs';
import Title from '../assets/reusableStyledComponents/Title';
import FiltersContainer from '../components/filters/FiltersContainer';
import ProductContainer from '../components/product/ProductContainer';

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error, maxValue } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <NotFoundPage textError={error} />;
  }
  return (
    <PageContainer>
      <BreadCrumbs secondTitle={'All Products'} />
      <Title>All Products</Title>
      <FiltersContainer
        filter_select={sortBy}
        filter_form={filterByPrice}
        filter_checkbox={checkByDiscount}
        maxValue={maxValue}
      />
      <ProductContainer products_data={products} />
    </PageContainer>
  );
};

export default AllProductsPage;
