import { configureStore } from '@reduxjs/toolkit';
import postsStore, { postReducer } from './postsStore';
import { authReducer } from './authStore';

export default configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer
  },
});