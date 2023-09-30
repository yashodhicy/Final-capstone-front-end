import { configureStore } from '@reduxjs/toolkit';
import HouseSlice from './HouseSlice';
import reducer from './reservation/reducer';


const store = configureStore({
  reducer: {
    Houses: HouseSlice,
    reservations: reducer
  },
});

export default store;
