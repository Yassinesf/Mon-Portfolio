import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // tableau des utilisateurs enregistrés
  currentUser: null, // utilisateur connecté
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      const existing = state.users.find(
        (u) => u.username === action.payload.username
      );
      if (!existing) {
        state.users.push(action.payload);
      }
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        state.currentUser = user;
      } else {
        state.currentUser = null; // aucun utilisateur invalide ne passe
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;
