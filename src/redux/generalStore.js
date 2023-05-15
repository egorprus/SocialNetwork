import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authStatus: 'wrong',
    error: ''
};

const generalStore = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setAuthStatus: (state, action) => {
            state.authStatus = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
});

export const { setAuthStatus, setError } = generalStore.actions;

export default generalStore.reducer;