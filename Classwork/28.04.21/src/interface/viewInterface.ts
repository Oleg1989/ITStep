import { ControllerInterface } from "./controllerInterface";
import { TaskInterface } from "./taskInterface";

export interface ViewInterface {
    appRoot: HTMLElement;
    divHeader: HTMLElement;
    mainTitle: HTMLElement;
    buttonAddTask: HTMLElement;
    divMain: HTMLElement;
    divPlanned: HTMLElement;
    divInProgress: HTMLElement;
    divDone: HTMLElement;
    form: HTMLElement;
    viewDivMain: (tasks: TaskInterface[]) => void;
    viewTask: (task: HTMLElement) => void;
    bindAddTask: (handler: (task: TaskInterface) => void) => void;
    resetToDolist: () => void;
}