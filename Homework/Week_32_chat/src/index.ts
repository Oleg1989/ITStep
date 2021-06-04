import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import { UsersUpdatedEvent } from "./userUpdatedEvent";
import { UserList } from "./userList";
import { UsersView } from "./users.View";
import { DataChatView } from "./dataChatView";
import { DataChat } from "./dataChat";
import { DataChatInterface } from "./interface/dataChatInterface";
import { User } from "./user";
import { io, Socket } from "socket.io-client";

const socket = io("ws://bt-21-playground-vppfc.ondigitalocean.app/");

document.addEventListener("DOMContentLoaded", function (event: Event) {
    const userUpdatedEvent = new UsersUpdatedEvent();
    const userList = new UserList(userUpdatedEvent);
    const dataChat = new DataChat(userUpdatedEvent);
    const userView = new UsersView(userList, userUpdatedEvent);
    const dataChatView = new DataChatView(dataChat, userUpdatedEvent);

    const connected = document.getElementById('connected');

    socket.on("connect", () => {
        socket.emit("get_users");
        socket.on("users_list", (users) => {
            for (let key in users) {
                userList.add(new User(key, users[key]));
            }
        });
        socket.on("new_user_connected", (socketId) => {
            let time = new Date();
            let data: DataChatInterface = {
                message: `User ${socketId} connected`,
                time: `${time.getFullYear()} / ${time.getMonth() + 1} / ${time.getDate()} - (${time.getHours()}:${time.getMinutes()}:${time.getSeconds()})`
            }
            userList.add(new User(socketId, 'Anonymous'));
            dataChat.add(data);
        });
        socket.on("user_registered", (username, socketId) => {
            let time = new Date();
            let data: DataChatInterface = {
                message: `User ${socketId} registered as ${username}`,
                time: `${time.getFullYear()} / ${time.getMonth() + 1} / ${time.getDate()} - (${time.getHours()}:${time.getMinutes()}:${time.getSeconds()})`
            }
            userList.editNickname(socketId, username);
            dataChat.add(data);
        });
        socket.on('user_disconnected', (userId) => {
            let time = new Date();
            let data: DataChatInterface = {
                message: `Disconnected user: ${userId}`,
                time: `${time.getFullYear()} / ${time.getMonth() + 1} / ${time.getDate()} - (${time.getHours()}:${time.getMinutes()}:${time.getSeconds()})`
            }
            userList.delete(userId);
            dataChat.add(data);
        });
        socket.on("registration_completed", () => {
            if (connected) {
                connected.textContent = "I'm registered";
                connected.classList.add('green-text');
            }
        });
        const register = () => {
            socket.emit("register", (<HTMLInputElement>document.getElementById('nikname')).value);
            (<HTMLInputElement>document.getElementById('nikname')).value = '';
        }
        document.getElementById('add-nick')?.addEventListener('click', register);
    });

});