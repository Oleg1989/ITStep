import { TaskInterface } from "./taskInterface";
import { TaskStatus } from "../enum/taskStatus";

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
    bindChangeType: (handler: (id: string, type: TaskStatus) => void) => void;
    resetToDolist: () => void;
}