import { BasicItem } from "./basicItemInterface";
import { DataItemType } from "../enum/typeEnum";

export interface ViewInterface {
    divApp: HTMLElement;
    divMain: HTMLElement;
    divType: HTMLElement;
    divItem: HTMLElement;
    divDesc: HTMLElement;
    viewItems: (items: BasicItem[]) => void;
    viewItemDsc: (item: BasicItem) => void;
    bindGetItemsByType: (handler: (type: DataItemType) => void) => void;
    bindGetItemsById: (handler: (id: string) => void) => void;
}