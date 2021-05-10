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
    bindMoveToFieldInProgress: (handler: (id: string) => void) => void;
    bindMoveToFieldDone: (handler: (id: string) => void) => void;
    bindRemoveTask: (handler: (id: string) => void) => void;
    resetToDolist: () => void;
}