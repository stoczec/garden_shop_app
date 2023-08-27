import React from 'react';
import ItemContainer from '../reusableComponents/ItemContainer';

const ProductContainer = ({ products_data }) => {
  return (
    <>
      <ItemContainer
        products_data={products_data}
        customPageSizeOptions={[8, 16, 24, 32]} // массив с количеством отображаемых товаров на странице
      />
    </>
  );
};

export default ProductContainer;
