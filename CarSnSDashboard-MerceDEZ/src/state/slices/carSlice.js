import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tdata: [],
};

export const fetchCars = createAsyncThunk(
  'car/fetchCars', // Change the action type to 'employee/fetchCars'
  async (url) => {
    try {
      const resp = await axios.get(url);
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      // Check if the error status is 404 and return an empty array
      if (error.response && error.response.status === 404) {
        return [];
      }
      // Re-throw the error if it's not a 404
      throw error;
    }
  }
);

const carSlice = createSlice({
  name: 'car', // Change the slice name to 'car'
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      // Change to fetchCars
      state.tdata = action.payload;
    });
  },
});

export default carSlice.reducer;
