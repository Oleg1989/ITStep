import { TaskInterface } from "./taskInterface";
import { TaskStatus } from "../enum/taskStatus";

export interface RepoInterface {
    tasks: TaskInterface[];
    //changeTask: (task: TaskInterface) => boolean;
    addTask: (task: TaskInterface) => boolean;
    changeType: (id: string, type: TaskStatus) => void;
    bindTasksListChanged: (callback: (tasks: TaskInterface[]) => void) => void;
    onTasksListChanged: (tasks: TaskInterface[]) => void;
    moveToFieldInProgress: (id: string) => void;
    moveToFieldDone: (id: string) => void;
    removeTask: (id: string) => void;
}