import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  total_count: 0,
  total_sum: 0.0,
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
      const updatedCart = checkProduct(state.cart, action.payload);
      state.cart = updatedCart;
      state.total_count = updatedCart.reduce(
        (total, product) => total + product.count,
        0
      );
      state.total_sum = updatedCart.reduce(
        (total, product) =>
          total +
          (product.discont_price
            ? product.discont_price * product.count
            : product.price * product.count),
        0
      );
    },
    increment_count(state, action) {
      const product = state.cart.find((el) => el.id === action.payload);
      if (product) {
        product.count++;
        state.total_count++;
        state.total_sum += product.discont_price
          ? product.discont_price
          : product.price;
      }
    },
    decrement_count(state, action) {
      const product = state.cart.find((el) => el.id === action.payload);
      if (product) {
        if (product.count === 1) {
          state.cart = state.cart.filter((el) => el.id !== action.payload);
          state.total_count--;
          state.total_sum -= product.discont_price
            ? product.discont_price
            : product.price;
        } else {
          product.count--;
          state.total_count--;
          state.total_sum -= product.discont_price
            ? product.discont_price
            : product.price;
        }
      }
    },
    delete_from_cart(state, action) {
      const product = state.cart.find((el) => el.id === action.payload);
      if (product) {
        state.cart = state.cart.filter((el) => el.id !== action.payload);
        state.total_count -= product.count;
        state.total_sum -= product.discont_price
          ? product.discont_price * product.count
          : product.price * product.count;
      }
    },
    delete_all_products(state, action) {
      state.cart = [];
      state.total_count = 0;
      state.total_sum = 0;
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
