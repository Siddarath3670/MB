import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  t1data: [],
  t2data: [],

  buttonData: {
    editButton: false,
    deleteButton: false,
    createButton: false,
    serviceButton: true,
    bookingButton: false,
  },
  servID: 0,
};

export const fetchServices = createAsyncThunk(
  'service/fetchServices', // Change the action type to 'employee/fetchServices'
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

const serviceSlice = createSlice({
  name: 'service', // Change the slice name to 'service'
  initialState,
  reducers: {
    assignServId: (state, action) => {
      state.servID = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      const preTableData = action.payload.map((item) => {
        // Format the arrival date
        const formattedArrivalDate = new Date(
          item.arrivaldate
        ).toLocaleDateString('en-GB');

        // Format the delivery date
        const formattedDeliveryDate = new Date(
          item.deliverydate
        ).toLocaleDateString('en-GB');

        // Return the updated item
        return {
          ...item,
          arrivaldate: formattedArrivalDate,
          deliverydate: formattedDeliveryDate,
        };
      });

      state.t1data = preTableData.filter((item) => item.status === 'false');
      state.t2data = preTableData.filter((item) => item.status === 'true'); // Change to fetchServices
    });
  },
});

export const { assignServId } = serviceSlice.actions;
export default serviceSlice.reducer;
