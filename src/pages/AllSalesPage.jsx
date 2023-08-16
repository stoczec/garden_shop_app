import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SaleContainer from '../components/sale/SaleContainer';
import { styled } from 'styled-components';
import Title from '../components/reusable/Title';
import FiltersContainer from '../components/filters/FiltersContainer';
import {
  fetchProductsWithSaleAsync,
  sortBy,
  filterByPrice,
} from '../store/slice/productWithSale';
import Loading from '../components/ui/Loading';
import NotFoundPage from './NotFoundPage';

const AllSalesPage = () => {
  const dispatch = useDispatch();

  const { productsWithSale, loading, error } = useSelector(
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
      <CustomTitle>Products with sale</CustomTitle>
      <FiltersContainer filter_select={sortBy} filter_form={filterByPrice} />
      <SaleContainer products_data={productsWithSale} />
    </Container>
  );
};
// SCC ========== STYLED COMPONENTS ========== //

const Container = styled.section`
  ${(props) => props.theme.mixins.container}
  padding-bottom: 30px;
`;
const CustomTitle = styled(Title)`
  margin-bottom: 80px;
`;
export default AllSalesPage;
