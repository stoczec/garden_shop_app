import React from 'react';
import { styled } from 'styled-components';
import FilterSelect from './FilterSelect';
import FilterFormPrice from './FilterFormPrice';

const FiltersContainer = () => {
  return (
    <Container>
      <FilterFormPrice />
      <FilterSelect />
    </Container>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
// const fs_80 = (props) => props.theme.font_size.fs_80;
// const clr_white = (props) => props.theme.colors.clr_white;
// const primary_lh = (props) => props.theme.line_height.primary;
// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default FiltersContainer;
