import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slice/productSlice';
import categorySlice from './slice/categorySlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    categories: categorySlice,
  },
});
