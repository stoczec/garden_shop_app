import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
// IMP ========== REQUEST ========== //
import { decrement_count, increment_count } from '../../store/slice/cartSlice';
// IMP ========== COMPONENTS FROM LIBRARIES ========== //
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const Counter = ({ id, count, style }) => {
  const dispatch = useDispatch();
  return (
    <ContainerCount style={style}>
      <Minus
        onClick={() => {
          dispatch(decrement_count(id));
        }}
      />
      <Count>{count}</Count>

      <Plus
        onClick={() => {
          dispatch(increment_count(id));
        }}
      />
    </ContainerCount>
  );
};

// SCC ========== STYLED COMPONENTS ========== //
const ContainerCount = styled.div`
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 15px;
  border-radius: 12px;
  border: 1px solid #000;
  top: clamp(9.69rem, calc(9rem + 3.44vw), 13.13rem);
`;
const Count = styled.p`
  font-size: ${(props) => props.theme.font_size.fs_18};
  font-style: normal;
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.54px;
  @media (max-width: 1000px) {
    font-size: ${(props) => props.theme.font_size.fs_24};
  }
`;
const Minus = styled(MinusOutlined)`
  color: red;
  cursor: pointer;
  @media (max-width: 1000px) {
    font-size: ${(props) => props.theme.font_size.fs_28};
  }
`;
const Plus = styled(PlusOutlined)`
  color: green;
  cursor: pointer;
  @media (max-width: 1000px) {
    font-size: ${(props) => props.theme.font_size.fs_28};
  }
`;
export default Counter;
