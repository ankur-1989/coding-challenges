import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "../features/Deals/reducer";

export const store = configureStore({
  reducer: {
    hotelsList: hotelsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
