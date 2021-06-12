import { UsersUpdatedEvent } from "../events/userUpdatedEvent";
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
    delete(id: string) {
        this._userList = this._userList.filter(element => element.id !== id);
        this._usersUpdatedEvent.trigger();
    }
    editNickname(id: string, username: string) {
        this._userList.forEach(user => {
            if (user.id === id) {
                user.name = username;
            }
        });
        this._usersUpdatedEvent.trigger();
    }
    get users(): User[] {
        return [...this._userList];
    }
}