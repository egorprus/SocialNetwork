import { configureStore } from '@reduxjs/toolkit';
import counterStore from './counterStore';
import userInfoStore from './userInfoStore';
import usersStore from './usersStore';
import generalStore from './generalStore';

export default configureStore({
  reducer: {
    // counter – это свойство будет внутри объекта общего состояния: state.counter
    counter: counterStore,
    userInfo: userInfoStore,
    users: usersStore,
    general: generalStore
  },
});