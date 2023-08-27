import React from 'react';
// IMP ========== COMPONENTS ========== //
import PageContainer from '../components/reusableComponents/PageContainer';
import BreadCrumbs from '../components/reusableComponents/BreadCrumbs';
import Title from '../assets/reusableStyledComponents/Title';
import CategoryContainer from '../components/category/CategoryContainer';

const CategoriesPage = () => {
  return (
    <PageContainer>
      <BreadCrumbs secondTitle={'Categories'} />
      <Title>{'Categories'}</Title>
      <CategoryContainer />
    </PageContainer>
  );
};

export default CategoriesPage;
