import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
// IMP ========== COMPONENTS ========== //
import CategoryContaner from './CategoryContainer';
import Title from '../../assets/reusableStyles/Title';

const CategoryCatalog = () => {
  return (
    <Container>
      <Header>
        <Title>Catalog</Title>
        <Button to="/categories">All categories</Button>
      </Header>
      <CategoryContaner showCount={4} />
    </Container>
  );
};
// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const clr_white = (props) => props.theme.colors.clr_white;
const clr_grey = '#8b8b8b';
// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.section`
  ${(props) => props.theme.mixins.container};
  padding: 40px 0 90px 0;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  gap: clamp(3rem, calc(2.4rem + 3vw), 6rem);
  margin-bottom: 20px;
  @media (max-width: 376px) {
    justify-content: center;
  }
`;
const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 30px;
  padding: 8px 6px;
  border: 1px solid ${clr_grey};
  border-radius: 15px;

  color: ${clr_grey};
  font-size: ${(props) => props.theme.font_size.fs_12};
  font-weight: 700;
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.36px;

  box-shadow: 0 0 40px 40px ${clr_white} inset, 0 0 0 0 ${clr_grey};
  transition: all 350ms ease-in-out;
  &:hover {
    color: ${clr_white};
    background-color: ${clr_grey};
    box-shadow: 0 0 10px 0 ${clr_grey} inset, 0 0 10px 4px ${clr_grey};
  }
`;

export default CategoryCatalog;
