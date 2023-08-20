import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slice/productSlice';
import categorySlice from './slice/categorySlice';
import productSingleSlice from './slice/productSingleSlice';
import productsByCategorySlice from './slice/productsByCategorySlice';
import cartSlice from './slice/cartSlice';
import productsWithSaleSlice from './slice/productWithSaleSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    product: productSingleSlice,
    productsByCategory: productsByCategorySlice,
    categories: categorySlice,
    cart: cartSlice,
    productsWithSale: productsWithSaleSlice,
  },
});
