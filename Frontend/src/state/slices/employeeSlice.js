import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tdata: [],
  buttonData: {
    editButton: true,
    deleteButton: true,
    createButton: true,
    serviceButton: false,
    bookingButton: false,
  },
};

export const fetchEmployees = createAsyncThunk(
  'employee/fetchEmployees',
  async (url) => {
    try {
      const resp = await axios.get(url);

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

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.tdata = action.payload;
    });
  },
});

export default employeeSlice.reducer;
