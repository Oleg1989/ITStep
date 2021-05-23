import { ViewInterface } from "./interface/viewInterface";
import { ViewItem } from "./viewItem";
import { BasicItem } from "./interface/basicItemInterface";
import { DataItemType } from "./enum/typeEnum";
import { Book } from "./classItems/book";
import { Game } from "./classItems/game";
import { Movie } from "./classItems/movie";
import { Music } from "./classItems/music";
import { BookItem } from "./interface/bookItemInterface";
import { MovieItem } from "./interface/movieItemInterface";
import { GameItem } from "./interface/gameItemInterface";
import { MusicItem } from "./interface/musicItemInterface";

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
        this.formAdd.style.display = 'none';
        this.formAdd.addEventListener('click', this.closeModalAddItem);

        this.divMain = document.createElement('div');
        this.divMain.id = 'main';
        this.divMain.style.width = '100%';
        this.divMain.style.display = 'flex';
        this.divMain.style.justifyContent = 'space-between';

        this.divType = document.createElement('div');
        this.divType.id = 'type';
        this.divType.style.width = '30%';
        this.divType.style.margin = '5px';
        this.divType.style.border = '4px solid red';
        this.divType.style.display = 'flex';
        this.divType.style.flexDirection = 'column';
        this.divType.style.alignItems = 'center';
        this.divType.addEventListener('click', this.viewModalAddItem);

        this.divItem = document.createElement('div');
        this.divItem.id = 'item';
        this.divItem.style.width = '30%';
        this.divItem.style.margin = '5px';
        this.divItem.style.border = '4px solid blue';

        this.divDesc = document.createElement('div');
        this.divDesc.id = 'desc';
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
        divGame.style.cursor = 'pointer';
        divGame.textContent = DataItemType.Game;

        let addGame = document.createElement('button');
        addGame.id = 'add-game';
        addGame.textContent = 'Add game';
        addGame.style.height = '30px';
        addGame.style.width = '80px';
        addGame.style.marginLeft = '115px';
        addGame.style.backgroundColor = 'green';
        addGame.style.cursor = 'pointer';

        divGame.append(addGame);

        let divMusic = document.createElement('div');
        divMusic.setAttribute('data-type', 'Music');
        divMusic.style.margin = '5px';
        divMusic.style.padding = '5px';
        divMusic.style.width = '90%';
        divMusic.style.background = 'rgb(255,0,0,0.3)';
        divMusic.style.textAlign = 'right';
        divMusic.style.cursor = 'pointer';
        divMusic.textContent = DataItemType.Music;

        let addMusic = document.createElement('button');
        addMusic.id = 'add-music';
        addMusic.textContent = 'Add music';
        addMusic.style.height = '30px';
        addMusic.style.width = '80px';
        addMusic.style.marginLeft = '115px';
        addMusic.style.backgroundColor = 'green';
        addMusic.style.cursor = 'pointer';

        divMusic.append(addMusic);

        let divMovie = document.createElement('div');
        divMovie.setAttribute('data-type', 'Movie');
        divMovie.style.margin = '5px';
        divMovie.style.padding = '5px';
        divMovie.style.width = '90%';
        divMovie.style.background = 'rgb(255,0,0,0.3)';
        divMovie.style.textAlign = 'right';
        divMovie.style.cursor = 'pointer';
        divMovie.textContent = DataItemType.Movie;

        let addMovie = document.createElement('button');
        addMovie.id = 'add-movie';
        addMovie.textContent = 'Add movie';
        addMovie.style.height = '30px';
        addMovie.style.width = '80px';
        addMovie.style.marginLeft = '115px';
        addMovie.style.backgroundColor = 'green';
        addMovie.style.cursor = 'pointer';

        divMovie.append(addMovie);

        let divBook = document.createElement('div');
        divBook.setAttribute('data-type', 'Book');
        divBook.style.margin = '5px';
        divBook.style.padding = '5px';
        divBook.style.width = '90%';
        divBook.style.background = 'rgb(255,0,0,0.3)';
        divBook.style.textAlign = 'right';
        divBook.style.cursor = 'pointer';
        divBook.textContent = DataItemType.Book;

        let addBook = document.createElement('button');
        addBook.id = 'add-book';
        addBook.textContent = 'Add book';
        addBook.style.width = '80px';
        addBook.style.height = '30px';
        addBook.style.marginLeft = '115px';
        addBook.style.backgroundColor = 'green';
        addBook.style.cursor = 'pointer';

        divBook.append(addBook);

        this.divType.append(divGame, divMusic, divMovie, divBook);
        this.divMain.append(this.divType, this.divItem, this.divDesc);
        this.divApp.append(this.formAdd, this.divMain);
        document.body.append(this.divApp);
    }
    viewItems = (items: BasicItem[]) => {
        this.resetItemslist();
        this.formAdd.style.display = 'none';
        items.forEach(element => {
            const item = new ViewItem();
            this.divItem.append(item.addItemContent(element));
        })
    }
    viewItemDsc = (item: BasicItem) => {
        this.resetDesclist();
        this.resentFormAdd();
        if (item.type === DataItemType.Book) {
            const book = new ViewItem();
            this.divDesc.append(book.addItemDescBook(item));
            document.getElementById('edit-book')?.addEventListener('click', this.viewModalEditItem);
        }
        if (item.type === DataItemType.Game) {
            const game = new ViewItem();
            this.divDesc.append(game.addItemDescGame(item));
            document.getElementById('edit-game')?.addEventListener('click', this.viewModalEditItem);
        }
        if (item.type === DataItemType.Movie) {
            const movie = new ViewItem();
            this.divDesc.append(movie.addItemDescMovie(item));
            document.getElementById('edit-movie')?.addEventListener('click', this.viewModalEditItem);
        }
        if (item.type === DataItemType.Music) {
            const music = new ViewItem();
            this.divDesc.append(music.addItemDescMusic(item));
            document.getElementById('edit-music')?.addEventListener('click', this.viewModalEditItem);
        }

    }
    viewModalAddItem = (event: Event) => {
        this.resentFormAdd();
        switch ((event.target as HTMLElement)?.id) {
            case 'add-game':
                this.formAdd.style.display = 'block';
                this.formAdd.setAttribute('name', 'Game');
                this.formAdd.style.width = '50%';
                this.formAdd.style.border = '2px solid yellow';
                this.formAdd.style.borderRadius = '10px';
                this.formAdd.style.display = 'flex';
                this.formAdd.style.flexDirection = "column";
                this.formAdd.style.padding = '20px';
                this.formAdd.style.textAlign = 'center';
                this.formAdd.style.backgroundColor = 'rgb(0,128,128, 0.9)';
                this.formAdd.style.position = 'absolute';
                this.formAdd.style.left = '25%';
                this.formAdd.style.top = '30px';

                let modalGameTitle = document.createElement('h1');
                modalGameTitle.textContent = 'Game';

                let inputGameTitle = document.createElement('input');
                inputGameTitle.type = 'text';
                inputGameTitle.id = 'title';
                inputGameTitle.setAttribute('name', 'title');
                inputGameTitle.setAttribute('placeholder', 'Title');
                inputGameTitle.style.margin = '10px 0';
                inputGameTitle.style.width = '100%';
                inputGameTitle.style.fontSize = '24px';

                let inputGameDesc = document.createElement('input');
                inputGameDesc.type = 'text';
                inputGameDesc.id = 'desc';
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

                let addGame = document.createElement('input');
                addGame.type = 'submit';
                addGame.value = 'Add game';
                addGame.setAttribute('name', 'btnAdd');
                addGame.id = 'btn-add';
                addGame.style.width = '30%';
                addGame.style.margin = '10px auto';
                addGame.style.fontSize = '24px';
                addGame.style.cursor = 'pointer';

                this.formAdd.append(modalGameTitle, inputGameTitle, inputGameDesc, inputGameGente, inputGamePlatform, addGame);
                break;
            case 'add-music':
                this.formAdd.style.display = 'block';
                this.formAdd.setAttribute('name', 'Music');
                this.formAdd.style.width = '50%';
                this.formAdd.style.border = '2px solid yellow';
                this.formAdd.style.borderRadius = '10px';
                this.formAdd.style.display = 'flex';
                this.formAdd.style.flexDirection = "column";
                this.formAdd.style.padding = '20px';
                this.formAdd.style.textAlign = 'center';
                this.formAdd.style.backgroundColor = 'rgb(0,128,128, 0.9)';
                this.formAdd.style.position = 'absolute';
                this.formAdd.style.left = '25%';
                this.formAdd.style.top = '30px';

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

                let addMusic = document.createElement('input');
                addMusic.type = 'submit';
                addMusic.value = 'Add music';
                addMusic.setAttribute('name', 'btnAdd');
                addMusic.id = 'btn-add';
                addMusic.style.width = '30%';
                addMusic.style.margin = '10px auto';
                addMusic.style.fontSize = '24px';
                addMusic.style.cursor = 'pointer';

                this.formAdd.append(modalMusicTitle, inputMusicTitle, inputMusicDesc, inputMusicGente, inputMusicPerformer, inputMusicAlbum, addMusic);
                break;
            case 'add-movie':
                this.formAdd.style.display = 'block';
                this.formAdd.setAttribute('name', 'Movie');
                this.formAdd.style.width = '50%';
                this.formAdd.style.border = '2px solid yellow';
                this.formAdd.style.borderRadius = '10px';
                this.formAdd.style.display = 'flex';
                this.formAdd.style.flexDirection = "column";
                this.formAdd.style.padding = '20px';
                this.formAdd.style.textAlign = 'center';
                this.formAdd.style.backgroundColor = 'rgb(0,128,128, 0.9)';
                this.formAdd.style.position = 'absolute';
                this.formAdd.style.left = '25%';
                this.formAdd.style.top = '30px';

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

                let inputMovieDirector = document.createElement('input');
                inputMovieDirector.type = "text";
                inputMovieDirector.setAttribute('placeholder', 'Director');
                inputMovieDirector.setAttribute('name', 'director');
                inputMovieDirector.id = "actors";
                inputMovieDirector.style.margin = '10px 0';
                inputMovieDirector.style.width = '100%';
                inputMovieDirector.style.fontSize = '24px';

                let inputMovieActors = document.createElement('input');
                inputMovieActors.type = "text";
                inputMovieActors.setAttribute('placeholder', 'Actors');
                inputMovieActors.setAttribute('name', 'actors');
                inputMovieActors.id = "actors";
                inputMovieActors.style.margin = '10px 0';
                inputMovieActors.style.width = '100%';
                inputMovieActors.style.fontSize = '24px';

                let addMovie = document.createElement('input');
                addMovie.type = 'submit';
                addMovie.value = 'Add movie';
                addMovie.setAttribute('name', 'btnAdd');
                addMovie.id = 'btn-add';
                addMovie.style.width = '30%';
                addMovie.style.margin = '10px auto';
                addMovie.style.fontSize = '24px';
                addMovie.style.cursor = 'pointer';

                this.formAdd.append(modalMovieTitle, inputMovieTitle, inputMovieDesc, inputMovieGente, inputMovieDirector, inputMovieActors, addMovie);
                break;
            case 'add-book':
                this.formAdd.style.display = 'block';
                this.formAdd.setAttribute('name', 'Book');
                this.formAdd.style.width = '50%';
                this.formAdd.style.border = '2px solid yellow';
                this.formAdd.style.borderRadius = '10px';
                this.formAdd.style.display = 'flex';
                this.formAdd.style.flexDirection = "column";
                this.formAdd.style.padding = '20px';
                this.formAdd.style.textAlign = 'center';
                this.formAdd.style.backgroundColor = 'rgb(0,128,128, 0.9)';
                this.formAdd.style.position = 'absolute';
                this.formAdd.style.left = '25%';
                this.formAdd.style.top = '30px';

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

                let addBook = document.createElement('input');
                addBook.type = 'submit';
                addBook.value = 'Add book';
                addBook.setAttribute('name', 'btnAdd');
                addBook.id = 'btn-add';
                addBook.style.width = '30%';
                addBook.style.margin = '10px auto';
                addBook.style.fontSize = '24px';
                addBook.style.cursor = 'pointer';

                this.formAdd.append(modalBookTitle, inputBookTitle, inputBookDesc, inputBookGente, inputBookAuthors, addBook);
                break;
            default:
                break;
        }
    }
    viewModalEditItem = (event: Event) => {
        this.resentFormAdd();
        switch ((event.target as HTMLElement)?.id) {
            case 'edit-game':
                this.formAdd.style.display = 'block';
                this.formAdd.setAttribute('name', 'Game');
                this.formAdd.style.width = '50%';
                this.formAdd.style.border = '2px solid yellow';
                this.formAdd.style.borderRadius = '10px';
                this.formAdd.style.display = 'flex';
                this.formAdd.style.flexDirection = "column";
                this.formAdd.style.padding = '20px';
                this.formAdd.style.textAlign = 'center';
                this.formAdd.style.backgroundColor = 'rgb(0,128,128, 0.9)';
                this.formAdd.style.position = 'absolute';
                this.formAdd.style.left = '25%';
                this.formAdd.style.top = '30px';

                let modalGameTitle = document.createElement('h1');
                modalGameTitle.textContent = 'Game';

                let inputGameTitle = document.createElement('input');
                inputGameTitle.type = 'text';
                inputGameTitle.id = 'title';
                inputGameTitle.setAttribute('name', 'title');
                inputGameTitle.setAttribute('placeholder', 'Title');
                inputGameTitle.style.margin = '10px 0';
                inputGameTitle.style.width = '100%';
                inputGameTitle.style.fontSize = '24px';

                let inputGameDesc = document.createElement('input');
                inputGameDesc.type = 'text';
                inputGameDesc.id = 'desc';
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

                let addGame = document.createElement('input');
                addGame.type = 'submit';
                addGame.value = 'Edit game';
                addGame.setAttribute('name', 'btnAdd');
                addGame.id = 'edit';
                addGame.style.width = '30%';
                addGame.style.margin = '10px auto';
                addGame.style.fontSize = '24px';
                addGame.style.cursor = 'pointer';

                this.formAdd.append(modalGameTitle, inputGameTitle, inputGameDesc, inputGameGente, inputGamePlatform, addGame);
                break;
            case 'edit-music':
                this.formAdd.style.display = 'block';
                this.formAdd.setAttribute('name', 'Music');
                this.formAdd.style.width = '50%';
                this.formAdd.style.border = '2px solid yellow';
                this.formAdd.style.borderRadius = '10px';
                this.formAdd.style.display = 'flex';
                this.formAdd.style.flexDirection = "column";
                this.formAdd.style.padding = '20px';
                this.formAdd.style.textAlign = 'center';
                this.formAdd.style.backgroundColor = 'rgb(0,128,128, 0.9)';
                this.formAdd.style.position = 'absolute';
                this.formAdd.style.left = '25%';
                this.formAdd.style.top = '30px';

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

                let addMusic = document.createElement('input');
                addMusic.type = 'submit';
                addMusic.value = 'Edit music';
                addMusic.setAttribute('name', 'btnAdd');
                addMusic.id = 'edit';
                addMusic.style.width = '30%';
                addMusic.style.margin = '10px auto';
                addMusic.style.fontSize = '24px';
                addMusic.style.cursor = 'pointer';

                this.formAdd.append(modalMusicTitle, inputMusicTitle, inputMusicDesc, inputMusicGente, inputMusicPerformer, inputMusicAlbum, addMusic);
                break;
            case 'edit-movie':
                this.formAdd.style.display = 'block';
                this.formAdd.setAttribute('name', 'Movie');
                this.formAdd.style.width = '50%';
                this.formAdd.style.border = '2px solid yellow';
                this.formAdd.style.borderRadius = '10px';
                this.formAdd.style.display = 'flex';
                this.formAdd.style.flexDirection = "column";
                this.formAdd.style.padding = '20px';
                this.formAdd.style.textAlign = 'center';
                this.formAdd.style.backgroundColor = 'rgb(0,128,128, 0.9)';
                this.formAdd.style.position = 'absolute';
                this.formAdd.style.left = '25%';
                this.formAdd.style.top = '30px';

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

                let inputMovieDirector = document.createElement('input');
                inputMovieDirector.type = "text";
                inputMovieDirector.setAttribute('placeholder', 'Director');
                inputMovieDirector.setAttribute('name', 'director');
                inputMovieDirector.id = "actors";
                inputMovieDirector.style.margin = '10px 0';
                inputMovieDirector.style.width = '100%';
                inputMovieDirector.style.fontSize = '24px';

                let inputMovieActors = document.createElement('input');
                inputMovieActors.type = "text";
                inputMovieActors.setAttribute('placeholder', 'Actors');
                inputMovieActors.setAttribute('name', 'actors');
                inputMovieActors.id = "actors";
                inputMovieActors.style.margin = '10px 0';
                inputMovieActors.style.width = '100%';
                inputMovieActors.style.fontSize = '24px';

                let addMovie = document.createElement('input');
                addMovie.type = 'submit';
                addMovie.value = 'Edit movie';
                addMovie.setAttribute('name', 'btnAdd');
                addMovie.id = 'edit';
                addMovie.style.width = '30%';
                addMovie.style.margin = '10px auto';
                addMovie.style.fontSize = '24px';
                addMovie.style.cursor = 'pointer';

                this.formAdd.append(modalMovieTitle, inputMovieTitle, inputMovieDesc, inputMovieGente, inputMovieDirector, inputMovieActors, addMovie);
                break;
            case 'edit-book':
                this.formAdd.style.display = 'block';
                this.formAdd.setAttribute('name', 'Book');
                this.formAdd.style.width = '50%';
                this.formAdd.style.border = '2px solid yellow';
                this.formAdd.style.borderRadius = '10px';
                this.formAdd.style.display = 'flex';
                this.formAdd.style.flexDirection = "column";
                this.formAdd.style.padding = '20px';
                this.formAdd.style.textAlign = 'center';
                this.formAdd.style.backgroundColor = 'rgb(0,128,128, 0.9)';
                this.formAdd.style.position = 'absolute';
                this.formAdd.style.left = '25%';
                this.formAdd.style.top = '30px';

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

                let addBook = document.createElement('input');
                addBook.type = 'submit';
                addBook.value = 'Edit book';
                addBook.setAttribute('name', 'btnAdd');
                addBook.id = 'edit';
                addBook.style.width = '30%';
                addBook.style.margin = '10px auto';
                addBook.style.fontSize = '24px';
                addBook.style.cursor = 'pointer';

                this.formAdd.append(modalBookTitle, inputBookTitle, inputBookDesc, inputBookGente, inputBookAuthors, addBook);
                break;
            default:
                break;
        }
    }
    filingFormAdd = (item: BasicItem) => {
        this.formAdd.setAttribute('data-id', `${item.id}`);
        let form = document.forms[0];
        console.log(form);
        let formInputs = document.getElementsByTagName('input');
        switch (item.type) {
            case DataItemType.Book:
                formInputs[0].value = item.title;
                formInputs[1].value = item.desc;
                formInputs[2].value = (item as BookItem).gente;
                formInputs[3].value = (item as BookItem).authors;
                // form.elements.title.value = item.title;
                // form.elements.desc.value = item.desc;
                // form.elements.gente.value = (item as BookItem).gente;
                // form.elements.authors.value = (item as BookItem).authors;
                break;
            case DataItemType.Game:
                formInputs[0].value = item.title;
                formInputs[1].value = item.desc;
                formInputs[2].value = (item as GameItem).gente;
                formInputs[3].value = (item as GameItem).platform;
                // form.elements.title.value = item.title;
                // form.elements.desc.value = item.desc;
                // form.elements.gente.value = (item as GameItem).gente;
                // form.elements.platform.value = (item as GameItem).platform;
                break;
            case DataItemType.Movie:
                formInputs[0].value = item.title;
                formInputs[1].value = item.desc;
                formInputs[2].value = (item as MovieItem).gente;
                formInputs[3].value = (item as MovieItem).director;
                formInputs[4].value = (item as MovieItem).actors;
                // form.elements.title.value = item.title;
                // form.elements.desc.value = item.desc;
                // form.elements.gente.value = (item as MovieItem).gente;
                // form.elements.director.value = (item as MovieItem).director;
                // form.elements.actors.value = (item as MovieItem).actors;
                break;
            case DataItemType.Music:
                formInputs[0].value = item.title;
                formInputs[1].value = item.desc;
                formInputs[2].value = (item as MovieItem).gente;
                formInputs[3].value = (item as MusicItem).performer;
                formInputs[4].value = (item as MusicItem).album;
                // form.elements.title.value = item.title;
                // form.elements.desc.value = item.desc;
                // form.elements.gente.value = (item as MusicItem).gente;
                // form.elements.performer.value = (item as MusicItem).performer;
                // form.elements.album.value = (item as MusicItem).album;
                break;
            default:
                break;
        }
    }
    closeModalAddItem = (event: Event) => {
        if ((event.target as HTMLElement)?.id === 'btn-add' || (event.target as HTMLElement)?.id === 'edit') {
            this.formAdd.style.display = 'none';
        }
    }
    bindFilingFormAddGetItemsById(handler: (id: string) => void) {
        this.divDesc.addEventListener('click', (event: Event) => {
            let dataId = (event.target as HTMLElement).parentElement?.dataset.id;
            let id = (event.target as Element).id;
            if (id === 'edit-book' || id === 'edit-game' || id === 'edit-movie' || id === 'edit-music') {
                if (dataId) {
                    handler(dataId);
                }
            }
        });
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
        this.divMain.addEventListener('click', (event: Event) => {
            let id = (event.target as Element).id;
            let dataId = (event.target as HTMLElement).dataset.id;
            if (id) {
                handler(id);
            }
            if (dataId) {
                handler(dataId);
            }
        })
    }
    bindAddItem(handler: (item: BasicItem) => void) {
        this.formAdd.addEventListener('click', (event: Event) => {
            event.preventDefault();
            let id = (event.target as Element).id;
            let form = document.forms[0];
            let formInputs = document.getElementsByTagName('input');
            if (id) {
                if (id === 'btn-add') {
                    switch (form.name) {
                        case 'Game':
                            const itemGame = new Game(formInputs[0].value, formInputs[1].value, formInputs[2].value, formInputs[3].value);
                            //const itemGame = new Game(form.elements.title.value, form.elements.desc.value, form.elements.platform.value, form.elements.gente.value);
                            handler(itemGame);
                            break;
                        case 'Music':
                            const itemMusic = new Music(formInputs[0].value, formInputs[1].value, formInputs[2].value, formInputs[3].value, formInputs[4].value);
                            //const itemMusic = new Music(form.elements.title.value, form.elements.desc.value, form.elements.gente.value, form.elements.performer.value, form.elements.album.value);
                            handler(itemMusic);
                            break;
                        case 'Movie':
                            const itemMovie = new Movie(formInputs[0].value, formInputs[1].value, formInputs[2].value, formInputs[3].value, formInputs[4].value);
                            // const itemMovie = new Movie(form.elements.title.value, form.elements.desc.value, form.elements.gente.value, form.elements.director.value, form.elements.actors.value);
                            handler(itemMovie);
                            break;
                        case 'Book':
                            const itemBook = new Book(formInputs[0].value, formInputs[1].value, formInputs[2].value, formInputs[3].value);
                            // const itemBook = new Book(form.elements.title.value, form.elements.desc.value, form.elements.gente.value, form.elements.authors.value);
                            handler(itemBook);
                            break;
                        default:
                            break;
                    }

                }
            }
        });
    }
    bindDeleteItem(handler: (id: string, type: DataItemType) => void) {
        this.divDesc.addEventListener('click', (event: Event) => {
            if ((event.target as HTMLElement).id === 'delete') {
                let id = (event.target as HTMLElement).parentElement?.dataset.id;
                let type = (event.target as HTMLElement).parentElement?.dataset.type;
                if (id) {
                    handler(id, (type as DataItemType));
                    this.resetDesclist();
                }
            }
        });
    }
    bindEditItem(handler: (item: BasicItem) => void) {
        this.formAdd.addEventListener('click', (event: Event) => {
            event.preventDefault();
            let id = (event.target as Element).id;
            let form = document.forms[0];
            let formInputs = document.getElementsByTagName('input');
            let dataId = form.dataset.id;
            if (id) {
                if (id === 'edit') {
                    if (dataId) {
                        switch (form.name) {
                            case 'Game':
                                const itemGame: GameItem = {
                                    id: dataId,
                                    title: formInputs[0].value,
                                    desc: formInputs[1].value,
                                    gente: formInputs[2].value,
                                    platform: formInputs[3].value,
                                    type: DataItemType.Game
                                    // title: form.elements.title.value,
                                    // desc: form.elements.desc.value,
                                    // type: DataItemType.Game,
                                    // gente: form.elements.gente.value,
                                    // platform: form.elements.platform.value
                                };
                                handler(itemGame);
                                break;
                            case 'Music':
                                const itemMusic: MusicItem = {
                                    id: dataId,
                                    title: formInputs[0].value,
                                    desc: formInputs[1].value,
                                    gente: formInputs[2].value,
                                    performer: formInputs[3].value,
                                    album: formInputs[4].value,
                                    type: DataItemType.Music,
                                    // title: form.elements.title.value,
                                    // desc: form.elements.desc.value,
                                    // type: DataItemType.Music,
                                    // gente: form.elements.gente.value,
                                    // performer: form.elements.performer.value,
                                    // album: form.elements.album.value
                                };
                                handler(itemMusic);
                                break;
                            case 'Movie':
                                const itemMovie: MovieItem = {
                                    id: dataId,
                                    title: formInputs[0].value,
                                    desc: formInputs[1].value,
                                    gente: formInputs[2].value,
                                    director: formInputs[3].value,
                                    actors: formInputs[4].value,
                                    type: DataItemType.Movie,
                                    // title: form.elements.title.value,
                                    // desc: form.elements.desc.value,
                                    // type: DataItemType.Movie,
                                    // gente: form.elements.gente.value,
                                    // director: form.elements.director.value,
                                    // actors: form.elements.actors.value
                                };
                                handler(itemMovie);
                                break;
                            case 'Book':
                                const itemBook: BookItem = {
                                    id: dataId,
                                    title: formInputs[0].value,
                                    desc: formInputs[1].value,
                                    gente: formInputs[2].value,
                                    authors: formInputs[3].value,
                                    type: DataItemType.Book
                                    // title: form.elements.title.value,
                                    // desc: form.elements.desc.value,
                                    // type: DataItemType.Book,
                                    // gente: form.elements.gente.value,
                                    // authors: form.elements.authors.value
                                };
                                handler(itemBook);
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
        });
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
    resentFormAdd() {
        while (this.formAdd.firstChild) {
            this.formAdd.removeChild(this.formAdd.firstChild);
        }
    }
}

