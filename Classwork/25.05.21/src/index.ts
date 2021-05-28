import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min';
import { io, Socket } from "socket.io-client";

const socket: Socket = io("ws://bt-21-playground-vppfc.ondigitalocean.app/");

const nicks = document.getElementById('nicks');
const screen = document.getElementById('screen');
const connected = document.getElementById('connected');
let userList = {};

document.addEventListener("DOMContentLoaded", function (event: Event) {
    document.getElementById('add-nick')?.addEventListener('click', addNickName);
    document.getElementById('message')?.addEventListener('click', sendMassage);
    socket.on("connect", () => {
        socket.emit("get_users");
        socket.on("users_list", (users) => {
            userList = users;
            for (let key in users) {
                if (users[key] !== 'Anonymous') {
                    let li = document.createElement('li');
                    li.classList.add('collection-item');
                    li.textContent = `${users[key]}`;
                    nicks?.append(li);
                }
            }
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
            li.textContent = `${message}`;
            screen?.append(li);
            console.log(`Message from ${socketId}: ${message}`);
        });
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
