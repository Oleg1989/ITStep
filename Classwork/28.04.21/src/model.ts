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
        console.log(this.tasks);
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
    bindTasksListChanged(callback: (tasks: TaskInterface[]) => void) {
        this.onTasksListChanged = callback;
    }
}
