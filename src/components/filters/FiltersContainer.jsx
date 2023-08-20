import React from 'react';
import { styled } from 'styled-components';
import FilterSelect from './FilterSelect';
import FilterInputPrice from './FilterInputPrice';
import FilterCheckbox from './FilterCheckbox';

const FiltersContainer = ({
  filter_select,
  filter_form,
  filter_checkbox,
  maxValue,
  not_filter_checkbox,
}) => {
  return (
    <Container>
      <FilterInputPrice filter_form={filter_form} maxValue={maxValue} />
      {!not_filter_checkbox && (
        <FilterCheckbox filter_checkbox={filter_checkbox} />
      )}
      <FilterSelect filter_select={filter_select} />
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
