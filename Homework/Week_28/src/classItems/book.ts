import cuid from "cuid";
import { BookItem } from "../interface/bookItemInterface"
import { DataItemType } from "../enum/typeEnum"

export class Book implements BookItem {
    id: string;
    title: string;
    desc: string;
    readonly type: DataItemType.Book;
    gente: string;
    authors: string;

    constructor(Title: string, Desc: string, Genre: string, Authors: string) {
        this.id = cuid();
        this.title = Title;
        this.desc = Desc;
        this.type = DataItemType.Book;
        this.gente = Genre;
        this.authors = Authors;
    }
}