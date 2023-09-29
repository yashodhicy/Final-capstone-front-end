import { configureStore } from '@reduxjs/toolkit';
import HouseSlice from './HouseSlice';


const store = configureStore({
  reducer: {
    Houses: HouseSlice,
  },
});

export default store;