import { BasicItem } from "./basicItemInterface";

export interface DataItemsArrayInterface {
    items: BasicItem[];
    onItemsListChanged: (items: BasicItem[]) => void | undefined;
}