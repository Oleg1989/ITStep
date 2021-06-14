import { UsersUpdatedEvent } from "../events/userUpdatedEvent";
import { User } from "./user";

export class UserList {
    private _userList: User[] = [];
    private _usersUpdatedEvent: UsersUpdatedEvent;
    constructor(userUpdatedEvent: UsersUpdatedEvent) {
        // let userList = localStorage.getItem("userList");
        // if (userList) {
        //     this._userList = JSON.parse(userList);
        // } else {
        //     this._userList = [];
        // }
        this._usersUpdatedEvent = userUpdatedEvent;
    }
    add(newUser: User) {
        this._userList.push(newUser);
        this._commit(this._userList);
        this._usersUpdatedEvent.trigger();
    }
    delete(id: string) {
        this._userList = this._userList.filter(element => element.id !== id);
        this._commit(this._userList);
        this._usersUpdatedEvent.trigger();
    }
    editNickname(id: string, username: string) {
        this._userList.forEach(user => {
            if (user.id === id) {
                user.name = username;
            }
        });
        this._commit(this._userList);
        this._usersUpdatedEvent.trigger();
    }
    get users(): User[] {
        return [...this._userList];
    }
    _commit(userList: User[]) {
        localStorage.setItem("userList", JSON.stringify(userList));
    }
}