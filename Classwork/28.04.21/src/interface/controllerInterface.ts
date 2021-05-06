import { ViewInterface } from "./viewInterface";
import { RepoInterface } from "./repoInterface";

export interface ControllerInterface {
    view: ViewInterface;
    repo: RepoInterface;
}