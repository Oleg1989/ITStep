import { DataItemType } from "../enum/typeEnum"

export interface BasicItem {
    id: string;
    title: string;
    desc: string;
    readonly type: DataItemType;
}