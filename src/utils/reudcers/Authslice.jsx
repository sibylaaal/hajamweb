// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,

};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload; // Store the entire user payload
        },
        logout(state) {
            state.user = null; // Clear user data on logout
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
