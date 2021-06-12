import { RoomList } from "../repo/roomList";
import { UsersRoomUpdatedEvent } from "../events/userRoomUpdateEvent";
import { IObserver } from "../interface/iobserver";

export class UsersRoomView implements IObserver {
    private _usersRoomList: RoomList;
    nicks: HTMLElement | null;
    users: HTMLElement | null;
    constructor(usersRoomList: RoomList, userRoomUpdatedEvent: UsersRoomUpdatedEvent) {
        this._usersRoomList = usersRoomList;
        this.nicks = document.getElementById('nicks');
        this.users = document.getElementById('users');
        userRoomUpdatedEvent.subscribe(this);
    }
    render() {
        this._usersRoomList.rooms.forEach(room => {
            if (this._usersRoomList.idRoom === room.id) {
                if (this.users) {
                    this.users.textContent = `Room - ${room.title}`;
                }
            }
        });
        while (this.nicks?.firstChild) {
            this.nicks.removeChild(this.nicks.firstChild);
        }
        this._usersRoomList.usersRoom.forEach(room => {
            if (this._usersRoomList.idRoom === room.id) {
                room.users.forEach(user => {
                    let li = document.createElement('li');
                    li.classList.add('collection-item');
                    li.textContent = `${user.name}`;
                    this.nicks?.append(li);
                });
            }
        });
    }
    notify() {
        this.render();
    }
}