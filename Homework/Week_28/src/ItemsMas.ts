import { BasicItem } from "./interface/basicItemInterface"
import { DataItemType } from "./enum/typeEnum"
import { DataItemsArrayInterface } from "./interface/dataItemsAeeayInterface";
import { GameItem } from "./interface/gameItemInterface";
import { MusicItem } from "./interface/musicItemInterface";
import { MovieItem } from "./interface/movieItemInterface";
import { BookItem } from "./interface/bookItemInterface";

export class DataItemsArray implements DataItemsArrayInterface {
    items: BasicItem[];
    constructor() {
        let arrItems = localStorage.getItem("items");
        if (arrItems) {
            this.items = JSON.parse(arrItems);
        } else {
            this.items = [];
        }
    }
    onItemsListChanged!: (items: BasicItem[]) => void;
    addItem(item: BasicItem): void {
        if (!this.items.find(x => x == item)) {
            this.items.push(item);
            this._commit(this.items);
        }
        else {
            throw new Error("Element is not exist!!!");
        }
    }
    deleteItem(id: string, type: DataItemType): void {
        this.items = this.items.filter(element => element.id !== id);
        this.onItemsListChanged(this.getItemsByType(type));
        this._commit(this.items);
    }
    editItem(item: BasicItem): void {
        this.items.forEach(element => {
            if (element.id === item.id) {
                switch (item.type) {
                    case DataItemType.Game:
                        element.title = item.title;
                        element.desc = item.desc;
                        (element as GameItem).platform = (item as GameItem).platform;
                        (element as GameItem).gente = (item as GameItem).gente;
                        break;
                    case DataItemType.Music:
                        element.title = item.title;
                        element.desc = item.desc;
                        (element as MusicItem).gente = (item as MusicItem).gente;
                        (element as MusicItem).performer = (item as MusicItem).performer;
                        (element as MusicItem).album = (item as MusicItem).album;
                        break;
                    case DataItemType.Movie:
                        element.title = item.title;
                        element.desc = item.desc;
                        (element as MovieItem).gente = (item as MovieItem).gente;
                        (element as MovieItem).director = (item as MovieItem).director;
                        (element as MovieItem).actors = (item as MovieItem).actors;
                        break;
                    case DataItemType.Book:
                        element.title = item.title;
                        element.desc = item.desc;
                        (element as BookItem).gente = (item as BookItem).gente;
                        (element as BookItem).authors = (item as BookItem).authors;
                        break;
                    default:
                        break;
                }
            }
        });
        this._commit(this.items);
    }
    get Items(): BasicItem[] {
        return this.items;
    }

    getItemsByType(type: DataItemType): BasicItem[] {
        return this.items.filter(x => x.type == type);
    }

    getItemById(id: string): BasicItem | undefined {
        const item = this.items.find(x => x.id == id);
        if (item) {
            return item;
        }
    }
    _commit(items: BasicItem[]) {
        localStorage.setItem("items", JSON.stringify(items));
    }
    bindItemsListChanged = (handler: (items: BasicItem[]) => void) => {
        this.onItemsListChanged = handler;
    }

}