import { ViewInterface } from "./viewInterface";
import { RepoInterface } from "./repoInterface";
import { TaskInterface } from "./taskInterface";

export interface ControllerInterface {
    view: ViewInterface;
    repo: RepoInterface;
    onTasksListChanged: (tasks: TaskInterface[]) => void;
    handleAddTask: (task: TaskInterface) => void;
}