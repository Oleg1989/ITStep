import { BasicItem } from "./basicItemInterface";
import { DataItemType } from "../enum/typeEnum"

export interface MovieItem extends BasicItem {
    type: DataItemType.Movie;
    gente: string;
    director: string;
    actors: string;
}