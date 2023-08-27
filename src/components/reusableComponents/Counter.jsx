import React from 'react';
import { styled } from 'styled-components';
import { BiMinus } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  decrement_count,
  delete_from_cart,
  increment_count,
} from '../../store/slice/cartSlice';
import { useDispatch } from 'react-redux';

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

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
// const fs_80 = (props) => props.theme.font_size.fs_80;
// const clr_white = (props) => props.theme.colors.clr_white;
// const primary_lh = (props) => props.theme.line_height.primary;
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
const Minus = styled(BiMinus)`
  color: red;
  cursor: pointer;
  @media (max-width: 1000px) {
    font-size: ${(props) => props.theme.font_size.fs_28};
  }
`;
const Plus = styled(AiOutlinePlus)`
  color: green;
  cursor: pointer;
  @media (max-width: 1000px) {
    font-size: ${(props) => props.theme.font_size.fs_28};
  }
`;
export default Counter;
