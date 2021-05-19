import { BasicItem } from "./basicItemInterface";

export interface VeiwItemInterface {
    divItem: HTMLElement;
    addItemContent: (item: BasicItem) => void;
}
