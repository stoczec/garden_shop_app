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

// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 65px;
  @media (max-width: 880px) {
    flex-direction: column;
    gap: 30px;
  }
`;
export default FiltersContainer;
