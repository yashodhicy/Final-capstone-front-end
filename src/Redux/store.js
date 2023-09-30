import { configureStore } from '@reduxjs/toolkit';
import HouseSlice from './HouseSlice';
import deleteReducer from './deleteSlice';


const store = configureStore({
  reducer: {
    Houses: HouseSlice,
    delete : deleteReducer,
  },
});

export default store;