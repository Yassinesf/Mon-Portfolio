// features/testimonialSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [], // c’est ça que les pages lisent
};

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    addTestimonial: (state, action) => {
      state.list.push(action.payload);
    },
    editTestimonial: (state, action) => {
      const { index, name, comment } = action.payload;
      if (state.list[index]) {
        state.list[index] = { name, comment };
      }
    },
  },
});

export const { addTestimonial, editTestimonial } = testimonialSlice.actions;
export default testimonialSlice.reducer;
