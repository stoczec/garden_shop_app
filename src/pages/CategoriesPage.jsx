import React from 'react';
import CategoryContaner from '../components/category/CategoryContainer';
import Title from '../assets/reusableStyledComponents/Title';
import { styled } from 'styled-components';
import BreadCrumbs from '../components/reusableComponents/BreadCrumbs';

const CategoriesPage = () => {
  return (
    <Container>
      <BreadCrumbs secondTitle={'Categories'} />
      <Title>{'Categories'}</Title>
      <CategoryContaner />
    </Container>
  );
};
// VARIABLES STYLED COMPONENTS
// STYLED COMPONENTS
const Container = styled.div`
  ${(props) => props.theme.mixins.container};
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, calc(2rem + 2.5vw), 5rem);
  padding: 80px 0 50px 0;
`;
export default CategoriesPage;
