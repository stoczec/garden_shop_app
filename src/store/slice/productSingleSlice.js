import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASEURL } from '../../assets/constants/URL';
import axios from 'axios';

const initialState = {
  loading: false,
  product: [],
  error: '',
};

export const fetchSingleProduct = createAsyncThunk(
  'product/fetchSingleProduct',
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios.get(`${BASEURL}/products/${id}`);
      return response.data;
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
        state.product = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false; // change loading on false
        state.error = action.payload;
      });
  },
});

// export const {} = productSingleSlice.actions;
export default productSingleSlice.reducer;
