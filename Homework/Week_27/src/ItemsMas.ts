import cuid from "cuid";
import { DataItemInterface } from "./interface/itemInterface"
import { DataItemType } from "./enum/typeEnum"

export class DataItemsArray {
    private items: DataItemInterface[];
    constructor(arrItems: DataItemInterface[]) {
        this.items = arrItems;
    }
    addItem(item: DataItemInterface): void {
        if (!this.items.find(x => x == item)) {
            this.items.push(item);
        }
        else {
            throw new Error("Element is exist!!!");
        }
    }

    get Items(): DataItemInterface[] {
        return this.items;
    }

    getItemsByType(type: DataItemType): DataItemInterface[] {
        return this.items.filter(x => x.type == type);
    }

    getItemById(id: string): DataItemInterface | undefined {
        const item = this.items.find(x => x.id == id);
        if (item) {
            return item;
        }
    }
}