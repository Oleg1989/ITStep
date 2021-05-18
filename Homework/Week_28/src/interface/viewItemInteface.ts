import { DataItemInterface } from "./itemInterface";

export interface VeiwItemInterface {
    divMain: HTMLElement;
    divItem: HTMLElement;
    addItemContent: (item: DataItemInterface) => void;
}
