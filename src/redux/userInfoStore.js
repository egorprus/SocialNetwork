import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: '',
    name: '',
    age: 0,
    img: '',
};

const userInfoStore = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
    }
});

export const { setUserInfo, decrement } = userInfoStore.actions;

export default userInfoStore.reducer;