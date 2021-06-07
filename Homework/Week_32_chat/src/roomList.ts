import { RoomInterface } from "./interface/roomInterface";
import { DataChatInterface } from "./interface/dataChatInterface";
import { UsersRoomUpdatedEvent } from "./userRoomUpdateEvent";
import { User } from "./user";
import { UsersRoomInterface } from "./interface/usersRoomInterface";

export class RoomList {
    idRoom?: string;
    private _dataRoom: DataChatInterface[] = [];
    private _usersRoom: UsersRoomInterface[] = [];
    private _rooms: RoomInterface[] = [];
    private _usersRoomUpdatedEvent: UsersRoomUpdatedEvent;
    constructor(userRoomUpdatedEvent: UsersRoomUpdatedEvent) {
        this._usersRoomUpdatedEvent = userRoomUpdatedEvent;
    }
    get data() {
        return this._dataRoom;
    }
    add(data: DataChatInterface) {
        this._dataRoom.push(data);
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
        console.log(this._usersRoom);
        this._usersRoomUpdatedEvent.trigger();
    }
    addRoom(rooms: RoomInterface[]) {
        rooms.forEach(room => {
            this._rooms.push(room);
        });
        this._usersRoomUpdatedEvent.trigger();
    }
    addUserRoom(user: User, roomId: string) {
        this._usersRoom.forEach(room => {
            if (room.id === roomId) {
                room.users.push(user);
            }
        });
        this._usersRoomUpdatedEvent.trigger();
    }
    get usersRoom(): UsersRoomInterface[] {
        return [...this._usersRoom];
    }
    get rooms(): RoomInterface[] {
        return [...this._rooms];
    }
}