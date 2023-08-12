import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASEURL } from '../../assets/constants/URL';

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true; // change loading on true
        state.error = ''; // reset error
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false; // change loading on false
        state.category = action.payload.category;
        state.productsByCategory = action.payload.data;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false; // change loading on false
        state.error = action.payload;
      });
  },
});

// export const {} = productsByCategorySlice.actions;
export default productsByCategorySlice.reducer;
