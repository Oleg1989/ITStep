import { UsersUpdatedEvent } from "./userUpdatedEvent";
import { DataChatInterface } from "./interface/dataChatInterface";

export class DataChat {
    private _dataChat: DataChatInterface[] = [];
    private _usersUpdatedEvent: UsersUpdatedEvent;
    constructor(userUpdatedEvent: UsersUpdatedEvent) {
        this._usersUpdatedEvent = userUpdatedEvent;
    }
    add(data: DataChatInterface) {
        this._dataChat.push(data);
        this._usersUpdatedEvent.trigger();
    }
    get data(): DataChatInterface[] {
        return [...this._dataChat];
    }
}