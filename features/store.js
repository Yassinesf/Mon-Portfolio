// features/store.js
import { configureStore } from "@reduxjs/toolkit";
import testimonialSlice from "./testimonialSlice";
import userSlice from "./userSlice"; 

export const store = configureStore({
  reducer: {
    testimonials: testimonialSlice,
    user: userSlice, 
  },
});
