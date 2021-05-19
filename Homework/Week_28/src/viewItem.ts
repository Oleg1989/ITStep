import { VeiwItemInterface } from "./interface/viewItemInteface";
import { BasicItem } from "./interface/basicItemInterface";
import { Book } from "./classItems/book";
import { Game } from "./classItems/game";
import { Movie } from "./classItems/movie";
import { Music } from "./classItems/music";

export class ViewItem implements VeiwItemInterface {
    divItem: HTMLElement;
    constructor() {
        this.divItem = document.createElement('div');
    }
    addItemContent = (item: BasicItem) => {
        this.divItem.style.backgroundColor = 'rgb(0,0,128,0.5)';
        this.divItem.id = item.id;
        this.divItem.style.color = 'white';
        this.divItem.style.margin = '5px';
        this.divItem.style.padding = '5px';
        this.divItem.style.cursor = 'pointer';
        this.divItem.textContent = `Type: ${item.type}; Title: ${item.title}`;

        return this.divItem;
    }
    addItemDescBook = (item: BasicItem) => {
        let divMain = document.createElement('div');
        divMain.style.margin = '5px';
        divMain.setAttribute('data-id', `${item.id}`);
        divMain.style.backgroundColor = 'rgb(0,128,0, 0.3)';

        let divTitle = document.createElement('div');
        divTitle.textContent = `Title: ${(item as Book).title}`;
        divTitle.style.margin = '5px';

        let divDesc = document.createElement('div');
        divDesc.textContent = `Description: ${(item as Book).desc}`;
        divDesc.style.margin = '5px';

        let divGenre = document.createElement('div');
        divGenre.textContent = ` Gente: ${(item as Book).genre}`;
        divGenre.style.margin = '5px';

        let divAuthors = document.createElement('div');
        divAuthors.textContent = `Authors: ${(item as Book).authors}`;
        divAuthors.style.margin = '5px';

        let buttonEdit = document.createElement('button');
        buttonEdit.id = 'edit';
        buttonEdit.textContent = 'Edit';
        buttonEdit.style.backgroundColor = 'orange';
        buttonEdit.style.width = '60px';
        buttonEdit.style.margin = '5px';

        let buttonDelete = document.createElement('button');
        buttonDelete.id = 'edit';
        buttonDelete.textContent = 'Delete';
        buttonDelete.style.backgroundColor = 'red';
        buttonDelete.style.width = '60px';
        buttonDelete.style.margin = '5px';

        divMain.append(divTitle, divDesc, divGenre, divAuthors, buttonEdit, buttonDelete);
        return divMain;
    }
    addItemDescGame = (item: BasicItem) => {
        let divMain = document.createElement('div');
        divMain.style.margin = '5px';
        divMain.setAttribute('data-id', `${item.id}`);
        divMain.style.backgroundColor = 'rgb(0,128,0, 0.3)';

        let divTitle = document.createElement('div');
        divTitle.textContent = `Title: ${(item as Game).title}`;
        divTitle.style.margin = '5px';

        let divDesc = document.createElement('div');
        divDesc.textContent = `Description: ${(item as Game).desc}`;
        divDesc.style.margin = '5px';

        let divGenre = document.createElement('div');
        divGenre.textContent = ` Gente: ${(item as Game).genre}`;
        divGenre.style.margin = '5px';

        let divPlatform = document.createElement('div');
        divPlatform.textContent = `Platform: ${(item as Game).platform}`;
        divPlatform.style.margin = '5px';

        let buttonEdit = document.createElement('button');
        buttonEdit.id = 'edit';
        buttonEdit.textContent = 'Edit';
        buttonEdit.style.backgroundColor = 'orange';
        buttonEdit.style.width = '60px';
        buttonEdit.style.margin = '5px';

        let buttonDelete = document.createElement('button');
        buttonDelete.id = 'edit';
        buttonDelete.textContent = 'Delete';
        buttonDelete.style.backgroundColor = 'red';
        buttonDelete.style.width = '60px';
        buttonDelete.style.margin = '5px';

        divMain.append(divTitle, divDesc, divGenre, divPlatform, buttonEdit, buttonDelete);
        return divMain;
    }
    addItemDescMovie = (item: BasicItem) => {
        let divMain = document.createElement('div');
        divMain.style.margin = '5px';
        divMain.setAttribute('data-id', `${item.id}`);
        divMain.style.backgroundColor = 'rgb(0,128,0, 0.3)';

        let divTitle = document.createElement('div');
        divTitle.textContent = `Title: ${(item as Movie).title}`;
        divTitle.style.margin = '5px';

        let divDesc = document.createElement('div');
        divDesc.textContent = `Description: ${(item as Movie).desc}`;
        divDesc.style.margin = '5px';

        let divGenre = document.createElement('div');
        divGenre.textContent = ` Gente: ${(item as Movie).genre}`;
        divGenre.style.margin = '5px';

        let divDirector = document.createElement('div');
        divDirector.textContent = `Authors: ${(item as Movie).director}`;
        divDirector.style.margin = '5px';

        let divActors = document.createElement('div');
        divActors.textContent = `Actors: ${(item as Movie).actors}`;
        divActors.style.margin = '5px';

        let buttonEdit = document.createElement('button');
        buttonEdit.id = 'edit';
        buttonEdit.textContent = 'Edit';
        buttonEdit.style.backgroundColor = 'orange';
        buttonEdit.style.width = '60px';
        buttonEdit.style.margin = '5px';

        let buttonDelete = document.createElement('button');
        buttonDelete.id = 'edit';
        buttonDelete.textContent = 'Delete';
        buttonDelete.style.backgroundColor = 'red';
        buttonDelete.style.width = '60px';
        buttonDelete.style.margin = '5px';

        divMain.append(divTitle, divDesc, divGenre, divActors, buttonEdit, buttonDelete);
        return divMain;
    }
    addItemDescMusic = (item: BasicItem) => {
        let divMain = document.createElement('div');
        divMain.style.margin = '5px';
        divMain.setAttribute('data-id', `${item.id}`);
        divMain.style.backgroundColor = 'rgb(0,128,0, 0.3)';

        let divTitle = document.createElement('div');
        divTitle.textContent = `Title: ${(item as Music).title}`;
        divTitle.style.margin = '5px';

        let divDesc = document.createElement('div');
        divDesc.textContent = `Description: ${(item as Music).desc}`;
        divDesc.style.margin = '5px';

        let divGenre = document.createElement('div');
        divGenre.textContent = ` Gente: ${(item as Music).genre}`;
        divGenre.style.margin = '5px';

        let divPerformer = document.createElement('div');
        divPerformer.textContent = `Performer: ${(item as Music).performer}`;
        divPerformer.style.margin = '5px';

        let divAlbum = document.createElement('div');
        divAlbum.textContent = `Album: ${(item as Music).album}`;
        divAlbum.style.margin = '5px';

        let buttonEdit = document.createElement('button');
        buttonEdit.id = 'edit';
        buttonEdit.textContent = 'Edit';
        buttonEdit.style.backgroundColor = 'orange';
        buttonEdit.style.width = '60px';
        buttonEdit.style.margin = '5px';

        let buttonDelete = document.createElement('button');
        buttonDelete.id = 'edit';
        buttonDelete.textContent = 'Delete';
        buttonDelete.style.backgroundColor = 'red';
        buttonDelete.style.width = '60px';
        buttonDelete.style.margin = '5px';

        divMain.append(divTitle, divDesc, divGenre, divPerformer, divAlbum, buttonEdit, buttonDelete);
        return divMain;
    }
}