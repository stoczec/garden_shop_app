import React from 'react';
// IMP ========== COMPONENTS ========== //
import SaleBanner from '../components/sale/SaleBanner';
import CategoryCatalog from '../components/category/CategoryCatalog';
import GetDiscount from '../components/GetDiscount/GetDiscount';
import SaleCatalog from '../components/sale/SaleCatalog';

const MainPage = () => {
  return (
    <main>
      <SaleBanner />
      <CategoryCatalog />
      <GetDiscount />
      <SaleCatalog />
    </main>
  );
};

export default MainPage;
