import { UserList } from "./userList";
import { UsersUpdatedEvent } from "./userUpdatedEvent";
import { io, Socket } from "socket.io-client";

export class UsersView implements IObserver {
    private _usersList: UserList;
    socket: Socket;
    nicks: HTMLElement | null;
    screen: HTMLElement | null;
    time: HTMLElement | null;
    connected: HTMLElement | null;
    addNick: HTMLElement | null;
    message: HTMLElement | null;
    anonym: HTMLElement | null;
    rooms: HTMLElement | null;
    constructor(userList: UserList, userUpdatedEvent: UsersUpdatedEvent) {
        this._usersList = userList;
        this.socket = io("ws://bt-21-playground-vppfc.ondigitalocean.app/");
        this.nicks = document.getElementById('nicks');
        this.screen = document.getElementById('screen');
        this.time = document.getElementById('time');
        this.connected = document.getElementById('connected');
        this.addNick = document.getElementById('add-nick');
        this.message = document.getElementById('message');
        this.anonym = document.getElementById('anonym');
        this.rooms = document.getElementById('rooms');
        userUpdatedEvent.subscribe(this);
    }
    render() {
        this._usersList.users.forEach(user => console.log(user.name));
    }
    notify() {
        this.render();
    }
}