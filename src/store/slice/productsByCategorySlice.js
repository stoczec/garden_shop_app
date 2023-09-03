import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASEURL } from '../../assets/constants/URL';
import axios from 'axios';

const initialState = {
  loading: false,
  category: {},
  productsByCategory: [],
  error: '',
  isChecked: false,
  minValue: 0,
  maxValue: 0,
};

export const fetchProductsByCategory = createAsyncThunk(
  'productsByCategory/fetchProductsByCategory',
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios.get(`${BASEURL}/categories/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const productsByCategorySlice = createSlice({
  name: 'productsByCategory',
  initialState,
  reducers: {
    sortBy(state, action) {
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
    filterByPrice(state, action) {
      const { min_value, max_value } = action.payload;
      state.minValue = min_value;
      state.maxValue = max_value;

      state.productsByCategory = state.productsByCategory.map((el) => {
        if (state.isChecked) {
          if (el.discont_price >= min_value && el.discont_price <= max_value) {
            el.visible = true;
          } else {
            el.visible = false;
          }
        } else if (el.discont_price) {
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
    checkByDiscount(state, action) {
      if (action.payload) {
        state.isChecked = action.payload; // = true
        state.productsByCategory.forEach((el) => {
          if (el.discont_price && el.visible) {
            el.visible = true;
          } else {
            el.visible = false;
          }
        });
      } else {
        state.isChecked = !state.isChecked; // = false
        state.productsByCategory.forEach((el) => {
          if (
            // если есть discont_price и она >= min и <= max из FilterInputPrice
            (el.discont_price &&
              el.discont_price >= state.minValue &&
              el.discont_price <= state.maxValue) ||
            // или если нет discont_price и price >= min и <= max из FilterInputPrice
            (!el.discont_price &&
              el.price >= state.minValue &&
              el.price <= state.maxValue)
          ) {
            el.visible = true;
          } else {
            el.visible = false;
          }
        });
      }
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
        // max price for Input of FilterInputPrice
        const maxPrice = Math.max(
          ...action.payload.data.map((product) =>
            product.discont_price ? product.discont_price : product.price
          )
        );
        state.maxValue = maxPrice;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false; // change loading on false
        state.error = action.payload;
      });
  },
});

export const { sortBy, filterByPrice, checkByDiscount } =
  productsByCategorySlice.actions;
export default productsByCategorySlice.reducer;
