import { RepoInterface } from "./interface/repoInterface";
import { TaskInterface } from "./interface/taskInterface";

export class Repo implements RepoInterface {
    tasks: TaskInterface[];
    constructor() {
        this.tasks = [];
    }
    getTasks = () => {
        return this.tasks;
    }
    changeTask = (task: TaskInterface) => {
        this.tasks.forEach(element => {
            if (element.id === task.id) {
                element.title = task.title;
                element.desc = task.desc;
                element.dedline = task.dedline;
                element.type = task.type;
            }
        });
        return true;
    }
    addTask = (task: TaskInterface) => {
        this.tasks.push(task);
        return true;
    }
}
