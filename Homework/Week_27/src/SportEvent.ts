import cuid from "cuid";
import {DataItemInterface} from "./interface/itemInterface"
import {DataItemType} from "./enum/typeEnum"

export class DataSportEventItem implements DataItemInterface{
    private  _id : string;
    private title : string;
    desc : string;
    tags : string[]
    readonly type : DataItemType;
    participants : string[];
    timeEventStart : Date;

    constructor(Title : string, Desc : string, Participants : string[], TimeEvent : Date){
        this._id = cuid();
        this.title = Title;
        this.desc = Desc;
        this.tags = [];
        this.type = DataItemType.SportEvent;
        this.participants = Participants;
        this.timeEventStart = TimeEvent;
    }
    get id() : string{
        return this._id;
    };

    get Type(){
        return this.type;
    }

    get Title(){
        return this.title;
    }
    addTag(tag : string) : void{
        if(!this.tags.find(x=>x==tag)){
            this.tags.push(tag);
        }
    }
}