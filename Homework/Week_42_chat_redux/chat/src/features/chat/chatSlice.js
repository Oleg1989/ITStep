import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { io } from "socket.io-client";

export const socket = io('ws://bt-21-playground-vppfc.ondigitalocean.app/');

const initialState = {
  auth: false,
  authStatus: 'Not authenticated',
  rooms: [],
  roomsStatus: 'Not loaded rooms',
  user: '',
  userStatus: 'You are conected',
  usersAnonymous: [],
  usersAnonymousStatus: 'Not loaded users',
  registeredUsers: [],
  registeredUsersStatus: 'Not loaded registered users',
  totalUsers: 0,
  totalUsersStatus: 'Initial value',
  totalAnonymous: 0,
  totalAnonymousStatus: 'Initial value',
  roomActive: null,
  roomActiveStatus: 'Not active',
  disabled: true,
  disabledStatus: 'Inactive',
  usersRoom: [],
  usersRoomStaus: 'Not loaded users for room',
};

export const getRooms = createAsyncThunk(
  'chat/fetchChatRooms',
  async (path) => {
    let response = await fetch(path);
    if (response.ok) {
      let roomsList = await response.json();
      return roomsList;
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }
);

export const authenticatedChat = createAsyncThunk(
  'chat/authenticatedChat',
  async (nick) => {
    let promiseRegisterUser = new Promise((resolve, reject) => {
      socket.emit("register", nick);
      socket.on("registration_completed", () => {
        resolve(nick);
      });
    });
    let result = await promiseRegisterUser;
    return result;
  }
);

export const getUsersChat = createAsyncThunk(
  'chat/getUsersChat',
  async () => {
    let promiseGetUsers = new Promise((resolve, reject) => {
      socket.emit("get_users");
      socket.on("users_list", (users) => {
        resolve(users);
      });
    });
    let result = await promiseGetUsers;
    return result;
  }
);

export const newUserConnectedChat = createAsyncThunk(
  'chat/newUserConnectedChat',
  async (id) => {
    return id;
  }
);

export const userDisconnectedChat = createAsyncThunk(
  'chat/userDisconnectedChat',
  async (id) => {
    return id;
  }
);

export const newUserRegisterChat = createAsyncThunk(
  'chat/newUserRegisterChat',
  async (user) => {
    return user;
  }
);

export const getUsersForRoomChat = createAsyncThunk(
  'chat/getUsersForRommChat',
  async (users) => {
    return users;
  }
);

export const userJoinedRoom = createAsyncThunk(
  'chat/userJoinedRoom',
  async (userId) => {
    return userId;
  }
);

export const userLeftRoom = createAsyncThunk(
  'chat/userLeftRoom',
  async (userId) => {
    return userId;
  }
);

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    notAuthenticated: (state) => {
      state.auth = false;
      state.authStatus = 'Not authenticated';
      state.user = '';
      state.userStatus = 'You are not registered';
    },
    joinRoomChat: (state, id) => {
      // state.rooms.forEach((room) => {
      //   if (room.id === id.payload) {
      //     state.roomActive = room;
      //     state.roomActiveStatus = 'Active';
      //   }
      // });
      state.roomActive = state.rooms.find((room) => room.id === id.payload);
      state.roomActiveStatus = 'Active';
    },
    disabled: (state) => {
      state.disabled = false;
      state.disabledStatus = 'Active';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRooms.pending, (state) => {
        state.roomsStatus = 'loading';
      })
      .addCase(getRooms.fulfilled, (state, action) => {
        state.rooms = [...action.payload];
        state.rooms.forEach((room) => {
          state.usersRoom.push({ id: room.id, title: room.title, users: [] });
        });
        state.roomsStatus = 'Loaded rooms';
      })
      .addCase(authenticatedChat.pending, (state) => {
        state.userStatus = 'loading';
      })
      .addCase(authenticatedChat.fulfilled, (state, action) => {
        state.user = action.payload;
        state.userStatus = 'You are registered';
        state.auth = true;
        state.authStatus = 'Authenticated';
      })
      .addCase(getUsersChat.pending, (state) => {
        state.usersAnonymousStatus = 'loading';
        state.registeredUsersStatus = 'loading';
      })
      .addCase(getUsersChat.fulfilled, (state, action) => {
        let usersChat = [];
        for (let key in action.payload) {
          usersChat.push({ id: key, nick: action.payload[key] });
        }
        usersChat.forEach((user) => {
          if (user.nick === 'Anonymous') {
            state.usersAnonymous.unshift(user);
            state.usersAnonymousStatus = 'User added';
          } else {
            state.registeredUsers.unshift(user);
            state.registeredUsersStatus = 'Registered user added';
          }
        });
        state.totalAnonymous = state.usersAnonymous.length;
        state.totalAnonymousStatus = 'The value has changed';
        state.totalUsers = state.usersAnonymous.length + state.registeredUsers.length;
        state.totalUsersStatus = 'The value has changed';
      })
      .addCase(newUserConnectedChat.pending, (state) => {
        state.usersAnonymousStatus = 'loading';
      })
      .addCase(newUserConnectedChat.fulfilled, (state, action) => {
        state.usersAnonymous.unshift({ id: action.payload, nick: 'Anonymous' });
        state.usersAnonymousStatus = 'User added';
        state.totalAnonymous = state.usersAnonymous.length;
        state.totalAnonymousStatus = 'The value has changed';
        state.totalUsers = state.usersAnonymous.length + state.registeredUsers.length;
        state.totalUsersStatus = 'The value has changed';
      })
      .addCase(newUserRegisterChat.pending, (state) => {
        state.registeredUsersStatus = 'loading';
      })
      .addCase(newUserRegisterChat.fulfilled, (state, action) => {
        state.registeredUsers.unshift(action.payload);
        state.registeredUsersStatus = 'User registered';
        state.usersAnonymous = state.usersAnonymous.filter((user) => user.id !== action.payload.id);
        state.totalAnonymousStatus = 'User deleted';
        state.totalAnonymous = state.usersAnonymous.length;
        state.totalAnonymousStatus = 'The value has changed';
      })
      .addCase(userDisconnectedChat.pending, (state) => {
        state.userStatus = 'loading';
      })
      .addCase(userDisconnectedChat.fulfilled, (state, action) => {
        if (state.registeredUsers.find((user) => user.id === action.payload)) {
          state.registeredUsers = state.registeredUsers.filter((user) => user.id !== action.payload);
          state.registeredUsersStatus = 'User disconnected';
          state.totalUsers = state.usersAnonymous.length + state.registeredUsers.length;
          state.totalUsersStatus = 'The value has changed';
        } else {
          state.usersAnonymous = state.usersAnonymous.filter((user) => user.id !== action.payload);
          state.totalAnonymousStatus = 'User disconnected';
          state.totalAnonymous = state.usersAnonymous.length;
          state.totalAnonymousStatus = 'The value has changed';
          state.totalUsers = state.usersAnonymous.length + state.registeredUsers.length;
          state.totalUsersStatus = 'The value has changed';
        }
      })
      .addCase(getUsersForRoomChat.pending, (state) => {
        state.usersRoomStaus = 'loading';
      })
      .addCase(getUsersForRoomChat.fulfilled, (state, action) => {
        let users = [];
        state.usersRoom.forEach((room) => {
          if (action.payload.id === room.id) {
            for (let i = 0; i < action.payload.users.length; i++) {
              users.push(state.registeredUsers.find((user) => user.id === action.payload.users[i]));
            }
            room.users = [...users];
          }
        });
        state.usersRoomStaus = 'Users for room loaded';
      })
      .addCase(userJoinedRoom.pending, (state) => {
        state.usersRoomStaus = 'loading';
      })
      .addCase(userJoinedRoom.fulfilled, (state, action) => {
        //state.usersRoom.push(state.registeredUsers.find((user) => user.id === action.payload));
        state.usersRoom.forEach((room) => {
          if (action.payload.roomId === room.id) {
            let user = state.registeredUsers.find((user) => user.id === action.payload.userId);
            room.users.push(user);
          }
        });
        state.usersRoomStaus = 'User for room added';
      })
      .addCase(userLeftRoom.pending, (state) => {
        state.usersRoomStaus = 'loading';
      })
      .addCase(userLeftRoom.fulfilled, (state, action) => {
        state.usersRoom.forEach((room) => {
          if (action.payload.roomId === room.id) {
            let user = state.registeredUsers.find((user) => user.id === action.payload.userId);
            room.users = room.users.filter((u) => u.id !== user.id);
          }
        });
        state.usersRoomStaus = 'User for room deleted';
      });
  },
});

export const { notAuthenticated, joinRoomChat, disabled } = chatSlice.actions;

export const selectChatAuth = (state) => state.chat.auth;
export const selectChatRooms = (state) => state.chat.rooms;
export const selectChatUser = (state) => state.chat.user;
export const selectChatRegisteredUsers = (state) => state.chat.registeredUsers;
export const selectChatTotalAnonymous = (state) => state.chat.totalAnonymous;
export const selectChatTotalUsers = (state) => state.chat.totalUsers;
export const selectChatRoomActive = (state) => state.chat.roomActive;
export const selectChatDisabled = (state) => state.chat.disabled;
export const selectChatUsersRoom = (state) => state.chat.usersRoom;

export default chatSlice.reducer;
