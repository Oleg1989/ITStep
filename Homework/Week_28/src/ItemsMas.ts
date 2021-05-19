import { BasicItem } from "./interface/basicItemInterface"
import { DataItemType } from "./enum/typeEnum"

export class DataItemsArray {
    private items: BasicItem[];
    constructor() {
        let arrItems = localStorage.getItem("items");
        if (arrItems) {
            this.items = JSON.parse(arrItems);
        } else {
            this.items = [];
        }
    }
    addItem(item: BasicItem): void {
        if (!this.items.find(x => x == item)) {
            this.items.push(item);
            this._commit(this.items);
        }
        else {
            throw new Error("Element is not exist!!!");
        }
    }

    get Items(): BasicItem[] {
        return this.items;
    }

    getItemsByType(type: DataItemType): BasicItem[] {
        return this.items.filter(x => x.type == type);
    }

    getItemById(id: string): BasicItem | undefined {
        const item = this.items.find(x => x.id == id);
        if (item) {
            return item;
        }
    }
    _commit(items: BasicItem[]) {
        localStorage.setItem("items", JSON.stringify(items));
    }
}