import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { sort_product } from '../../store/slice/productSlice';

const FilterSelect = () => {
  const dispatch = useDispatch();
  const sort = (event) => {
    const { value } = event.target;
    dispatch(sort_product(value));
  };
  return (
    <Container>
      <label>
        <span>Sorted: </span>
        <select onInput={sort}>
          <option value="default">By default</option>
          <option value="title">By title A-Z</option>
          <option value="price_asc">By price ASC</option>
          <option on value="price_desc">
            By price DESC
          </option>
        </select>
      </label>
    </Container>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
// const fs_80 = (props) => props.theme.font_size.fs_80;
// const clr_white = (props) => props.theme.colors.clr_white;
// const primary_lh = (props) => props.theme.line_height.primary;
// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.div`
  margin: 50px auto;
  display: flex;
`;
export default FilterSelect;
