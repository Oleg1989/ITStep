import { BasicItem } from "./basicItemInterface";
import { DataItemType } from "../enum/typeEnum";

export interface ViewInterface {
    divApp: HTMLElement;
    divMain: HTMLElement;
    divType: HTMLElement;
    divItem: HTMLElement;
    divDesc: HTMLElement;
    formAdd: HTMLElement;
    viewItems: (items: BasicItem[]) => void;
    viewItemDsc: (item: BasicItem) => void;
    filingFormAdd: (item: BasicItem) => void;
    bindGetItemsByType: (handler: (type: DataItemType) => void) => void;
    bindGetItemsById: (handler: (id: string) => void) => void;
    bindFilingFormAddGetItemsById: (handler: (id: string) => void) => void;
    bindAddItem: (handler: (item: BasicItem) => void) => void;
    bindEditItem: (handler: (item: BasicItem) => void) => void;
    bindDeleteItem: (handler: (id: string, type: DataItemType) => void) => void;
}