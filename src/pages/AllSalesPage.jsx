import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SaleContainer from '../components/sale/SaleContainer';
import { styled } from 'styled-components';
import Title from '../assets/reusableStyledComponents/Title';
import FiltersContainer from '../components/filters/FiltersContainer';
import {
  fetchProductsWithSaleAsync,
  sortBy,
  filterByPrice,
} from '../store/slice/productWithSaleSlice';
import Loading from '../components/ui/Loading';
import NotFoundPage from './NotFoundPage';
import BreadCrumbs from '../components/reusableComponents/BreadCrumbs';

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
    <Container>
      <BreadCrumbs secondTitle={'All Sales'} />
      <Title>Products with sale</Title>
      <FiltersContainer
        filter_select={sortBy}
        filter_form={filterByPrice}
        maxValue={maxValue}
        not_filter_checkbox
      />
      <SaleContainer products_data={productsWithSale} />
    </Container>
  );
};
// SCC ========== STYLED COMPONENTS ========== //

const Container = styled.section`
  ${(props) => props.theme.mixins.container}
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, calc(2rem + 2.5vw), 5rem);
  padding-bottom: 30px;
`;

export default AllSalesPage;
