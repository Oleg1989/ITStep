import { UsersRoomUpdatedEvent } from "../events/userRoomUpdateEvent";
import { RoomList } from "../repo/roomList";
import { RoomInterface } from "../interface/roomInterface";
import { IObserver } from "../interface/iobserver";

export class RoomsView implements IObserver {
    private _roomList: RoomList;
    rooms: HTMLElement | null;
    message: HTMLElement | null;
    constructor(roomList: RoomList, userRoomUpdatedEvent: UsersRoomUpdatedEvent) {
        this._roomList = roomList;
        this.rooms = document.getElementById('rooms');
        this.message = document.getElementById('message');
        userRoomUpdatedEvent.subscribe(this);
    }
    render() {
        while (this.rooms?.firstChild) {
            this.rooms.removeChild(this.rooms.firstChild);
        }
        this._roomList.rooms.forEach(element => {
            let room = document.createElement('li');
            room.classList.add('collection-item');
            room.classList.add('teal-text');
            room.textContent = element.title;
            room.id = `${element.id}`;

            // let span = document.createElement('span');
            // span.classList.add('new');
            // span.classList.add('badge');
            // room.append(span);
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