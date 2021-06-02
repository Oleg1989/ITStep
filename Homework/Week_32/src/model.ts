import { DataChatInterface } from "./interface/dataChatInterface";

export class Repo {
    dataChat: DataChatInterface[];
    constructor() {
        this.dataChat = [];
    }
    onDataChatChanged!: (data: DataChatInterface[]) => void;
    get DataChat(): DataChatInterface[] {
        return this.dataChat;
    }
    addDataChat = (data: DataChatInterface) => {
        this.dataChat.push(data);
        this.onDataChatChanged(this.DataChat);
    }
    bindDataChatChanged = (handler: (data: DataChatInterface[]) => void) => {
        this.onDataChatChanged = handler;
    }
}