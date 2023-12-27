import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import dragonsReducer from './dragons/dragonsSlice'; 

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    dragons: dragonsReducer, 
    
  },

});

export default store;
