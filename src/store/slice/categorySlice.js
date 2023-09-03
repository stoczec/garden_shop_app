import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASEURL } from '../../assets/constants/URL';
import axios from 'axios';

const initialState = {
  loading: false,
  categories: [],
  error: '',
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(`${BASEURL}/categories/all`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.loading = true; // change loading on true
        state.error = ''; // reset error
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false; // change loading on false
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false; // change loading on false
        state.error = action.payload;
      });
  },
});

// export const {} = categorySlice.actions;
export default categorySlice.reducer;
