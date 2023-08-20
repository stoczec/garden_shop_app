import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Checkbox } from 'antd';
import { useDispatch } from 'react-redux';

const FilterCheckbox = ({ filter_checkbox }) => {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleSort = (event) => {
    dispatch(filter_checkbox(event.target.checked));
  };
  const handleChange = () => setChecked(!checked);
  return (
    <Container>
      <label>Discounted items</label>
      <CustomCheckbox
        onClick={handleSort}
        checked={checked}
        onChange={handleChange}
      />
    </Container>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const CustomCheckbox = styled(Checkbox)`
  & .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${(props) => props.theme.colors.clr_accent};
    border-color: ${(props) => props.theme.colors.clr_accent};
  }
  &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background-color: ${(props) => props.theme.colors.clr_accent};
  }

  &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-inner,
  :where(.css-dev-only-do-not-override-17a39f8).ant-checkbox:not(
      .ant-checkbox-disabled
    ):hover
    .ant-checkbox-inner {
    border-color: ${(props) => props.theme.colors.clr_accent};
  }
`;
export default FilterCheckbox;
