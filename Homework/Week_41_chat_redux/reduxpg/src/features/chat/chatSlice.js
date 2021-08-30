import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
  status: 'Not authenticated',
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    authenticated: (state) => {
      state.value = true;
      state.status = 'Authenticated';
    },
    notAuthenticated: (state) => {
      state.value = false;
      state.status = 'Not authenticated';
    },
  },
});

export const { authenticated, notAuthenticated } = chatSlice.actions;

export const selectChat = (state) => state.chat.value;

export default chatSlice.reducer;
