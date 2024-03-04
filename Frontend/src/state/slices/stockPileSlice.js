import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tdata: [],
  buttonData: {
    editButton: false,
    deleteButton: false,
    createButton: false,
    serviceButton: false,
    bookingButton: false,
  },
};

export const fetchStockPiles = createAsyncThunk(
  'stockPile/fetchStockPiles', // Change the action type to 'employee/fetchStockPiles'
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

const stockPileSlice = createSlice({
  name: 'stockpile', // Change the slice name to 'stockpile'
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStockPiles.fulfilled, (state, action) => {
      // Change to fetchStockPiles
      state.tdata = action.payload;
    });
  },
});

export default stockPileSlice.reducer;
