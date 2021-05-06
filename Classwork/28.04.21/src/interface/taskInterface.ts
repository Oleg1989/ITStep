import { TaskStatus } from "../enum/taskStatus";

export interface TaskInterface {
    id: string;
    title: string;
    desc: string;
    dedline: Date;
    type: TaskStatus;
}