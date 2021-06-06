import { User } from "./user";
import { UsersUpdatedEvent } from "./userUpdatedEvent";

export class UsersRoomView implements IObserver {
    private _usersRoomList: User[] = [];
    nicks: HTMLElement | null;
    users: HTMLElement | null;
    constructor(usersRoomList: User[], userUpdatedEvent: UsersUpdatedEvent) {
        this._usersRoomList = usersRoomList;
        this.nicks = document.getElementById('nicks');
        this.users = document.getElementById('users');
        userUpdatedEvent.subscribe(this);
    }
    render() {
        if (this.users) {
            this.users.textContent = `Users room`;
        }
        while (this.nicks?.firstChild) {
            this.nicks.removeChild(this.nicks.firstChild);
        }
        this._usersRoomList.forEach(user => {
            if (user.name !== 'Anonymous') {
                let li = document.createElement('li');
                li.classList.add('collection-item');
                li.textContent = `${user.name}`;
                this.nicks?.append(li);
            }
        });
    }
    notify() {
        this.render();
    }
}