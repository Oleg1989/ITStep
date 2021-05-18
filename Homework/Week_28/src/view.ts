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
    formAdd: HTMLElement;
    constructor() {
        this.divApp = document.createElement('div');
        this.divApp.id = 'app-root';

        this.formAdd = document.createElement('form');
        this.formAdd.id = 'form-modal';
        this.formAdd.setAttribute('name', 'modal');
        this.formAdd.style.display = 'none';
        this.formAdd.addEventListener('click', this.closeModalAddItem);

        this.divApp.append(this.formAdd);

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
        this.divType.addEventListener('click', this.viewModalAddItem);

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
        divGame.style.textAlign = 'right';
        divGame.textContent = DataItemType.Game;

        let addGame = document.createElement('button');
        addGame.id = 'add-game';
        addGame.textContent = 'Add game';
        addGame.style.height = '30px';
        addGame.style.width = '80px';
        addGame.style.marginLeft = '115px';
        addGame.style.backgroundColor = 'green';

        divGame.append(addGame);

        let divMusic = document.createElement('div');
        divMusic.setAttribute('data-type', 'Music');
        divMusic.style.margin = '5px';
        divMusic.style.padding = '5px';
        divMusic.style.width = '90%';
        divMusic.style.background = 'rgb(255,0,0,0.3)';
        divMusic.style.textAlign = 'right';
        divMusic.textContent = DataItemType.Music;

        let addMusic = document.createElement('button');
        addMusic.id = 'add-music';
        addMusic.textContent = 'Add music';
        addMusic.style.height = '30px';
        addMusic.style.width = '80px';
        addMusic.style.marginLeft = '115px';
        addMusic.style.backgroundColor = 'green';

        divMusic.append(addMusic);

        let divMovie = document.createElement('div');
        divMovie.setAttribute('data-type', 'Movie');
        divMovie.style.margin = '5px';
        divMovie.style.padding = '5px';
        divMovie.style.width = '90%';
        divMovie.style.background = 'rgb(255,0,0,0.3)';
        divMovie.style.textAlign = 'right';
        divMovie.textContent = DataItemType.Movie;

        let addMovie = document.createElement('button');
        addMovie.id = 'add-movie';
        addMovie.textContent = 'Add movie';
        addMovie.style.height = '30px';
        addMovie.style.width = '80px';
        addMovie.style.marginLeft = '115px';
        addMovie.style.backgroundColor = 'green';

        divMovie.append(addMovie);

        let divBook = document.createElement('div');
        divBook.setAttribute('data-type', 'Book');
        divBook.style.margin = '5px';
        divBook.style.padding = '5px';
        divBook.style.width = '90%';
        divBook.style.background = 'rgb(255,0,0,0.3)';
        divBook.style.textAlign = 'right';
        divBook.textContent = DataItemType.Book;

        let addBook = document.createElement('button');
        addBook.id = 'add-book';
        addBook.textContent = 'Add book';
        addBook.style.width = '80px';
        addBook.style.height = '30px';
        addBook.style.marginLeft = '115px';
        addBook.style.backgroundColor = 'green';

        divBook.append(addBook);

        this.divType.append(divGame, divMusic, divMovie, divBook);
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
    viewModalAddItem = (event: Event) => {
        // if ((event.target as HTMLElement)?.id === 'add-game') {
        //     this.formAdd.style.display = 'block';
        //     let formAdd = document.forms[0];
        //     formAdd.elements.title.value = '';
        //     formAdd.elements.desc.value = '';
        // }
        switch ((event.target as HTMLElement)?.id) {
            case 'add-game':
                this.formAdd.style.display = 'block';

                let modalGame = document.createElement('div');
                modalGame.id = 'modal';
                modalGame.style.width = '50%';
                modalGame.style.border = '2px solid yellow';
                modalGame.style.borderRadius = '10px';
                modalGame.style.display = 'flex';
                modalGame.style.flexDirection = "column";
                modalGame.style.padding = '20px';
                modalGame.style.textAlign = 'center';
                modalGame.style.backgroundColor = 'rgb(0,128,128, 0.9)';
                modalGame.style.position = 'absolute';
                modalGame.style.left = '25%';
                modalGame.style.top = '30px';

                let modalGameTitle = document.createElement('h1');
                modalGameTitle.textContent = 'Game';

                let inputGameTitle = document.createElement('input');
                inputGameTitle.type = 'text';
                inputGameTitle.setAttribute('name', 'title');
                inputGameTitle.setAttribute('placeholder', 'Title');
                inputGameTitle.style.margin = '10px 0';
                inputGameTitle.style.width = '100%';
                inputGameTitle.style.fontSize = '24px';

                let inputGameDesc = document.createElement('input');
                inputGameDesc.type = 'text';
                inputGameDesc.setAttribute('placeholder', 'Description');
                inputGameDesc.setAttribute('name', 'desc');
                inputGameDesc.style.margin = '10px 0';
                inputGameDesc.style.width = '100%';
                inputGameDesc.style.fontSize = '24px';

                let inputGameGente = document.createElement('input');
                inputGameGente.type = "text";
                inputGameGente.setAttribute('placeholder', 'Gente');
                inputGameGente.setAttribute('name', 'gente');
                inputGameGente.id = "gente";
                inputGameGente.style.margin = '10px 0';
                inputGameGente.style.width = '100%';
                inputGameGente.style.fontSize = '24px';

                let inputGamePlatform = document.createElement('input');
                inputGamePlatform.type = "text";
                inputGamePlatform.setAttribute('placeholder', 'Platform');
                inputGamePlatform.setAttribute('name', 'platform');
                inputGamePlatform.id = "platform";
                inputGamePlatform.style.margin = '10px 0';
                inputGamePlatform.style.width = '100%';
                inputGamePlatform.style.fontSize = '24px';

                let addGame = document.createElement('button');
                addGame.setAttribute('name', 'btnAdd');
                addGame.id = 'btn-add';
                addGame.textContent = 'Add';
                addGame.style.width = '30%';
                addGame.style.margin = '10px auto';
                addGame.style.fontSize = '24px';
                addGame.addEventListener('click', this.closeModalAddItem);

                modalGame.append(modalGameTitle, inputGameTitle, inputGameDesc, inputGameGente, inputGamePlatform, addGame);
                this.formAdd.append(modalGame);
                break;
            case 'add-music':
                this.formAdd.style.display = 'block';

                let modalMusic = document.createElement('div');
                modalMusic.id = 'modal';
                modalMusic.style.width = '50%';
                modalMusic.style.border = '2px solid yellow';
                modalMusic.style.borderRadius = '10px';
                modalMusic.style.display = 'flex';
                modalMusic.style.flexDirection = "column";
                modalMusic.style.padding = '20px';
                modalMusic.style.textAlign = 'center';
                modalMusic.style.backgroundColor = 'rgb(0,128,128, 0.9)';
                modalMusic.style.position = 'absolute';
                modalMusic.style.left = '25%';
                modalMusic.style.top = '30px';

                let modalMusicTitle = document.createElement('h1');
                modalMusicTitle.textContent = 'Music';

                let inputMusicTitle = document.createElement('input');
                inputMusicTitle.type = 'text';
                inputMusicTitle.setAttribute('name', 'title');
                inputMusicTitle.setAttribute('placeholder', 'Title');
                inputMusicTitle.style.margin = '10px 0';
                inputMusicTitle.style.width = '100%';
                inputMusicTitle.style.fontSize = '24px';

                let inputMusicDesc = document.createElement('input');
                inputMusicDesc.type = 'text';
                inputMusicDesc.setAttribute('placeholder', 'Description');
                inputMusicDesc.setAttribute('name', 'desc');
                inputMusicDesc.style.margin = '10px 0';
                inputMusicDesc.style.width = '100%';
                inputMusicDesc.style.fontSize = '24px';

                let inputMusicGente = document.createElement('input');
                inputMusicGente.type = "text";
                inputMusicGente.setAttribute('placeholder', 'Gente');
                inputMusicGente.setAttribute('name', 'gente');
                inputMusicGente.id = "gente";
                inputMusicGente.style.margin = '10px 0';
                inputMusicGente.style.width = '100%';
                inputMusicGente.style.fontSize = '24px';

                let inputMusicPerformer = document.createElement('input');
                inputMusicPerformer.type = "text";
                inputMusicPerformer.setAttribute('placeholder', 'Performer');
                inputMusicPerformer.setAttribute('name', 'performer');
                inputMusicPerformer.id = "performer";
                inputMusicPerformer.style.margin = '10px 0';
                inputMusicPerformer.style.width = '100%';
                inputMusicPerformer.style.fontSize = '24px';

                let inputMusicAlbum = document.createElement('input');
                inputMusicAlbum.type = "text";
                inputMusicAlbum.setAttribute('placeholder', 'Album');
                inputMusicAlbum.setAttribute('name', 'album');
                inputMusicAlbum.id = "album";
                inputMusicAlbum.style.margin = '10px 0';
                inputMusicAlbum.style.width = '100%';
                inputMusicAlbum.style.fontSize = '24px';

                let addMusic = document.createElement('button');
                addMusic.setAttribute('name', 'btnAdd');
                addMusic.id = 'btn-add';
                addMusic.textContent = 'Add';
                addMusic.style.width = '30%';
                addMusic.style.margin = '10px auto';
                addMusic.style.fontSize = '24px';

                modalMusic.append(modalMusicTitle, inputMusicTitle, inputMusicDesc, inputMusicGente, inputMusicPerformer, inputMusicAlbum, addMusic);
                this.formAdd.append(modalMusic);
                break;
            case 'add-movie':
                this.formAdd.style.display = 'block';

                let modalMovie = document.createElement('div');
                modalMovie.id = 'modal';
                modalMovie.style.width = '50%';
                modalMovie.style.border = '2px solid yellow';
                modalMovie.style.borderRadius = '10px';
                modalMovie.style.display = 'flex';
                modalMovie.style.flexDirection = "column";
                modalMovie.style.padding = '20px';
                modalMovie.style.textAlign = 'center';
                modalMovie.style.backgroundColor = 'rgb(0,128,128, 0.9)';
                modalMovie.style.position = 'absolute';
                modalMovie.style.left = '25%';
                modalMovie.style.top = '30px';

                let modalMovieTitle = document.createElement('h1');
                modalMovieTitle.textContent = 'Movie';

                let inputMovieTitle = document.createElement('input');
                inputMovieTitle.type = 'text';
                inputMovieTitle.setAttribute('name', 'title');
                inputMovieTitle.setAttribute('placeholder', 'Title');
                inputMovieTitle.style.margin = '10px 0';
                inputMovieTitle.style.width = '100%';
                inputMovieTitle.style.fontSize = '24px';

                let inputMovieDesc = document.createElement('input');
                inputMovieDesc.type = 'text';
                inputMovieDesc.setAttribute('placeholder', 'Description');
                inputMovieDesc.setAttribute('name', 'desc');
                inputMovieDesc.style.margin = '10px 0';
                inputMovieDesc.style.width = '100%';
                inputMovieDesc.style.fontSize = '24px';

                let inputMovieGente = document.createElement('input');
                inputMovieGente.type = "text";
                inputMovieGente.setAttribute('placeholder', 'Gente');
                inputMovieGente.setAttribute('name', 'gente');
                inputMovieGente.id = "gente";
                inputMovieGente.style.margin = '10px 0';
                inputMovieGente.style.width = '100%';
                inputMovieGente.style.fontSize = '24px';

                let inputMovieActors = document.createElement('input');
                inputMovieActors.type = "text";
                inputMovieActors.setAttribute('placeholder', 'Actors');
                inputMovieActors.setAttribute('name', 'actors');
                inputMovieActors.id = "actors";
                inputMovieActors.style.margin = '10px 0';
                inputMovieActors.style.width = '100%';
                inputMovieActors.style.fontSize = '24px';

                let addMovie = document.createElement('button');
                addMovie.setAttribute('name', 'btnAdd');
                addMovie.id = 'btn-add';
                addMovie.textContent = 'Add';
                addMovie.style.width = '30%';
                addMovie.style.margin = '10px auto';
                addMovie.style.fontSize = '24px';
                addMovie.addEventListener('click', this.closeModalAddItem);

                modalMovie.append(modalMovieTitle, inputMovieTitle, inputMovieDesc, inputMovieGente, inputMovieActors, addMovie);
                this.formAdd.append(modalMovie);
                break;
            case 'add-book':
                this.formAdd.style.display = 'block';

                let modalBook = document.createElement('div');
                modalBook.id = 'modal';
                modalBook.style.width = '50%';
                modalBook.style.border = '2px solid yellow';
                modalBook.style.borderRadius = '10px';
                modalBook.style.display = 'flex';
                modalBook.style.flexDirection = "column";
                modalBook.style.padding = '20px';
                modalBook.style.textAlign = 'center';
                modalBook.style.backgroundColor = 'rgb(0,128,128, 0.9)';
                modalBook.style.position = 'absolute';
                modalBook.style.left = '25%';
                modalBook.style.top = '30px';

                let modalBookTitle = document.createElement('h1');
                modalBookTitle.textContent = 'Book';

                let inputBookTitle = document.createElement('input');
                inputBookTitle.type = 'text';
                inputBookTitle.setAttribute('name', 'title');
                inputBookTitle.setAttribute('placeholder', 'Title');
                inputBookTitle.style.margin = '10px 0';
                inputBookTitle.style.width = '100%';
                inputBookTitle.style.fontSize = '24px';

                let inputBookDesc = document.createElement('input');
                inputBookDesc.type = 'text';
                inputBookDesc.setAttribute('placeholder', 'Description');
                inputBookDesc.setAttribute('name', 'desc');
                inputBookDesc.style.margin = '10px 0';
                inputBookDesc.style.width = '100%';
                inputBookDesc.style.fontSize = '24px';

                let inputBookGente = document.createElement('input');
                inputBookGente.type = "text";
                inputBookGente.setAttribute('placeholder', 'Gente');
                inputBookGente.setAttribute('name', 'gente');
                inputBookGente.id = "gente";
                inputBookGente.style.margin = '10px 0';
                inputBookGente.style.width = '100%';
                inputBookGente.style.fontSize = '24px';

                let inputBookAuthors = document.createElement('input');
                inputBookAuthors.type = "text";
                inputBookAuthors.setAttribute('placeholder', 'Authors');
                inputBookAuthors.setAttribute('name', 'authors');
                inputBookAuthors.id = "authors";
                inputBookAuthors.style.margin = '10px 0';
                inputBookAuthors.style.width = '100%';
                inputBookAuthors.style.fontSize = '24px';

                let addBook = document.createElement('button');
                addBook.setAttribute('name', 'btnAdd');
                addBook.id = 'btn-add';
                addBook.textContent = 'Add';
                addBook.style.width = '30%';
                addBook.style.margin = '10px auto';
                addBook.style.fontSize = '24px';
                addBook.addEventListener('click', this.closeModalAddItem);

                modalBook.append(modalBookTitle, inputBookTitle, inputBookDesc, inputBookGente, inputBookAuthors, addBook);
                this.formAdd.append(modalBook);
                break;
        }
    }
    closeModalAddItem = (event: Event) => {
        if ((event.target as HTMLElement)?.id === 'btn-add') {
            this.formAdd.style.display = 'none';
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
    bindShowModalAdd = () => {

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

