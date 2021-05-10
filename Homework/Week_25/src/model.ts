import { TaskStatus } from "./enum/taskStatus";
import { RepoInterface } from "./interface/repoInterface";
import { TaskInterface } from "./interface/taskInterface";

export class Repo implements RepoInterface {
    tasks: TaskInterface[];
    onTasksListChanged!: (tasks: TaskInterface[]) => void;
    constructor() {
        this.tasks = [];
    }
    addTask = (task: TaskInterface) => {
        this.tasks.push(task);
        this.onTasksListChanged(this.tasks);
        return true;
    }
    changeTask = (task: TaskInterface) => {
        this.tasks.forEach(element => {
            if (element.id === task.id) {
                element.title = task.title;
                element.desc = task.desc;
                element.deadline = task.deadline;
                element.type = task.type;
            }
        });
        this.onTasksListChanged(this.tasks);
        return true;
    }
    moveToFieldInProgress = (id: string) => {
        this.tasks.forEach(element => {
            if (element.id == id) {
                element.type = TaskStatus.InProgress;
            }
        });
        this.onTasksListChanged(this.tasks);
    }
    moveToFieldDone = (id: string) => {
        this.tasks.forEach(element => {
            if (element.id == id) {
                element.type = TaskStatus.Done;
            }
        });
        this.onTasksListChanged(this.tasks);
    }
    removeTask = (id: string) => {
        //this.tasks.filter(element => element.id !== id);
        this.tasks.forEach((element, index) => {
            if (element.id === id) this.tasks.splice(index, 1);
        });
        this.onTasksListChanged(this.tasks);
    }
    bindTasksListChanged(callback: (tasks: TaskInterface[]) => void) {
        this.onTasksListChanged = callback;
    }
}
