import React from 'react';
// import { styled } from 'styled-components';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartContainer = () => {
  const cartState = useSelector((state) => state.cart.cart);
  return (
    <div>
      {cartState.map((el, index) => (
        <CartItem key={el.id} {...el} />
      ))}
    </div>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
// SCC ========== STYLED COMPONENTS ========== //
export default CartContainer;
