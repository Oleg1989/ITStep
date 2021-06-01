import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min';
import { io, Socket } from "socket.io-client";
import axios from 'axios';

interface RooomsInterface {
    id: string;
    title: string;
}

const socket: Socket = io("ws://bt-21-playground-vppfc.ondigitalocean.app/");

const nicks = document.getElementById('nicks');
const screen = document.getElementById('screen');
const connected = document.getElementById('connected');


document.addEventListener("DOMContentLoaded", function (event: Event) {
    document.getElementById('add-nick')?.addEventListener('click', addNickName);
    document.getElementById('message')?.addEventListener('click', sendMassage);
    socket.on("connect", () => {
        socket.emit("get_users");
        socket.on("users_list", (users) => {
            let counterAnonym: number = 0;
            let counterUsers: number = 0;
            let counterRegisteredUsers: number = 0;
            for (let key in users) {
                if (users[key] !== 'Anonymous') {
                    let li = document.createElement('li');
                    li.classList.add('collection-item');
                    li.textContent = `${users[key]}`;
                    nicks?.append(li);
                    counterRegisteredUsers++;
                } else {
                    counterAnonym++;
                }
                counterUsers++;
            }
            if (counterRegisteredUsers === 0) {
                let li = document.createElement('li');
                li.classList.add('collection-item');
                li.textContent = 'There are no registered users!';
                document.getElementById('nicks')?.append(li);
            }
            let anonym = document.createElement('li');
            anonym.textContent = `Anonym - ${counterAnonym}`
            anonym.classList.add('collection-item');
            document.getElementById('anonym')?.append(anonym);

            let total = document.createElement('li');
            total.textContent = `Total online - ${counterUsers}`;
            total.classList.add('collection-item');
            document.getElementById('anonym')?.append(total);

            getRooms();
        });

        socket.on("new_user_connected", (socketId) => {
            console.log(`${socketId} connected`);
        });
        socket.on("user_registered", (username, socketId) => {
            console.log(`${socketId} registered as ${username}`);
        });
        socket.on("new_message", (message: string, socketId) => {
            let li = document.createElement('li');
            li.classList.add('collection-item');
            li.style.borderRadius = '5px 5px 5px 0';
            li.textContent = `${message}`;
            screen?.append(li);
            console.log(`Message from ${socketId}: ${message}`);
        });
        socket.on('user_disconnected', userId => console.log(`User disconnected: ${userId}`))
        const ROOM_ID = 1;
        socket.emit('join_room', ROOM_ID)
        socket.on('join_success', (roomId) => { })
        socket.on('user_joined_room', (userId, roomId) => { })
        socket.emit('leave_room', ROOM_ID)
        socket.on('leave_success', (roomId) => { })
        socket.on('user_left_room', (userId, roomId) => { })
        socket.emit('msg_to_room', "Message", ROOM_ID)
        socket.on('new_message_to_room', (message, roomId, userId) => { })
    });
});


const addNickName = () => {
    socket.emit("register", (<HTMLInputElement>document.getElementById('name')).value);
    (<HTMLInputElement>document.getElementById('name')).value = '';

    socket.on("registration_completed", () => {
        if (connected) {
            connected.textContent = "I'm registered";
            connected.classList.add('green-text');
        }
        console.log("I'm registered");
        socket.emit("send_message", "Hi");
    });
}
const sendMassage = () => {
    socket.emit("send_message", (<HTMLInputElement>document.getElementById('textarea1')).value);
    (<HTMLInputElement>document.getElementById('textarea1')).value = '';

    socket.on("name_error", (error: string) => {
        if (connected) {
            connected.textContent = `${error}`
            connected.classList.add('red-text');
        }
    });
}
async function getRooms() {
    let response = await window.fetch('https://bt-21-playground-vppfc.ondigitalocean.app/rooms');

    if (response.ok) {
        let rooms: RooomsInterface[] = await response.json();
        rooms.forEach(element => {
            let room = document.createElement('li');
            room.classList.add('collection-item');
            room.textContent = element.title;
            room.id = `${element.id}`;
            document.getElementById('rooms')?.append(room);
        });

    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}