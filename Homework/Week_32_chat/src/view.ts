import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import { UsersUpdatedEvent } from "./userUpdatedEvent";
import { UserList } from "./userList";
import { UsersView } from "./users.View";
import { DataChatView } from "./dataChatView";
import { DataChat } from "./dataChat";
import { DataChatInterface } from "./interface/dataChatInterface";
import { User } from "./user";
import { Room } from "./room";
import { RoomInterface } from "./interface/roomInterface";
import { RoomsView } from "./roomsView";
import { UsersRoomView } from "./userRoomView";
import { io, Socket } from "socket.io-client";

export class View {
    socket: Socket;
    connected: HTMLElement | null;
    userUpdatedEvent: UsersUpdatedEvent;
    userList: UserList;
    dataChat: DataChat;
    userView: UsersView;
    dataChatView: DataChatView;
    roomsView?: RoomsView;
    rooms: Room;
    usersRoomView?: UsersRoomView;
    constructor() {
        this.socket = io("ws://bt-21-playground-vppfc.ondigitalocean.app/");
        this.connected = document.getElementById('connected');
        this.userUpdatedEvent = new UsersUpdatedEvent();
        this.userList = new UserList(this.userUpdatedEvent);
        this.dataChat = new DataChat(this.userUpdatedEvent);
        this.rooms = new Room(this.userUpdatedEvent);
        this.userView = new UsersView(this.userList, this.userUpdatedEvent);
        this.dataChatView = new DataChatView(this.dataChat, this.userUpdatedEvent);

        document.getElementById('add-nick')?.addEventListener('click', this.register);
        document.getElementById('rooms')?.addEventListener('click', this.viewRoom);
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
            this.dataChat.add(data);
        });
        this.socket.on("user_registered", (username, socketId) => {
            let time = new Date();
            let data: DataChatInterface = {
                message: `User ${socketId} registered as ${username}`,
                time: `${time.getFullYear()} / ${time.getMonth() + 1} / ${time.getDate()} - (${time.getHours()}:${time.getMinutes()}:${time.getSeconds()})`
            }
            this.userList.editNickname(socketId, username);
            this.dataChat.add(data);
        });
        this.socket.on('user_disconnected', (userId) => {
            let time = new Date();
            let data: DataChatInterface = {
                message: `Disconnected user: ${userId}`,
                time: `${time.getFullYear()} / ${time.getMonth() + 1} / ${time.getDate()} - (${time.getHours()}:${time.getMinutes()}:${time.getSeconds()})`
            }
            this.userList.delete(userId);
            this.dataChat.add(data);
        });
        this.socket.on("registration_completed", () => {
            if (this.connected) {
                this.connected.textContent = "I'm registered";
                this.connected.classList.add('green-text');
            }
        });
        this.socket.on('users_list_for_room', (users, roomId) => {
            console.log(users);
            this.rooms.addUsersRoom(users);
            this.usersRoomView = new UsersRoomView(this.rooms.usersRoom, this.userUpdatedEvent);
        });

    }
    getRooms = async () => {
        let response = await window.fetch('https://bt-21-playground-vppfc.ondigitalocean.app/rooms');
        if (response.ok) {
            let roomsList = await response.json();
            for (let i = 0; i < roomsList.length; i++) {
                this.rooms.addRoom(roomsList[i]);
            }
            this.roomsView = new RoomsView(this.rooms.rooms, this.userUpdatedEvent);
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
        if ((event.target as HTMLElement)?.id) {
            this.roomsView?.renderRoom((event.target as HTMLElement)?.id);
            this.socket.emit('join_room', (event.target as HTMLElement)?.id);
            this.socket.emit('get_users_for_room', (event.target as HTMLElement)?.id);
        }
        // socket.on('join_success', (roomId) => { })
        // socket.on('user_joined_room', (userId, roomId) => { })
        // socket.emit('leave_room', ROOM_ID)
        // socket.on('leave_success', (roomId) => { })
        // socket.on('user_left_room', (userId, roomId) => { })
        // socket.emit('msg_to_room', "Message", ROOM_ID)
        // socket.on('new_message_to_room', (message, roomId, userId) => { })

    }
}