import { BasicItem } from "./basicItemInterface";
import { DataItemType } from "../enum/typeEnum"

export interface BookItem extends BasicItem {
    genre: string;
    authors: string;
    readonly type: DataItemType.Book;
}