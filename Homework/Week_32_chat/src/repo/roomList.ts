import { RoomInterface } from "../interface/roomInterface";
import { UsersRoomUpdatedEvent } from "../events/userRoomUpdateEvent";
import { User } from "./user";
import { UsersRoomInterface } from "../interface/usersRoomInterface";
import { DataRoomInterface } from "../interface/dataRoomInterface";

export class RoomList {
    idRoom?: string;
    private _dataRooms: DataRoomInterface[] = [];
    private _usersRoom: UsersRoomInterface[] = [];
    private _rooms: RoomInterface[] = [];
    private _usersRoomUpdatedEvent: UsersRoomUpdatedEvent;
    constructor(userRoomUpdatedEvent: UsersRoomUpdatedEvent) {
        this._usersRoomUpdatedEvent = userRoomUpdatedEvent;
        let dataRooms = localStorage.getItem("dataRooms");
        if (dataRooms) {
            this._dataRooms = JSON.parse(dataRooms);
        } else {
            this._dataRooms = [];
        }
    }
    get dataRooms() {
        return this._dataRooms;
    }
    addDataRoom(dataRoom: DataRoomInterface) {
        if (this._dataRooms.length > 0) {
            for (let i = 0; i < this._dataRooms.length; i++) {
                if (this._dataRooms[i].id === dataRoom.id) {
                    if (this._dataRooms[i].data.length > 99) {
                        this._dataRooms[i].data.shift();
                        this._dataRooms[i].data.push(dataRoom.data[0]);
                    } else {
                        this._dataRooms[i].data.push(dataRoom.data[0]);
                    }
                    this._commit(this._dataRooms);
                    this._usersRoomUpdatedEvent.trigger();
                    return;
                }
            }
            this._dataRooms.push(dataRoom);
        } else {
            this._dataRooms.push(dataRoom);
        }
        this._commit(this._dataRooms);
        this._usersRoomUpdatedEvent.trigger();
    }
    addUsersRoom(usersRoom: UsersRoomInterface) {
        if (this._usersRoom.length === 0) {
            this._usersRoom.push(usersRoom);
        } else {
            for (let i = 0; i < this._usersRoom.length; i++) {
                if (this._usersRoom[i].id === usersRoom.id) {
                    this._usersRoom = this._usersRoom.splice(i, 1, usersRoom);
                } else {
                    this._usersRoom.push(usersRoom);
                }
            }
        }
        this._usersRoomUpdatedEvent.trigger();
    }
    addUserRoom(user: User, roomId: string) {
        this._usersRoom.forEach(room => {
            if (room.id === roomId) {
                if (!room.users.includes(user)) {
                    room.users.push(user);
                }
            }
        });
        this._usersRoomUpdatedEvent.trigger();
    }
    deleteUserRoom(user: User, roomId: string) {
        this._usersRoom.forEach(room => {
            if (room.id === roomId) {
                for (let i = 0; i < room.users.length; i++) {
                    if (room.users[i].id == user.id) {
                        room.users = room.users.filter(userRoom => userRoom.id !== user.id);
                    }
                }
            }
        });
        this._usersRoomUpdatedEvent.trigger();
    }
    addRoom(rooms: RoomInterface[]) {
        rooms.forEach(room => {
            this._rooms.push(room);
        });
        this._usersRoomUpdatedEvent.trigger();
    }
    get usersRoom(): UsersRoomInterface[] {
        return [...this._usersRoom];
    }
    get rooms(): RoomInterface[] {
        return [...this._rooms];
    }
    _commit(dataRooms: DataRoomInterface[]) {
        localStorage.setItem("dataRooms", JSON.stringify(dataRooms));
    }
}