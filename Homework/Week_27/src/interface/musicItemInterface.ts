import { BasicItem } from "./basicItemInterface";
import { DataItemType } from "../enum/typeEnum"

export interface MusicItem extends BasicItem {
    readonly type: DataItemType.Music;
    genre: string;
    performer: string;
    album: string;
}