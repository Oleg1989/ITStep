import { BasicItem } from "./basicItemInterface";
import { DataItemType } from "../enum/typeEnum"

export interface GameItem extends BasicItem {
    gente: string;
    platform: string;
    readonly type: DataItemType.Game;
}