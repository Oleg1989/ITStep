import { UserList } from "../repo/userList";
import { UsersUpdatedEvent } from "../events/userUpdatedEvent";
import { IObserver } from "../interface/iobserver";

export class UsersView implements IObserver {
    private _usersList: UserList;
    nicks: HTMLElement | null;
    anonym: HTMLElement | null;
    users: HTMLElement | null;
    constructor(usersList: UserList, userUpdatedEvent: UsersUpdatedEvent) {
        this._usersList = usersList;
        this.nicks = document.getElementById('nicks');
        this.anonym = document.getElementById('anonym');
        this.users = document.getElementById('users');
        userUpdatedEvent.subscribe(this);
    }
    render() {
        let counterAnonym: number = 0;
        let counterUsers: number = 0;
        let counterRegisteredUsers: number = 0;
        if (this.users) {
            this.users.textContent = 'Users';
        }
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
            if (this.users) {
                this.users.textContent = 'There are no registered users!';
            }
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