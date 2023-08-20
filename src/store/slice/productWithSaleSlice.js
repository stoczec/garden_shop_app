import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASEURL } from '../../assets/constants/URL';

const initialState = {
  loading: false,
  productsWithSale: [],
  error: '',
  minValue: 0,
  maxValue: 0,
};

export const fetchProductsWithSaleAsync = createAsyncThunk(
  'productsWithSale/fetchProductsWithSale',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASEURL}/products/all`);
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

export const productsWithSaleSlice = createSlice({
  name: 'productsWithSale',
  initialState,
  reducers: {
    sortBy(state, action) {
      if (action.payload === 'title') {
        state.productsWithSale.sort((a, b) => a.title.localeCompare(b.title));
      } else if (action.payload === 'price_asc') {
        state.productsWithSale.sort(
          (a, b) =>
            (a.discont_price ? a.discont_price : a.price) -
            (b.discont_price ? b.discont_price : b.price)
        );
      } else if (action.payload === 'price_desc') {
        state.productsWithSale.sort(
          (a, b) =>
            (b.discont_price ? b.discont_price : b.price) -
            (a.discont_price ? a.discont_price : a.price)
        );
      } else if (action.payload === 'default') {
        state.productsWithSale.sort((a, b) => a.id - b.id);
      }
    },
    filterByPrice(state, action) {
      const { min_value, max_value } = action.payload;
      state.minValue = min_value;
      state.maxValue = max_value;

      state.productsWithSale = state.productsWithSale.map((el) => {
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
      .addCase(fetchProductsWithSaleAsync.pending, (state) => {
        state.loading = true; // change loading on true
        state.error = ''; // reset error
      })
      .addCase(fetchProductsWithSaleAsync.fulfilled, (state, action) => {
        state.loading = false; // change loading on false
        state.productsWithSale = action.payload
          .filter((product) => product.discont_price)
          .map((product) => ({
            ...product,
            visible: true,
          }));
        // max price for Input of FilterInputPrice
        const maxPrice = Math.max(
          ...action.payload.map((product) =>
            product.discont_price ? product.discont_price : product.price
          )
        );
        state.maxValue = maxPrice;
      })
      .addCase(fetchProductsWithSaleAsync.rejected, (state, action) => {
        state.loading = false; // change loading on false
        state.error = action.payload;
      });
  },
});

export const { sortBy, filterByPrice } = productsWithSaleSlice.actions;
export default productsWithSaleSlice.reducer;
