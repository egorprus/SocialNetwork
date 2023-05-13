import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: {
        admin: {
            login: 'admin',
            password: '12345678',
            name: 'Prus Egor',
            age: 27,
            img: '',
        }
    }
};

const usersStore = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        addNewUser: (state, action) => {
            return {
                users: {
                    ...state.users,
                    [action.payload.login]: {...action.payload}
                }
            };
        }
    }
});

export const { addNewUser } = usersStore.actions;

export default usersStore.reducer;