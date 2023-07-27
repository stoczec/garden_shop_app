import React from 'react';
import SaleBanner from '../../components/sale/SaleBanner/SaleBanner';
import CategoryCatalog from '../../components/category/CategoryCatalog/CategoryCatalog';
import GetDiscount from '../../components/GetDiscount/GetDiscount';

const MainPage = () => {
  return (
    <main>
      <SaleBanner />
      <CategoryCatalog />
      <GetDiscount />
    </main>
  );
};
export default MainPage;
