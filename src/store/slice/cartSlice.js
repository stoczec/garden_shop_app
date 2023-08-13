import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const checkProduct = (cart, payload) => {
  const productInCart = cart.find((el) => el.id === payload.id);
  if (!productInCart) {
    return [...cart, { ...payload, count: 1 }];
  } else {
    productInCart.count++;
    return [...cart];
  }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_to_cart(state, action) {
      state.cart = checkProduct(state.cart, action.payload);
    },
    increment_count(state, action) {
      state.cart.find((el) => el.id === action.payload).count++;
    },
    decrement_count(state, action) {
      const product = state.cart.find((el) => el.id === action.payload);
      if (product) {
        if (product.count === 1) {
          state.cart = state.cart.filter((el) => el.id !== action.payload);
        } else {
          product.count--;
        }
      }
    },
    delete_from_cart(state, action) {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
    },
    delete_all_products(state, action) {
      state.cart = [];
    },
  },
});

export const {
  add_to_cart,
  increment_count,
  decrement_count,
  delete_from_cart,
  delete_all_products,
} = cartSlice.actions;
export default cartSlice.reducer;
