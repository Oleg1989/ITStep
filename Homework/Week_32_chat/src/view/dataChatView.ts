import { DataChat } from "../repo/dataChat";
import { UsersUpdatedEvent } from "../events/userUpdatedEvent";
import { IObserver } from "../interface/iobserver";

export class DataChatView implements IObserver {
    private _dataChat: DataChat;
    nicks: HTMLElement | null;
    screen: HTMLElement | null;
    time: HTMLElement | null;
    connected: HTMLElement | null;
    addNick: HTMLElement | null;
    message: HTMLElement | null;
    anonym: HTMLElement | null;
    rooms: HTMLElement | null;
    constructor(dataChat: DataChat, userUpdatedEvent: UsersUpdatedEvent) {
        this._dataChat = dataChat;
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
        while (this.screen?.firstChild) {
            this.screen.removeChild(this.screen.firstChild);
        }
        while (this.time?.firstChild) {
            this.time.removeChild(this.time.firstChild);
        }
        this._dataChat.data.forEach(element => {
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
    notify() {
        this.render();
    }
}