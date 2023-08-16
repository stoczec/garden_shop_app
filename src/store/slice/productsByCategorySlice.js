import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASEURL } from '../../assets/constants/URL';
import {
  sortPriceProductsReducer,
  sortProductReducer,
} from '../reducers/sortReducers';

const initialState = {
  loading: false,
  category: {},
  productsByCategory: [],
  error: '',
};

export const fetchProductsByCategory = createAsyncThunk(
  'productsByCategory/fetchProductsByCategory',
  async function (id, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASEURL}/categories/${id}`);
      if (!response.ok) {
        throw new Error(`Error ${response.status}. ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const productsByCategorySlice = createSlice({
  name: 'productsByCategory',
  initialState,
  reducers: {
    sort_product_by_category(state, action) {
      if (action.payload === 'title') {
        state.productsByCategory.sort((a, b) => a.title.localeCompare(b.title));
      } else if (action.payload === 'price_asc') {
        state.productsByCategory.sort(
          (a, b) =>
            (a.discont_price ? a.discont_price : a.price) -
            (b.discont_price ? b.discont_price : b.price)
        );
      } else if (action.payload === 'price_desc') {
        state.productsByCategory.sort(
          (a, b) =>
            (b.discont_price ? b.discont_price : b.price) -
            (a.discont_price ? a.discont_price : a.price)
        );
      } else if (action.payload === 'default') {
        state.productsByCategory.sort((a, b) => a.id - b.id);
      }
    },
    sort_price_products_by_category(state, action) {
      const { min_value, max_value } = action.payload;

      state.productsByCategory = state.productsByCategory.map((el) => {
        if (el.discont_price) {
          if (el.discont_price >= min_value && el.discont_price <= max_value) {
            el.visible = true;
          } else {
            el.visible = false;
          }
        } else {
          if (el.price >= min_value && el.price <= max_value) {
            el.visible = true;
          } else {
            el.visible = false;
          }
        }
        return el;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true; // change loading on true
        state.error = ''; // reset error
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false; // change loading on false
        state.category = action.payload.category;
        // state.productsByCategory = action.payload.data;
        state.productsByCategory = action.payload.data.map((product) => ({
          ...product,
          visible: true,
        }));
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false; // change loading on false
        state.error = action.payload;
      });
  },
});

export const { sort_product_by_category, sort_price_products_by_category } =
  productsByCategorySlice.actions;
export default productsByCategorySlice.reducer;
