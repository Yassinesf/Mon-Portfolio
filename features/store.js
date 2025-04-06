// features/store.js
import { configureStore } from "@reduxjs/toolkit";
import testimonialReducer from "./testimonialSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    testimonials: testimonialReducer, // ✅ bien ici
    user: userReducer,
  },
});
