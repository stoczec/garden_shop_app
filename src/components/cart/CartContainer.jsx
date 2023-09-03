import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

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

export default CartContainer;
