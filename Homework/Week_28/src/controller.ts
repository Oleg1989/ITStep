import { ControllerInterface } from "./interface/controller.interface";
import { ViewInterface } from "./interface/viewInterface";
import { DataItemsArray } from "./ItemsMas";
import { BasicItem } from "./interface/basicItemInterface";
import { DataItemType } from "./enum/typeEnum";

export class Controller implements ControllerInterface {
    view: ViewInterface;
    repo: DataItemsArray;
    constructor(view: ViewInterface, repo: DataItemsArray) {
        this.view = view;
        this.repo = repo;
        this.view.bindGetItemsByType(this.handlerGetItemsByType);
        this.view.bindGetItemsById(this.handlerGetItemsById);
        this.view.bindAddItem(this.handlerAddItem);
        this.view.bindDeleteItem(this.handlerDeleteItem);
        this.view.bindEditItem(this.handlerEditItem);
        this.repo.bindItemsListChanged(this.onItemsListChanged);
        this.view.bindFilingFormAddGetItemsById(this.handlerGetItemsByIdForEdit);
    }
    onItemsListChanged = (items: BasicItem[]) => {
        this.view.viewItems(items);
    }
    onDescListChanged = (item: BasicItem) => {
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
    handlerGetItemsByIdForEdit = (id: string) => {
        let item = this.repo.getItemById(id);
        if (item) {
            this.view.filingFormAdd(item);
        }
    }
    handlerAddItem = (item: BasicItem) => {
        this.repo.addItem(item);
    }
    handlerDeleteItem = (id: string, type: DataItemType) => {
        this.repo.deleteItem(id, type);
    }
    handlerEditItem = (item: BasicItem) => {
        this.repo.editItem(item);
    }
}