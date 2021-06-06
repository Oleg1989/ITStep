import { UsersUpdatedEvent } from "./userUpdatedEvent";
import { Room } from "./room";
import { RoomInterface } from "./interface/roomInterface";

export class RoomsView implements IObserver {
    private _rooms: RoomInterface[] = [];
    rooms: HTMLElement | null;
    message: HTMLElement | null;
    constructor(rooms: RoomInterface[], userUpdatedEvent: UsersUpdatedEvent) {
        this._rooms = rooms;
        this.rooms = document.getElementById('rooms');
        this.message = document.getElementById('message');
        userUpdatedEvent.subscribe(this);
    }
    render() {
        while (this.rooms?.firstChild) {
            this.rooms.removeChild(this.rooms.firstChild);
        }
        //console.log(this._rooms);
        this._rooms.forEach(element => {
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