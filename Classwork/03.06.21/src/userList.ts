import { UsersUpdatedEvent } from "./userUpdatedEvent";
import { User } from "./user";

export class UserList {
    private _userList: User[] = [];
    private _usersUpdatedEvent: UsersUpdatedEvent;
    constructor(userUpdatedEvent: UsersUpdatedEvent) {
        this._usersUpdatedEvent = userUpdatedEvent;
    }
    add(newUser: User) {
        this._userList.push(newUser);
        this._usersUpdatedEvent.trigger();
    }
    get users(): User[] {
        return [...this._userList];
    }
}