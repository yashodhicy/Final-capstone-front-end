import { configureStore } from "@reduxjs/toolkit";
import HouseSlice from "./HouseSlice";
import reducer from "./reservation/reducer";
import userReducer from "./user/userReducer";

const store = configureStore({
  reducer: {
    Houses: HouseSlice,
    reservations: reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
