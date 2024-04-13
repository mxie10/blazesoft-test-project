import { configureStore } from "@reduxjs/toolkit";
import listingReducer from './state/Listings/listingSlice';

const store = configureStore({
    reducer: {
        listings:listingReducer
    },
  })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;