import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tdata: [],
  buttonData: {
    editButton: true,
    deleteButton: true,
    createButton: false,
    serviceButton: false,
    bookingButton: false,
  },
};

export const fetchCustomers = createAsyncThunk(
  'customer/fetchCustomers',
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

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.tdata = action.payload;
    });
  },
});

export default customerSlice.reducer;
