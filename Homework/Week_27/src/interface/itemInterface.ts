import {DataItemType} from "../enum/typeEnum"
export interface DataItemInterface{
    id : string;
    desc : string;
    tags : string[]
    readonly type : DataItemType;
}