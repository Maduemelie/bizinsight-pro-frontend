// Redux slice (authSlice.js)
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
    userId: null, // Add userId to the initial state
    // other relevant state
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId; // Assuming you have userId in the payload
    },
    loginFailure: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.userId = null; // Reset userId on login failure
    },
  },
});

export const { loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
