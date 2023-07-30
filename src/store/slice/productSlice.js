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
      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true; // change loading on true
        state.error = ''; // reset error
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false; // change loading on false
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false; // change loading on false
        state.error = action.payload;
      });
  },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
