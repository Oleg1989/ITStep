import { VeiwItemInterface } from "./interface/viewItemInteface";
import { DataItemInterface } from "./interface/itemInterface";
import { DataBookItem } from "./BookItem";

export class ViewItem implements VeiwItemInterface {
    divMain: HTMLElement;
    divItem: HTMLElement;
    constructor() {
        this.divMain = document.createElement('div');
        this.divItem = document.createElement('div');

        this.divMain.append(this.divItem);
    }
    addItemContent = (item: DataItemInterface) => {
        this.divItem.id = item.id;
        this.divItem.style.backgroundColor = 'blue';
        this.divItem.style.color = 'white';
        this.divItem.style.margin = '5px';
        this.divItem.textContent = `Type: ${item.type}`;

        return this.divMain;
    }
    addItemDescBook = (item: DataItemInterface) => {
        let divTitle = document.createElement('div');
        divTitle.textContent = (item as DataBookItem).title;

        let divDesc = document.createElement('div');
        divDesc.textContent = (item as DataBookItem).desc;

        let divGenre = document.createElement('div');
        divGenre.textContent = (item as DataBookItem).genre[0];

        let divAuthors = document.createElement('div');
        divAuthors.textContent = (item as DataBookItem).authors[0];

        this.divItem.append(divTitle, divDesc, divGenre, divAuthors);

        return this.divItem;
    }
}