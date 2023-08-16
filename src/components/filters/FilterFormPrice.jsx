import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';

const FilterFormPrice = ({ filter_form }) => {
  const dispatch = useDispatch();

  const filter_price = (event) => {
    event.preventDefault();
    const { min, max } = event.target;
    const min_value = +min.value || 0;
    const max_value = +max.value || Infinity;
    dispatch(filter_form({ min_value, max_value }));
  };
  return (
    <Form onSubmit={filter_price}>
      <span>Price:</span>
      <Input type="number" placeholder="from" name="min" />
      <Input type="number" placeholder="to" name="max" />
      <button>Filter</button>
    </Form>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
// const fs_80 = (props) => props.theme.font_size.fs_80;
// const clr_white = (props) => props.theme.colors.clr_white;
// const primary_lh = (props) => props.theme.line_height.primary;
// SCC ========== STYLED COMPONENTS ========== //
const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Input = styled.input`
  width: 100px;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid ${(props) => props.theme.colors.clr_black};
`;
export default FilterFormPrice;
