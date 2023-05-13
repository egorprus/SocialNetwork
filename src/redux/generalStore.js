import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authStatus: ''
};

const generalStore = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setAuthStatus: (state, action) => {
            state.authStatus = action.payload;
        },
    }
});

export const { setAuthStatus } = generalStore.actions;

export default generalStore.reducer;