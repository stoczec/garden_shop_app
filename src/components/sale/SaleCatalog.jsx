import React from 'react';
import { styled } from 'styled-components';
import Title from '../reusable/Title';
import SaleContainer from './SaleContainer';

const SaleCatalog = () => {
  return (
    <Catalog>
      <CustomTitle>Sale</CustomTitle>
      <SaleContainer showCount={4} />
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
