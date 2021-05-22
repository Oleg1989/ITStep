import { BasicItem } from "./basicItemInterface";
import { DataItemType } from "../enum/typeEnum"

export interface BookItem extends BasicItem {
    gente: string;
    authors: string;
    type: DataItemType.Book;
}