import { TaskInterface } from "./taskInterface";

export interface RepoInterface {
    tasks: TaskInterface[];
    //getTasks: () => TaskInterface[];
    changeTask: (task: TaskInterface) => boolean;
    addTask: (task: TaskInterface) => boolean;
}