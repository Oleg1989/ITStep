import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/chat/chatSlice';

export const store = configureStore({
  reducer: {
    chat: counterReducer,
  },
});
