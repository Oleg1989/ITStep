import { BasicItem } from "./basicItemInterface";

export interface VeiwItemInterface {
    divMain: HTMLElement;
    divItem: HTMLElement;
    addItemContent: (item: BasicItem) => void;
}
