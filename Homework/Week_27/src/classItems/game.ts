import cuid from "cuid";
import { GameItem } from "../interface/gameItemInterface"
import { DataItemType } from "../enum/typeEnum"

export class Game implements GameItem {
    id: string;
    title: string;
    desc: string;
    readonly type: DataItemType.Game;
    platform: string;
    genre: string;

    constructor(Title: string, Desc: string, Platform: "xbox" | "ps" | "pc", Genre: string) {
        this.id = cuid();
        this.title = Title;
        this.desc = Desc;
        this.type = DataItemType.Game;
        this.platform = Platform;
        this.genre = Genre;
    }
}