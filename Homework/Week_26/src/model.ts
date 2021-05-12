import { TaskStatus } from "./enum/taskStatus";
import { RepoInterface } from "./interface/repoInterface";
import { TaskInterface } from "./interface/taskInterface";

export class Repo implements RepoInterface {
    tasks: TaskInterface[];
    onTasksListChanged!: (tasks: TaskInterface[]) => void;
    constructor() {
        let arrTasks = localStorage.getItem("tasks");
        if (arrTasks) {
            this.tasks = JSON.parse(arrTasks);
        } else {
            this.tasks = [];
        }
    }
    addTask = (task: TaskInterface) => {
        this.tasks.push(task);
        this._commit(this.tasks);
        return true;
    }
    // changeTask = (task: TaskInterface) => {
    //     this.tasks.forEach(element => {
    //         if (element.id === task.id) {
    //             element.title = task.title;
    //             element.desc = task.desc;
    //             element.deadline = task.deadline;
    //             element.type = task.type;
    //         }
    //     });
    //     this._commit(this.tasks);
    //     return true;
    // }
    changeType = (id: string, type: TaskStatus) => {
        this.tasks.forEach(element => {
            if (element.id == id) {
                element.type = type;
            }
        });
        this._commit(this.tasks);
    }
    moveToFieldInProgress = (id: string) => {
        this.tasks.forEach(element => {
            if (element.id == id) {
                element.type = TaskStatus.InProgress;
            }
        });
        this._commit(this.tasks);
    }
    moveToFieldDone = (id: string) => {
        this.tasks.forEach(element => {
            if (element.id == id) {
                element.type = TaskStatus.Done;
            }
        });
        this._commit(this.tasks);
    }
    removeTask = (id: string) => {
        //this.tasks.filter(element => element.id !== id);
        this.tasks.forEach((element, index) => {
            if (element.id === id) this.tasks.splice(index, 1);
        });
        this._commit(this.tasks);
    }
    bindTasksListChanged(callback: (tasks: TaskInterface[]) => void) {
        this.onTasksListChanged = callback;
    }
    _commit(tasks: TaskInterface[]) {
        this.onTasksListChanged(tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}
