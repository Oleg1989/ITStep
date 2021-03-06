import { BasicItem } from "./basicItemInterface";
import { DataItemType } from "../enum/typeEnum"

export interface MusicItem extends BasicItem {
    type: DataItemType.Music;
    gente: string;
    performer: string;
    album: string;
}