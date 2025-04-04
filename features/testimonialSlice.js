import testimonials from "@/data/testimonialsArr";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testimonials,
};

export const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {
    addTestimonial: (state, action) => {
      state.testimonials.push(action.payload);
    },
    deleteTestimonial: (state, action) => {
      state.testimonials = state.testimonials.filter(
        (testimonial) => testimonial.id !== action.payload
      );
    },
    editTestimonial: (state, action) => {
      state.testimonials = state.testimonials.map((testimonial) =>
        testimonial.id === action.payload.id ? action.payload : testimonial
      );
    },
  },
});
export const { addTestimonial, deleteTestimonial, editTestimonial } =
  testimonialSlice.actions;

export default testimonialSlice.reducer;
