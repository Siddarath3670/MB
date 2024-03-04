import { createSlice } from '@reduxjs/toolkit';

const common = createSlice({
  name: 'common',
  initialState: {
    value: 0,
  },
  reducers: {
    assignCarId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { assignCarId } = common.actions;
export default common.reducer;
