import { UsersUpdatedEvent } from "../events/userUpdatedEvent";
import { RoomList } from "../repo/roomList";
import { IObserver } from "../interface/iobserver";

export class RoomsView implements IObserver {
    private _roomList: RoomList;
    rooms: HTMLElement | null;
    message: HTMLElement | null;
    constructor(roomList: RoomList, userUpdatedEvent: UsersUpdatedEvent) {
        this._roomList = roomList;
        this.rooms = document.getElementById('rooms');
        this.message = document.getElementById('message');
        userUpdatedEvent.subscribe(this);
    }
    render() {
        while (this.rooms?.firstChild) {
            this.rooms.removeChild(this.rooms.firstChild);
        }
        this._roomList.rooms.forEach(element => {
            let room = document.createElement('li');
            room.classList.add('collection-item');
            room.classList.add('teal-text');
            room.style.cursor = 'pointer';
            room.textContent = element.title;
            room.id = `${element.id}`;

            document.getElementById('rooms')?.append(room);
        });
    }
    renderRoom(id: string) {
        let room = document.getElementById(id);
        if (room) {
            let liRooms = this.rooms?.getElementsByTagName('li');
            if (liRooms) {
                for (let i = 0; i < liRooms.length; i++) {
                    if (liRooms[i].classList.contains("active")) {
                        liRooms[i].classList.remove("active");
                        liRooms[i].classList.remove("white-text");
                        liRooms[i].classList.add('teal-text');
                    }
                }
            }
            room.classList.add('active');
            room.classList.remove('teal-text');
            room.classList.add('white-text');
        }
        this.message?.removeAttribute('disabled');
    }

    notify() {
        this.render();
    }
}