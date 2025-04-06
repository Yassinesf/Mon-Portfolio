import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { username: "admin", password: "1234" },
  ],
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
      state.currentUser = action.payload;
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );
      state.currentUser = user || null;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;
