import { Repo } from "./model";
import { View } from "./view";
import { DataChatInterface } from "./interface/dataChatInterface";

export class Controller {
    view: View;
    repo: Repo;
    constructor(view: View, repo: Repo) {
        this.view = view;
        this.repo = repo;

        this.view.connectChat();
        this.repo.bindDataChatChanged(this.onDataChatChanged);
        this.view.bindAddDataChat(this.handlerAddDataChat);
    }
    onDataChatChanged = (data: DataChatInterface[]) => {
        this.view.viewDataChat(data);
    }
    handlerAddDataChat = (data: DataChatInterface) => {
        this.repo.addDataChat(data);
    }

}