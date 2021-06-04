import { UserList } from "./userList";
import { UsersUpdatedEvent } from "./userUpdatedEvent";

export class UsersView implements IObserver {
    private _usersList: UserList;
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
        let counterAnonym: number = 0;
        let counterUsers: number = 0;
        let counterRegisteredUsers: number = 0;
        while (this.nicks?.firstChild) {
            this.nicks.removeChild(this.nicks.firstChild);
        }
        this._usersList.users.forEach(user => {
            if (user.name !== 'Anonymous') {
                let li = document.createElement('li');
                li.classList.add('collection-item');
                li.textContent = `${user.name}`;
                this.nicks?.append(li);
                counterRegisteredUsers++;
            } else {
                counterAnonym++;
            }
            counterUsers++;
        });
        if (counterRegisteredUsers === 0) {
            let li = document.createElement('li');
            li.classList.add('collection-item');
            li.classList.add('teal-text');
            li.textContent = 'There are no registered users!';
            this.nicks?.append(li);
        }
        while (this.anonym?.firstChild) {
            this.anonym.removeChild(this.anonym.firstChild);
        }
        let anonymous = document.createElement('li');
        anonymous.classList.add('teal-text');
        anonymous.textContent = `Anonymous - ${counterAnonym}`
        anonymous.classList.add('collection-item');
        this.anonym?.append(anonymous);

        let total = document.createElement('li');
        total.classList.add('teal-text');
        total.textContent = `Total online - ${counterUsers}`;
        total.classList.add('collection-item');
        this.anonym?.append(total);
    }
    notify() {
        this.render();
    }
}