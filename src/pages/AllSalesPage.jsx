import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// IMP ========== REQUEST ========== //
import {
  fetchProductsWithSaleAsync,
  sortBy,
  filterByPrice,
} from '../store/slice/productWithSaleSlice';
// IMP ========== COMPONENTS ========== //
import Loading from '../components/ui/Loading';
import NotFoundPage from './NotFoundPage';
import PageContainer from '../components/reusableComponents/PageContainer';
import BreadCrumbs from '../components/reusableComponents/BreadCrumbs';
import Title from '../assets/reusableStyledComponents/Title';
import FiltersContainer from '../components/filters/FiltersContainer';
import SaleContainer from '../components/sale/SaleContainer';

const AllSalesPage = () => {
  const dispatch = useDispatch();
  const { productsWithSale, loading, error, maxValue } = useSelector(
    (state) => state.productsWithSale
  );
  useEffect(() => {
    dispatch(fetchProductsWithSaleAsync());
  }, [dispatch]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <NotFoundPage textError={error} />;
  }
  return (
    <PageContainer>
      <BreadCrumbs secondTitle={'Special Offers'} />
      <Title>Discounted Products</Title>
      <FiltersContainer
        filter_select={sortBy}
        filter_form={filterByPrice}
        maxValue={maxValue}
        not_filter_checkbox
      />
      <SaleContainer products_data={productsWithSale} />
    </PageContainer>
  );
};

export default AllSalesPage;
