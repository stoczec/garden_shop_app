import React from 'react';
import ItemContainer from '../reusableComponents/ItemContainer';

const SaleContainer = ({ showCount, products_data }) => {
  const visibleSaleProduct = products_data.slice(0, showCount);

  return (
    <>
      <ItemContainer
        products_data={visibleSaleProduct}
        customPageSizeOptions={[4, 8, 12, 16]}
        showCount={showCount}
      />
    </>
  );
};

export default SaleContainer;
