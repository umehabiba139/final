import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [], // Initial state for missions
  loading: false,
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setMissions(state, action) {
      state.missions = action.payload; 
    },
    setLoading(state, action) {
      state.loading = action.payload; 
    },
    setError(state, action) {
      state.error = action.payload; 
    },
    
  },
});

export const { setMissions, setLoading, setError } = missionsSlice.actions;
export default missionsSlice.reducer;
