import cuid from "cuid";
import { DataItemInterface } from "./interface/itemInterface"
import { DataItemType } from "./enum/typeEnum"

export class DataMusicItem implements DataItemInterface {
    private _id: string;
    private title: string;
    desc: string;
    tags: string[]
    readonly type: DataItemType;
    genre: string[];
    performer: string[];
    duration: Date;

    constructor(Title: string, Desc: string, Genre: string[], Performer: string[], Duration: Date) {
        this._id = cuid();
        this.title = Title;
        this.desc = Desc;
        this.tags = [];
        this.type = DataItemType.Music;
        this.genre = Genre;
        this.performer = Performer;
        this.duration = Duration;
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