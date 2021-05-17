import { BasicItem } from "./basicItemInterface";
import { DataItemType } from "../enum/typeEnum"

export interface MovieItem extends BasicItem {
    readonly type: DataItemType.Movie;
    genre: string;
    director: string;
    actors: string;
}