import cuid from "cuid";
import { DataItemInterface } from "./interface/itemInterface"
import { DataItemType } from "./enum/typeEnum"

export class DataMovieItem implements DataItemInterface {
    private _id: string;
    private title: string;
    desc: string;
    tags: string[]
    readonly type: DataItemType;
    genre: string[];
    actors: string[];

    constructor(Title: string, Desc: string, Genre: string[], Actors: string[]) {
        this._id = cuid();
        this.title = Title;
        this.desc = Desc;
        this.tags = [];
        this.type = DataItemType.Movie;
        this.genre = Genre;
        this.actors = Actors;
    }
    get id(): string {
        return this._id;
    };

    get Type() {
        return this.type;
    }

    get Title() {
        return this.title;
    }
    addTag(tag: string): void {
        if (!this.tags.find(x => x == tag)) {
            this.tags.push(tag);
        }
    }
}