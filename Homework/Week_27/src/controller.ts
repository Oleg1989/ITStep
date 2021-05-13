import { ControllerInterface } from "./interface/controller.interface";
import { ViewInterface } from "./interface/viewInterface";
import { DataItemsArray } from "./ItemsMas";
import { DataItemInterface } from "./interface/itemInterface";
import { DataItemType } from "./enum/typeEnum";

export class Controller implements ControllerInterface {
    view: ViewInterface;
    repo: DataItemsArray;
    constructor(view: ViewInterface, repo: DataItemsArray) {
        this.view = view;
        this.repo = repo;
        this.view.bindGetItemsByType(this.handlerGetItemsByType);
        this.view.bindGetItemsById(this.handlerGetItemsById);
    }
    onItemsListChanged = (items: DataItemInterface[]) => {
        this.view.viewItems(items);
    }
    onDescListChanged = (item: DataItemInterface) => {
        this.view.viewItemDsc(item);
    }
    handlerGetItemsByType = (type: DataItemType) => {
        this.onItemsListChanged(this.repo.getItemsByType(type));
    }
    handlerGetItemsById = (id: string) => {
        let itemId = this.repo.getItemById(id);
        if (itemId) {
            this.view.viewItemDsc(itemId);
        }
    }
}