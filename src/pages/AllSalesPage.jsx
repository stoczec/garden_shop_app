import React from 'react';
import SaleContainer from '../components/sale/SaleContainer';
import { styled } from 'styled-components';
import Title from '../components/reusable/Title';
import FiltersContainer from '../components/filters/FiltersContainer';

const AllSalesPage = () => {
  return (
    <Container>
      <CustomTitle>Products with sale</CustomTitle>
      <FiltersContainer />
      <SaleContainer />
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
