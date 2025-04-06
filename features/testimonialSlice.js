import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
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

      if (typeof index === "number" && state.list[index]) {
        state.list[index] = {
          ...state.list[index],
          name,
          comment,
        };
      }
    },
  },
});

export const { addTestimonial, editTestimonial } = testimonialSlice.actions;
export default testimonialSlice.reducer;
