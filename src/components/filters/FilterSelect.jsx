import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { Select } from 'antd';
const { Option } = Select;

const FilterSelect = ({ filter_select }) => {
  const dispatch = useDispatch();

  const handleSort = (value) => {
    dispatch(filter_select(value));
  };
  return (
    <Container>
      <Lable>
        <span>Sorted</span>
        <CustomSelect defaultValue="default" onChange={handleSort}>
          <Option value="default">By Featured</Option>
          <Option value="title">By title: A-Z</Option>
          <Option value="price_asc">By price: Low high</Option>
          <Option value="price_desc">By price: High low</Option>
        </CustomSelect>
      </Lable>
    </Container>
  );
};

// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.div`
  display: flex;
`;
const Lable = styled.label`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const CustomSelect = styled(Select)`
  width: 200px;
  margin-left: 10px;
  &.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(
      .ant-pagination-size-changer
    ):hover
    .ant-select-selector {
    border-color: ${(props) => props.theme.colors.clr_accent};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.clr_accent};
  }
  &.ant-select-focused.ant-select:not(.ant-select-disabled):not(
      .ant-select-customize-input
    ):not(.ant-pagination-size-changer)
    .ant-select-selector {
    border-color: ${(props) => props.theme.colors.clr_accent};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.clr_accent};
  }
`;
export default FilterSelect;
