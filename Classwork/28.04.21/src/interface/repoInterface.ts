import { TaskInterface } from "./taskInterface";

export interface RepoInterface {
    tasks: TaskInterface[];
    changeTask: (task: TaskInterface) => boolean;
    addTask: (task: TaskInterface) => boolean;
    bindTasksListChanged: (callback: (tasks: TaskInterface[]) => void) => void;
    onTasksListChanged: (tasks: TaskInterface[]) => void;
    moveToFieldInProgress: (id: string) => void;
    moveToFieldDone: (id: string) => void;
    removeTask: (id: string) => void;
}