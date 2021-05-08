import { ControllerInterface } from "./interface/controllerInterface";
import { ViewInterface } from "./interface/viewInterface";
import { RepoInterface } from "./interface/repoInterface";
import { TaskInterface } from "./interface/taskInterface";

export class Controller implements ControllerInterface {
    view: ViewInterface;
    repo: RepoInterface;
    constructor(view: ViewInterface, repo: RepoInterface) {
        this.view = view;
        this.repo = repo;
        this.onTasksListChanged(this.repo.tasks);
        this.view.bindAddTask(this.handleAddTask);
        this.repo.bindTasksListChanged(this.onTasksListChanged);
    }
    onTasksListChanged = (tasks: TaskInterface[]) => {
        this.view.viewDivMain(tasks);
    }
    handleAddTask = (task: TaskInterface) => {
        this.repo.addTask(task);
    };
}
