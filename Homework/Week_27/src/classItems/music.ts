import cuid from "cuid";
import { MusicItem } from "../interface/musicItemInterface"
import { DataItemType } from "../enum/typeEnum"

export class Music implements MusicItem {
    id: string;
    title: string;
    desc: string;
    readonly type: DataItemType.Music;
    genre: string;
    performer: string;
    album: string;

    constructor(Title: string, Desc: string, Genre: string, Performer: string, Album: string) {
        this.id = cuid();
        this.title = Title;
        this.desc = Desc;
        this.type = DataItemType.Music;
        this.genre = Genre;
        this.performer = Performer;
        this.album = Album;
    }
}