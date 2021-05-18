import { BasicItem } from "./interface/basicItemInterface"
import { DataItemType } from "./enum/typeEnum"

export class DataItemsArray {
    private items: BasicItem[];
    constructor(arrItems: BasicItem[]) {
        this.items = arrItems;
    }
    addItem(item: BasicItem): void {
        if (!this.items.find(x => x == item)) {
            this.items.push(item);
        }
        else {
            throw new Error("Element is exist!!!");
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
}