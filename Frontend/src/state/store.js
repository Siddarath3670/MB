import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slices/employeeSlice';
import customerReducer from './slices/customerSlice';
import stockPileReducer from './slices/stockPileSlice';
import serviceReducer from './slices/serviceSlice';
import carReducer from './slices/carSlice';
import commonReducer from './slices/commonSlice';
import bookingReducer from './slices/bookingSlice';

const store = configureStore({
  reducer: {
    common: commonReducer,
    employee: employeeReducer,
    customer: customerReducer,
    stockPile: stockPileReducer,
    service: serviceReducer,
    car: carReducer,
    booking: bookingReducer,
  },
});

export default store;
