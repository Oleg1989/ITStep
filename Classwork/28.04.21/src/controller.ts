import { ControllerInterface } from "./interface/controllerInterface";
import { ViewInterface } from "./interface/viewInterface";
import { RepoInterface } from "./interface/repoInterface";

export class Controller implements ControllerInterface {
    view: ViewInterface;
    repo: RepoInterface;
    constructor(view: ViewInterface, repo: RepoInterface) {
        this.view = view;
        this.repo = repo;
    }
}
