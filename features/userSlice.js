// features/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // Liste des utilisateurs enregistrés
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      const user = state.users.find(
        (u) =>
          u.username === action.payload.username &&
          u.password === action.payload.password
      );
      if (user) {
        state.currentUser = user;
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { register, login, logout } = userSlice.actions;

export default userSlice.reducer;
