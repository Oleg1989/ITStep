import { ViewInterface } from "./interface/viewInterface";
import { ViewItem } from "./viewItem";
import { BasicItem } from "./interface/basicItemInterface";
import { DataItemType } from "./enum/typeEnum";

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
        this.divType.style.border = '4px solid red';
        this.divType.style.display = 'flex';
        this.divType.style.flexDirection = 'column';
        this.divType.style.alignItems = 'center';

        this.divItem = document.createElement('div');
        this.divItem.style.width = '30%';
        this.divItem.style.margin = '5px';
        this.divItem.style.border = '4px solid blue';

        this.divDesc = document.createElement('div');
        this.divDesc.style.width = '30%';
        this.divDesc.style.margin = '5px';
        this.divDesc.style.border = '4px solid green';

        let divGame = document.createElement('div');
        divGame.setAttribute('data-type', 'Game');
        divGame.style.margin = '5px';
        divGame.style.padding = '5px';
        divGame.style.width = '90%';
        divGame.style.background = 'rgb(255,0,0,0.3)';
        divGame.style.textAlign = 'center';
        divGame.textContent = DataItemType.Game;

        let divMusic = document.createElement('div');
        divMusic.setAttribute('data-type', 'Music');
        divMusic.style.margin = '5px';
        divMusic.style.padding = '5px';
        divMusic.style.width = '90%';
        divMusic.style.background = 'rgb(255,0,0,0.3)';
        divMusic.style.textAlign = 'center';
        divMusic.textContent = DataItemType.Music;

        let divMovie = document.createElement('div');
        divMovie.setAttribute('data-type', 'Movie');
        divMovie.style.margin = '5px';
        divMovie.style.padding = '5px';
        divMovie.style.width = '90%';
        divMovie.style.background = 'rgb(255,0,0,0.3)';
        divMovie.style.textAlign = 'center';
        divMovie.textContent = DataItemType.Movie;

        let divBook = document.createElement('div');
        divBook.setAttribute('data-type', 'Book');
        divBook.style.margin = '5px';
        divBook.style.padding = '5px';
        divBook.style.width = '90%';
        divBook.style.background = 'rgb(255,0,0,0.3)';
        divBook.style.textAlign = 'center';
        divBook.textContent = DataItemType.Book;

        let buttonAdd = document.createElement('button');
        buttonAdd.id = 'btn-add';
        buttonAdd.textContent = 'ADD';
        buttonAdd.style.width = '50%';
        buttonAdd.style.height = '30px';
        buttonAdd.style.margin = '5px';
        buttonAdd.style.backgroundColor = 'green';
        this.divType.append(divGame, divMusic, divMovie, divBook, buttonAdd);
        this.divMain.append(this.divType, this.divItem, this.divDesc);
        this.divApp.append(this.divMain);
        document.body.append(this.divApp);
    }
    viewItems = (items: BasicItem[]) => {
        this.resetItemslist();
        items.forEach(element => {
            const item = new ViewItem();
            this.divItem.append(item.addItemContent(element));
        })
    }
    viewItemDsc = (item: BasicItem) => {
        this.resetDesclist();
        if (item.type === DataItemType.Book) {
            const book = new ViewItem()
            this.divDesc.append(book.addItemDescBook(item));
        }
        if (item.type === DataItemType.Game) {
            const game = new ViewItem()
            this.divDesc.append(game.addItemDescGame(item));
        }
        if (item.type === DataItemType.Movie) {
            const movie = new ViewItem()
            this.divDesc.append(movie.addItemDescMovie(item));
        }
        if (item.type === DataItemType.Music) {
            const music = new ViewItem()
            this.divDesc.append(music.addItemDescMusic(item));
        }

    }
    bindGetItemsByType(handler: (type: DataItemType) => void) {
        this.divType.addEventListener('click', (event: Event) => {
            let type = (event.target as HTMLElement).dataset.type;
            if (type) {
                handler(type as DataItemType);
            }
        })
    }
    bindGetItemsById(handler: (id: string) => void) {
        this.divItem.addEventListener('click', (event: Event) => {
            let id = (event.target as Element).id;
            if (id) {
                handler(id);
            }
        })
    }
    bindAddItem(hendler: (id: string) => void) {
        this.divType.addEventListener('click', (event: Event) => {
            let id = (event.target as Element).id;
            if (id) {
                if (id === 'btn-add') {
                    //handler(id);
                    console.log(id);
                }
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

