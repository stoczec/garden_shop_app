import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASEURL } from '../../assets/constants/URL';

const initialState = {
  loading: false,
  products: [],
  error: '',
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
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

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sort_product(state, action) {
      if (action.payload === 'title') {
        state.products.sort((a, b) => a.title.localeCompare(b.title));
      } else if (action.payload === 'price_asc') {
        state.products.sort(
          (a, b) =>
            (a.discont_price ? a.discont_price : a.price) -
            (b.discont_price ? b.discont_price : b.price)
        );
      } else if (action.payload === 'price_desc') {
        state.products.sort(
          (a, b) =>
            (b.discont_price ? b.discont_price : b.price) -
            (a.discont_price ? a.discont_price : a.price)
        );
      } else if (action.payload === 'default') {
        state.products.sort((a, b) => a.id - b.id);
      }
    },
    sort_price_products(state, action) {
      const { min_value, max_value } = action.payload;

      state.products = state.products.map((el) => {
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
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true; // change loading on true
        state.error = ''; // reset error
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false; // change loading on false
        state.products = action.payload.map((product) => ({
          ...product,
          visible: true,
        }));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false; // change loading on false
        state.error = action.payload;
      });
  },
});

export const { sort_product, sort_price_products } = productSlice.actions;
export default productSlice.reducer;
