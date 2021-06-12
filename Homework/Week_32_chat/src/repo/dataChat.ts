import { ChatUpdatedEvent } from "../events/chatUpdatedEvent";
import { DataChatInterface } from "../interface/dataChatInterface";

export class DataChat {
    private _dataChat: DataChatInterface[] = [];
    private _chatUpdatedEvent: ChatUpdatedEvent;
    constructor(chatUpdatedEvent: ChatUpdatedEvent) {
        this._chatUpdatedEvent = chatUpdatedEvent;
    }
    add(data: DataChatInterface) {
        this._dataChat.push(data);
        this._chatUpdatedEvent.trigger();
    }
    get data(): DataChatInterface[] {
        return [...this._dataChat];
    }
}