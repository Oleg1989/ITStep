import { TaskStatus } from "../src/enum/taskStatus";
import { TaskInterface } from "../src/interface/taskInterface";

export class Task implements TaskInterface {
    id: string;
    title: string;
    desc: string;
    dedline: Date;
    type: TaskStatus;
    constructor(params: TaskInterface) {
        this.id = params.id;
        this.title = params.title;
        this.desc = params.desc;
        this.dedline = params.dedline;
        this.type = TaskStatus.Planned;
    }
}