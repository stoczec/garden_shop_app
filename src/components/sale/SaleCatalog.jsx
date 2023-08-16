import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import Title from '../reusable/Title';
import SaleContainer from './SaleContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsWithSaleAsync } from '../../store/slice/productWithSale';

const SaleCatalog = () => {
  const dispatch = useDispatch();

  const { productsWithSale } = useSelector((state) => state.productsWithSale);
  useEffect(() => {
    dispatch(fetchProductsWithSaleAsync());
  }, [dispatch]);
  return (
    <Catalog>
      <CustomTitle>Sale</CustomTitle>
      <SaleContainer products_data={productsWithSale} showCount={4} />
    </Catalog>
  );
};

// SCC ========== STYLED COMPONENTS ========== //
const Catalog = styled.section`
  ${(props) => props.theme.mixins.container}
  padding: 50px 0 45px 0;
`;
const CustomTitle = styled(Title)`
  margin-bottom: 20px;
  @media (max-width: 434px) {
    text-align: center;
  }
`;

export default SaleCatalog;
