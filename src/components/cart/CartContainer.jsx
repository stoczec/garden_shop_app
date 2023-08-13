import React from 'react';
import { styled } from 'styled-components';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';

const CartCOntainer = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart.cart);
  console.log(cartState);
  return (
    <div>
      {cartState.map((el) => (
        <CartItem key={el.id} {...el} />
      ))}
    </div>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
// const fs_80 = (props) => props.theme.font_size.fs_80;
// const clr_white = (props) => props.theme.colors.clr_white;
// const primary_lh = (props) => props.theme.line_height.primary;
// SCC ========== STYLED COMPONENTS ========== //
// const STYLED_COMPONENTS=styled.TAG``
export default CartCOntainer;
