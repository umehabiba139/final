import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dragons: [],
  loading: false,
  error: null,
};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    setDragons(state, action) {
      state.dragons = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    
  },
});

export const { setDragons, setLoading, setError } = dragonsSlice.actions;
export default dragonsSlice.reducer;
