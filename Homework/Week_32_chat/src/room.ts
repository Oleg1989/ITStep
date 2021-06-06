import { RoomInterface } from "./interface/roomInterface";
import { DataChatInterface } from "./interface/dataChatInterface";
import { UsersUpdatedEvent } from "./userUpdatedEvent";
import { User } from "./user";

export class Room {
    private _dataRoom: DataChatInterface[] = [];
    private _usersRoom: User[] = [];
    private _rooms: RoomInterface[] = [];
    private _usersUpdatedEvent: UsersUpdatedEvent;
    constructor(userUpdatedEvent: UsersUpdatedEvent) {
        this._usersUpdatedEvent = userUpdatedEvent;
    }
    get data() {
        return this._dataRoom;
    }
    add(data: DataChatInterface) {
        this._dataRoom.push(data);
        this._usersUpdatedEvent.trigger();
    }
    addUsersRoom(users: User[]) {
        users.forEach(user => {
            this._usersRoom.push(user);
        });
        // this._usersUpdatedEvent.trigger();
    }
    addRoom(room: RoomInterface) {
        this._rooms.push(room);
    }
    get usersRoom(): User[] {
        return [...this._usersRoom];
    }
    get rooms(): RoomInterface[] {
        return [...this._rooms];
    }
}