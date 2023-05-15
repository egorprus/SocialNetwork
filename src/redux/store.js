import { configureStore } from '@reduxjs/toolkit';
import userInfoStore from './userInfoStore';
import usersStore from './usersStore';
import generalStore from './generalStore';

export default configureStore({
  reducer: {
    // counter – это свойство будет внутри объекта общего состояния: state.counter
    userInfo: userInfoStore,
    users: usersStore,
    general: generalStore
  },
});