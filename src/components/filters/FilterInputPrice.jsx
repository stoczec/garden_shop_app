import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { Slider, InputNumber } from 'antd';

const FilterInputPrice = ({ filter_form, maxValue }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({ min: 0, max: 0 });
  const [isMaxSet, setIsMaxSet] = useState(0); // Добавляем состояние

  useEffect(() => {
    if (!isMaxSet) {
      // Устанавливаем значение max только в начале
      setValue({ ...value, max: maxValue });
      setIsMaxSet(maxValue);
    }
  }, [maxValue, isMaxSet, value]);

  const filter_price = (minValue, maxValue) => {
    dispatch(filter_form({ min_value: minValue, max_value: maxValue }));
  };

  const handleRangeChange = (newValue) => {
    setValue(newValue);
    filter_price(newValue.min, newValue.max);
  };

  const priceFormatter = (value) => {
    return `$${value}`; // Добавляем знак доллара перед значением
  };
  return (
    <Container>
      <Title>Price Range</Title>
      <Text>Use slider or min and max price</Text>
      <ContainerInputs>
        <span>Min</span>
        <CustomInputNumber
          value={value.min}
          onChange={(minValue) =>
            handleRangeChange({ ...value, min: minValue })
          }
          min={0}
          formatter={priceFormatter}
        />
        <span>- Max</span>

        <CustomInputNumber
          value={value.max}
          onChange={(maxValue) =>
            handleRangeChange({ ...value, max: maxValue })
          }
          min={0}
          max={isMaxSet}
          formatter={priceFormatter}
        />
      </ContainerInputs>
      <CustomSlider
        range
        value={[value.min, value.max]}
        onChange={(newValues) =>
          handleRangeChange({ min: newValues[0], max: newValues[1] })
        }
        min={0}
        max={isMaxSet}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.span`
  font-size: ${(props) => props.theme.font_size.fs_20};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.6px;
`;
const ContainerInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const CustomSlider = styled(Slider)`
  width: 100%;
  &.ant-slider .ant-slider-track {
    background-color: ${(props) => props.theme.colors.clr_accent};
  }
  &.ant-slider .ant-slider-handle::after {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.clr_accent};
  }
`;
const CustomInputNumber = styled(InputNumber)`
  &.ant-input-number:hover {
    /* color: #yourTextColor; */
    border-color: ${(props) => props.theme.colors.clr_accent};
  }
`;
const Text = styled.p`
  font-size: ${(props) => props.theme.font_size.fs_12};
  color: #8b8b8b;
`;
export default FilterInputPrice;
