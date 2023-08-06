import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASEURL } from '../../assets/constants/URL';

const initialState = {
  loading: false,
  products: [],
  error: '',
};

export const fetchSingleProduct = createAsyncThunk(
  'product/fetchSingleProduct',
  async function (id, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASEURL}/products/${id}`);
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

export const productSingleSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true; // change loading on true
        state.error = ''; // reset error
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false; // change loading on false
        state.products = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false; // change loading on false
        state.error = action.payload;
      });
  },
});

// export const {} = productSingleSlice.actions;
export default productSingleSlice.reducer;
