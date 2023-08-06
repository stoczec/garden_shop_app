import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slice/productSlice';
import categorySlice from './slice/categorySlice';
import productSingleSlice from './slice/productSingleSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    product: productSingleSlice,
    categories: categorySlice,
  },
});
