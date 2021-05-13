import { ViewInterface } from "./interface/viewInterface";
import { ViewItem } from "./viewItem";
import { DataItemInterface } from "./interface/itemInterface";
import { DataItemType } from "./enum/typeEnum";
import { DataBookItem } from "./BookItem";

export class View implements ViewInterface {
    divApp: HTMLElement;
    divMain: HTMLElement;
    divType: HTMLElement;
    divItem: HTMLElement;
    divDesc: HTMLElement;
    constructor() {
        this.divApp = document.createElement('div');
        this.divApp.id = 'app-root';

        this.divMain = document.createElement('div');
        this.divMain.style.width = '100%';
        this.divMain.style.display = 'flex';
        this.divMain.style.justifyContent = 'space-between';

        this.divType = document.createElement('div');
        this.divType.style.width = '30%';
        this.divType.style.margin = '5px';
        this.divType.style.border = '2px solid red';

        this.divItem = document.createElement('div');
        this.divItem.style.width = '30%';
        this.divItem.style.margin = '5px';
        this.divItem.style.border = '2px solid blue';

        this.divDesc = document.createElement('div');
        this.divDesc.style.width = '30%';
        this.divDesc.style.margin = '5px';
        this.divDesc.style.border = '2px solid green';

        let divGame = document.createElement('div');
        divGame.setAttribute('data-type', 'Game');
        divGame.style.margin = '5px';
        divGame.style.background = 'red';
        divGame.textContent = DataItemType.Game;

        let divMusic = document.createElement('div');
        divMusic.setAttribute('data-type', 'Music');
        divMusic.style.margin = '5px';
        divMusic.style.background = 'red';
        divMusic.textContent = DataItemType.Music;

        let divMovie = document.createElement('div');
        divMovie.setAttribute('data-type', 'Movie');
        divMovie.style.margin = '5px';
        divMovie.style.background = 'red';
        divMovie.textContent = DataItemType.Movie;

        let divBook = document.createElement('div');
        divBook.setAttribute('data-type', 'Book');
        divBook.style.margin = '5px';
        divBook.style.background = 'red';
        divBook.textContent = DataItemType.Book;

        let divSportEvent = document.createElement('div');
        divSportEvent.setAttribute('data-type', 'Sport event');
        divSportEvent.style.margin = '5px';
        divSportEvent.style.background = 'red';
        divSportEvent.textContent = DataItemType.SportEvent;

        this.divType.append(divGame, divMusic, divMovie, divBook, divSportEvent);
        this.divMain.append(this.divType, this.divItem, this.divDesc);
        this.divApp.append(this.divMain);
        document.body.append(this.divApp);
    }
    viewItems = (items: DataItemInterface[]) => {
        this.resetItemslist();
        items.forEach(element => {
            const item = new ViewItem();
            this.divItem.append(item.addItemContent(element));
        })
    }
    viewItemDsc = (item: DataItemInterface) => {
        this.resetDesclist();
        if (item.type === DataItemType.Book) {
            const book = new ViewItem()
            this.divDesc.append(book.addItemDescBook(item));
        }

    }
    bindGetItemsByType(handler: (type: DataItemType) => void) {
        this.divType.addEventListener('click', (event: Event) => {
            let type = (event.target as HTMLElement).dataset.type;
            if (type) {
                handler(type as DataItemType);
                console.log(type);
            }
        })
    }
    bindGetItemsById(handler: (id: string) => void) {
        this.divItem.addEventListener('click', (event: Event) => {
            let id = (event.target as Element).id;
            if (id) {
                handler(id);
                console.log(id);
            }
        })
    }
    resetItemslist() {
        while (this.divItem.firstChild) {
            this.divItem.removeChild(this.divItem.firstChild);
        }
    }
    resetDesclist() {
        while (this.divDesc.firstChild) {
            this.divDesc.removeChild(this.divDesc.firstChild);
        }
    }
}

