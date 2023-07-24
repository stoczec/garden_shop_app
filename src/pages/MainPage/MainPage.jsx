import React from 'react';
import SaleBanner from '../../components/sale/SaleBanner/SaleBanner';
import CategoryCarousel from '../../components/category/CategoryCarousel/CategoryCarousel';

const MainPage = () => {
  return (
    <main>
      <SaleBanner />
      <CategoryCarousel />
    </main>
  );
};
export default MainPage;
