import { UsersRoomUpdatedEvent } from "../events/userRoomUpdateEvent";
import { RoomList } from "../repo/roomList";
import { RoomInterface } from "../interface/roomInterface";
import { IObserver } from "../interface/iobserver";

export class RoomsScreenView implements IObserver {
    private _roomList: RoomList;
    screen: HTMLElement | null;
    time: HTMLElement | null;
    constructor(roomList: RoomList, userRoomUpdatedEvent: UsersRoomUpdatedEvent) {
        this._roomList = roomList;
        this.screen = document.getElementById('screen');
        this.time = document.getElementById('time');
        userRoomUpdatedEvent.subscribe(this);
    }
    render() {
        while (this.screen?.firstChild) {
            this.screen.removeChild(this.screen.firstChild);
        }
        while (this.time?.firstChild) {
            this.time.removeChild(this.time.firstChild);
        }
        this._roomList.dataRooms.forEach(dataRoom => {
            if (dataRoom.id == this._roomList.idRoom) {
                dataRoom.data.forEach(data => {
                    let liScreen = document.createElement('li');
                    liScreen.classList.add('collection-item');
                    liScreen.classList.add('teal-text');
                    liScreen.classList.add('text-darken-2');
                    liScreen.textContent = `${data.message}`;
                    this.screen?.append(liScreen);

                    let liTime = document.createElement('li');
                    liTime.classList.add('collection-item');
                    liTime.classList.add('blue-text');
                    liTime.classList.add('text-darken-2');
                    liTime.textContent = `${data.time}`;
                    this.time?.append(liTime);
                });
            }
        });
    }
    notify() {
        this.render();
    }
}