import { ControllerInterface } from "./interface/controllerInterface";
import { ViewInterface } from "./interface/viewInterface";
import { RepoInterface } from "./interface/repoInterface";
import { TaskInterface } from "./interface/taskInterface";
import { TaskStatus } from "./enum/taskStatus";

export class Controller implements ControllerInterface {
    view: ViewInterface;
    repo: RepoInterface;
    constructor(view: ViewInterface, repo: RepoInterface) {
        this.view = view;
        this.repo = repo;
        this.onTasksListChanged(this.repo.tasks);
        this.view.bindAddTask(this.handleAddTask);
        this.view.bindMoveToFieldInProgress(this.handleMoveToFieldInProgress);
        this.view.bindMoveToFieldDone(this.handleMoveToFieldDone);
        this.view.bindRemoveTask(this.handleRemoveTask);
        this.view.bindChangeType(this.handlerChangeType);
        this.repo.bindTasksListChanged(this.onTasksListChanged);
    }
    onTasksListChanged = (tasks: TaskInterface[]) => {
        this.view.viewDivMain(tasks);
    }
    handleAddTask = (task: TaskInterface) => {
        this.repo.addTask(task);
    };
    handleMoveToFieldInProgress = (id: string) => {
        this.repo.moveToFieldInProgress(id);
    }
    handleMoveToFieldDone = (id: string) => {
        this.repo.moveToFieldDone(id);
    }
    handleRemoveTask = (id: string) => {
        this.repo.removeTask(id);
    }
    handlerChangeType = (id: string, type: TaskStatus) => {
        this.repo.changeType(id, type);
    }
}
