import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASEURL } from '../../assets/constants/URL';

const initialState = {
  loading: false,
  categories: [],
  error: '',
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASEURL}/categories/all`);
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

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {
      state.loading = true; // change loading on true
      state.error = ''; // reset error
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.loading = false; // change loading on false
      state.categories = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.loading = false; // change loading on false
      state.error = action.payload;
    },
  },
});

// export const {} = categorySlice.actions;
export default categorySlice.reducer;
