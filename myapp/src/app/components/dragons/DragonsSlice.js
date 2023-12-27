import { createSlice } from '@reduxjs/toolkit';

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: [],
  reducers: {
    // Define reducers for dragons state
  },
});

export const { /* Export actions */ } = dragonsSlice.actions;
export default dragonsSlice.reducer;