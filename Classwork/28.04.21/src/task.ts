import { TaskStatus } from "../src/enum/taskStatus";
import { TaskInterface } from "../src/interface/taskInterface";

export class Task implements TaskInterface {
    id: string;
    title: string;
    desc: string;
    deadline: Date;
    type: TaskStatus;
    constructor(params: TaskInterface) {
        this.id = params.id;
        this.title = params.title;
        this.desc = params.desc;
        this.deadline = params.deadline;
        this.type = TaskStatus.Planned;
    }
}