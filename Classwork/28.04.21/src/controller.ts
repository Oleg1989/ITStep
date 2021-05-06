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
    }
    onTasksListChanged = (tasks: TaskInterface[]) => {
        this.view.viewDivMain(tasks);
    }
}
