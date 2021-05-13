import { DataItemInterface } from "";

export interface VeiwItemInterface {
    divMain: HTMLElement;
    divItem: HTMLElement;
    addItemContent: (item: DataItemInterface) => void;
}
