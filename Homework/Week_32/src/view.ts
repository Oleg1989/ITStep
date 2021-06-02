import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min';
import { io, Socket } from "socket.io-client";
import { RooomsInterface } from "./interface/roomInterface";
import { DataChatInterface } from "./interface/dataChatInterface";

export class View {
    [x: string]: any;
    socket: Socket;
    nicks: HTMLElement | null;
    screen: HTMLElement | null;
    time: HTMLElement | null;
    connected: HTMLElement | null;
    addNick: HTMLElement | null;
    message: HTMLElement | null;
    anonym: HTMLElement | null;
    rooms: HTMLElement | null;
    constructor() {
        this.socket = io("ws://bt-21-playground-vppfc.ondigitalocean.app/");
        this.nicks = document.getElementById('nicks');
        this.screen = document.getElementById('screen');
        this.time = document.getElementById('time');
        this.connected = document.getElementById('connected');
        this.addNick = document.getElementById('add-nick');
        this.message = document.getElementById('message');
        this.anonym = document.getElementById('anonym');
        this.rooms = document.getElementById('rooms');
    }
    connectChat = () => {
        this.addNick?.addEventListener('click', this.addNickName);
        this.message?.addEventListener('click', this.sendMassage);
        this.socket.on("connect", () => {
            this.socket.emit("get_users");
            this.socket.on("users_list", (users) => {
                let counterAnonym: number = 0;
                let counterUsers: number = 0;
                let counterRegisteredUsers: number = 0;
                for (let key in users) {
                    if (users[key] !== 'Anonymous') {
                        let li = document.createElement('li');
                        li.classList.add('collection-item');
                        li.textContent = `${users[key]}`;
                        this.nicks?.append(li);
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
                    this.nicks?.append(li);
                }
                let anonym = document.createElement('li');
                anonym.textContent = `Anonym - ${counterAnonym}`
                anonym.classList.add('collection-item');
                this.anonym?.append(anonym);

                let total = document.createElement('li');
                total.textContent = `Total online - ${counterUsers}`;
                total.classList.add('collection-item');
                this.anonym?.append(total);

                this.getRooms();
            });
            // this.socket.on("new_user_connected", (socketId) => {
            //     let li = document.createElement('li');
            //     li.classList.add('collection-item');
            //     li.style.borderRadius = '5px 5px 5px 0';
            //     li.textContent = `${socketId} connected`;
            //     this.screen?.append(li);
            //     console.log(`${socketId} connected`);
            // });
            // this.socket.on("user_registered", (username, socketId) => {
            //     console.log(`${socketId} registered as ${username}`);
            // });
            // this.socket.on('user_disconnected', userId => console.log(`User disconnected: ${userId}`));
            // this.socket.on("new_message", (message: string, socketId) => {
            //     let li = document.createElement('li');
            //     li.classList.add('collection-item');
            //     li.style.borderRadius = '5px 5px 5px 0';
            //     li.textContent = `${message}`;
            //     this.screen?.append(li);
            //     console.log(`Message from ${socketId}: ${message}`);
            // });
            // const ROOM_ID = 1;
            // this.socket.emit('join_room', ROOM_ID)
            // this.socket.on('join_success', (roomId) => { })
            // this.socket.on('user_joined_room', (userId, roomId) => { })
            // this.socket.emit('leave_room', ROOM_ID)
            // this.socket.on('leave_success', (roomId) => { })
            // this.socket.on('user_left_room', (userId, roomId) => { })
            // this.socket.emit('msg_to_room', "Message", ROOM_ID)
            // this.socket.on('new_message_to_room', (message, roomId, userId) => { })
        });
    }
    viewDataChat = (data: DataChatInterface[]) => {
        while (this.screen?.firstChild) {
            this.screen.removeChild(this.screen.firstChild);
        }
        while (this.time?.firstChild) {
            this.time.removeChild(this.time.firstChild);
        }
        data.forEach(element => {
            let liScreen = document.createElement('li');
            liScreen.classList.add('collection-item');
            liScreen.classList.add('teal-text');
            liScreen.classList.add('text-darken-2');
            liScreen.textContent = `${element.message}`;
            this.screen?.append(liScreen);

            let liTime = document.createElement('li');
            liTime.classList.add('collection-item');
            liTime.classList.add('blue-text');
            liTime.classList.add('text-darken-2');
            liTime.textContent = `${element.time}`;
            this.time?.append(liTime);
        });
    }
    addNickName = () => {
        this.socket.emit("register", (<HTMLInputElement>document.getElementById('name')).value);
        (<HTMLInputElement>document.getElementById('name')).value = '';

        this.socket.on("registration_completed", () => {
            if (this.connected) {
                this.connected.textContent = "I'm registered";
                this.connected.classList.add('green-text');
            }
        });
    }
    sendMassage = () => {
        this.socket.emit("send_message", (<HTMLInputElement>document.getElementById('textarea1')).value);
        (<HTMLInputElement>document.getElementById('textarea1')).value = '';
        let myMessage = document.createElement('li');
        myMessage.classList.add('collection-item');
        myMessage.textContent = (<HTMLInputElement>document.getElementById('textarea1')).value;
        this.screen?.append(myMessage);

        this.socket.on("name_error", (error: string) => {
            if (this.connected) {
                this.connected.textContent = `${error}`
                this.connected.classList.add('red-text');
            }
        });
    }
    async getRooms() {
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
    bindAddDataChat(handler: (data: DataChatInterface) => void) {
        this.socket.on("new_user_connected", (socketId) => {
            let time = new Date();
            let data: DataChatInterface = {
                message: `${socketId} connected`,
                time: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
            }
            handler(data);
            console.log(`${socketId} connected`);
        });
        this.socket.on("user_registered", (username, socketId) => {
            let time = new Date();
            let data: DataChatInterface = {
                message: `${socketId} registered as ${username}`,
                time: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
            }
            handler(data);
            console.log(`${socketId} registered as ${username}`);
        });
        this.socket.on('user_disconnected', (userId) => {
            let time = new Date();
            let data: DataChatInterface = {
                message: `User disconnected: ${userId}`,
                time: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
            }
            handler(data);
            console.log(`User disconnected: ${userId}`)
        });
    }

}