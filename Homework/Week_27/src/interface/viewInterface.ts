import { DataItemInterface } from "./itemInterface";
import { DataItemType } from "../enum/typeEnum";

export interface ViewInterface {
    divApp: HTMLElement;
    divMain: HTMLElement;
    divType: HTMLElement;
    divItem: HTMLElement;
    divDesc: HTMLElement;
    viewItems: (items: DataItemInterface[]) => void;
    viewItemDsc: (item: DataItemInterface) => void;
    bindGetItemsByType: (handler: (type: DataItemType) => void) => void;
    bindGetItemsById: (handler: (id: string) => void) => void;
}