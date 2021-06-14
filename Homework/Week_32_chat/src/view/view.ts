import { UsersUpdatedEvent } from "../events/userUpdatedEvent";
import { UsersRoomUpdatedEvent } from "../events/userRoomUpdateEvent";
import { ChatUpdatedEvent } from "../events/chatUpdatedEvent";
import { UserList } from "../repo/userList";
import { UsersView } from "./users.View";
import { DataChatView } from "./dataChatView";
import { DataChat } from "../repo/dataChat";
import { DataChatInterface } from "../interface/dataChatInterface";
import { User } from "../repo/user";
import { RoomList } from "../repo/roomList";
import { RoomInterface } from "../interface/roomInterface";
import { RoomsView } from "./roomsView";
import { UsersRoomView } from "./userRoomView";
import { UsersRoomInterface } from "../interface/usersRoomInterface";
import { DataRoomInterface } from "../interface/dataRoomInterface";
import { RoomsScreenView } from "./roomsScreenView";
import { io, Socket } from "socket.io-client";

export class View {
    socket: Socket;
    connected: HTMLElement | null;
    screen: HTMLElement | null;
    time: HTMLElement | null;
    userUpdatedEvent: UsersUpdatedEvent;
    userRoomUpdatedEvent: UsersRoomUpdatedEvent;
    chatUpdatedEvent: ChatUpdatedEvent;
    userList: UserList;
    dataChat: DataChat;
    userView: UsersView;
    dataChatView: DataChatView;
    roomsView: RoomsView;
    roomsScreenView: RoomsScreenView;
    roomList: RoomList;
    usersRoomView: UsersRoomView;
    constructor() {
        this.socket = io("ws://bt-21-playground-vppfc.ondigitalocean.app/");
        this.connected = document.getElementById('connected');
        this.screen = document.getElementById('screen');
        this.time = document.getElementById('time');
        this.userUpdatedEvent = new UsersUpdatedEvent();
        this.userRoomUpdatedEvent = new UsersRoomUpdatedEvent();
        this.chatUpdatedEvent = new ChatUpdatedEvent();
        this.userList = new UserList(this.userUpdatedEvent);
        this.dataChat = new DataChat(this.chatUpdatedEvent);
        this.roomList = new RoomList(this.userRoomUpdatedEvent);
        this.userView = new UsersView(this.userList, this.userUpdatedEvent);
        this.dataChatView = new DataChatView(this.dataChat, this.userUpdatedEvent);
        this.roomsView = new RoomsView(this.roomList, this.userUpdatedEvent);
        this.roomsScreenView = new RoomsScreenView(this.roomList, this.userRoomUpdatedEvent);
        this.usersRoomView = new UsersRoomView(this.roomList, this.userRoomUpdatedEvent);

        document.getElementById('add-nick')?.addEventListener('click', this.register);
        document.getElementById('rooms')?.addEventListener('click', this.viewRoom);
        document.getElementById('message')?.addEventListener('click', this.sendMessage);
        this.connectChat();
    }
    connectChat() {
        this.getRooms();
        this.socket.emit("get_users");
        this.socket.on("users_list", (users) => {
            for (let key in users) {
                this.userList.add(new User(key, users[key]));
            }
        });
        this.socket.on("new_user_connected", (socketId) => {
            let time = new Date();
            let data: DataChatInterface = {
                message: `User ${socketId} connected`,
                time: `${time.getFullYear()} / ${time.getMonth() + 1} / ${time.getDate()} - (${time.getHours()}:${time.getMinutes()}:${time.getSeconds()})`
            }
            this.userList.add(new User(socketId, 'Anonymous'));
            // this.dataChat.add(data);
            console.log(`${data.message} => ${data.time}`);
        });
        this.socket.on("user_registered", (username, socketId) => {
            let time = new Date();
            let data: DataChatInterface = {
                message: `User ${socketId} registered as ${username}`,
                time: `${time.getFullYear()} / ${time.getMonth() + 1} / ${time.getDate()} - (${time.getHours()}:${time.getMinutes()}:${time.getSeconds()})`
            }
            this.userList.editNickname(socketId, username);
            // this.dataChat.add(data);
            console.log(`${data.message} => ${data.time}`);
        });
        this.socket.on('user_disconnected', (userId) => {
            let time = new Date();
            let data: DataChatInterface = {
                message: `Disconnected user: ${userId}`,
                time: `${time.getFullYear()} / ${time.getMonth() + 1} / ${time.getDate()} - (${time.getHours()}:${time.getMinutes()}:${time.getSeconds()})`
            }
            this.userList.delete(userId);
            //this.dataChat.add(data);
            console.log(`${data.message} => ${data.time}`);
        });
        this.socket.on("registration_completed", () => {
            if (this.connected) {
                this.connected.textContent = "I'm registered";
                this.connected.classList.add('green-text');
            }
        });
        this.socket.on('users_list_for_room', (users: string[], roomId: string) => {
            let userList = this.userList.users.filter(user => {
                for (let i = 0; i < users.length; i++) {
                    if (user.id === users[i]) {
                        return user;
                    }
                }
            });
            const usersRoom: UsersRoomInterface = {
                id: roomId,
                users: userList
            }
            this.roomList.addUsersRoom(usersRoom);
        });
        this.socket.on('user_joined_room', (userId: string, roomId: string) => {
            let user = this.userList.users.filter(user => {
                return user.id === userId;
            });
            this.roomList.addUserRoom(user[0], roomId);
        });
        this.socket.on('user_left_room', (userId, roomId) => {
            let nikeName = '';
            this.userList.users.forEach(user => {
                if (user.id == userId) {
                    nikeName = user.name;
                }
            });
            let user = new User(userId, nikeName);
            this.roomList.deleteUserRoom(user, roomId);
        });
        this.socket.on('join_success', (roomId: string) => {
            this.roomList.rooms.forEach(room => {
                if (room.id == roomId) {
                    if (this.connected) {
                        this.connected.textContent = `You entered the ${room.title} room!`;
                        this.connected.classList.add('green-text');
                    }
                }
            });
            let nikeName = '';
            this.userList.users.forEach(user => {
                if (user.id == this.socket.id) {
                    nikeName = user.name;
                }
            });
            let user = new User(this.socket.id, nikeName);
            this.roomList.addUserRoom(user, roomId);
        });
        this.socket.on('leave_success', (roomId: string) => {
            let nikeName = '';
            this.userList.users.forEach(user => {
                if (user.id == this.socket.id) {
                    nikeName = user.name;
                }
            });
            let user = new User(this.socket.id, nikeName);
            this.roomList.deleteUserRoom(user, roomId);
        });
        this.socket.on('new_message_to_room', (message: string, roomId: string, userId: string) => {
            let nickName: string = '';
            this.userList.users.forEach(user => {
                if (user.id == userId) {
                    nickName = user.name;
                }
            });
            let time = new Date();
            let dataRoom: DataRoomInterface = {
                id: roomId,
                data: [{
                    message: `${nickName}=> ${message}`,
                    time: `${time.getFullYear()} / ${time.getMonth() + 1} / ${time.getDate()} - (${time.getHours()}:${time.getMinutes()}:${time.getSeconds()})`
                }]
            };
            this.roomList.addDataRoom(dataRoom);
        });

    }
    getRooms = async () => {
        let response = await window.fetch('https://bt-21-playground-vppfc.ondigitalocean.app/rooms');
        if (response.ok) {
            let roomsList: RoomInterface[] = await response.json();
            this.roomList.addRoom(roomsList);
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    }
    register = () => {
        this.socket.emit("register", (<HTMLInputElement>document.getElementById('nikname')).value);
        this.userList.editNickname(this.socket.id, (<HTMLInputElement>document.getElementById('nikname')).value);
        (<HTMLInputElement>document.getElementById('nikname')).value = '';
    }
    viewRoom = (event: Event) => {
        this.userList.users.forEach(user => {
            if (user.id == this.socket.id && user.name !== 'Anonymous') {
                if ((event.target as HTMLElement)?.id) {
                    if (this.roomList.idRoom) {
                        this.socket.emit('leave_room', this.roomList.idRoom);
                        this.socket.emit('join_room', (event.target as HTMLElement)?.id);
                        this.roomsView?.renderRoom((event.target as HTMLElement)?.id);
                    } else {
                        this.socket.emit('join_room', (event.target as HTMLElement)?.id);
                        this.roomsView?.renderRoom((event.target as HTMLElement)?.id);
                    }
                    this.roomList.idRoom = (event.target as HTMLElement)?.id;
                    this.socket.emit('get_users_for_room', (event.target as HTMLElement)?.id);
                }
            } else {
                if (this.connected) {
                    this.connected.textContent = "You are not registered";
                    this.connected.classList.add('red-text');
                }
            }
        });
    }
    sendMessage = (event: Event) => {
        let message = document.getElementById('textarea1');
        if ((message as HTMLInputElement).value !== '') {

            let nickName: string = '';
            this.userList.users.forEach(user => {
                if (user.id == this.socket.id) {
                    nickName = user.name;
                }
            });
            let time = new Date();
            let dataRoom: DataRoomInterface = {
                id: this.roomList.idRoom,
                data: [{
                    message: `${nickName}=> ${(message as HTMLInputElement).value}`,
                    time: `${time.getFullYear()} / ${time.getMonth() + 1} / ${time.getDate()} - (${time.getHours()}:${time.getMinutes()}:${time.getSeconds()})`
                }]
            };

            let liScreen = document.createElement('li');
            liScreen.classList.add('collection-item');
            liScreen.classList.add('teal-text');
            liScreen.classList.add('text-darken-2');
            liScreen.textContent = `${dataRoom.data[0].message}`;
            this.screen?.append(liScreen);

            let liTime = document.createElement('li');
            liTime.classList.add('collection-item');
            liTime.classList.add('blue-text');
            liTime.classList.add('text-darken-2');
            liTime.textContent = `${dataRoom.data[0].time}`;
            this.time?.append(liTime);

            this.socket.emit('msg_to_room', (message as HTMLInputElement).value, this.roomList.idRoom);
            this.roomList.addDataRoom(dataRoom);
            (message as HTMLInputElement).value = '';
            if (this.connected) {
                this.connected.textContent = '';
            }
        } else {
            if (this.connected) {
                this.connected.textContent = "Fill in the input field!";
                this.connected.classList.remove('green-text');
                this.connected.classList.add('red-text');
            }
        }

    }
}