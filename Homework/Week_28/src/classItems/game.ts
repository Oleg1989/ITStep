import cuid from "cuid";
import { GameItem } from "../interface/gameItemInterface"
import { DataItemType } from "../enum/typeEnum"

export class Game implements GameItem {
    id: string;
    title: string;
    desc: string;
    type: DataItemType.Game;
    platform: string;
    gente: string;

    constructor(Title: string, Desc: string, Platform: string, Genre: string) {
        this.id = cuid();
        this.title = Title;
        this.desc = Desc;
        this.type = DataItemType.Game;
        this.platform = Platform;
        this.gente = Genre;
    }
}