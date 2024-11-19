import { createSlice } from "@reduxjs/toolkit";

// ----- Función para obtener usuario de localStorage -----
const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getUserFromLocalStorage(),
    status: getUserFromLocalStorage() ? "authenticated" : "unauthenticated",
  },
  reducers: {
    login: (state, action) => {
      const { uid, displayName, email, photoURL } = action.payload;
      state.user = { uid, displayName, email, photoURL };
      state.status = "authenticated";
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      state.status = "unauthenticated";
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;