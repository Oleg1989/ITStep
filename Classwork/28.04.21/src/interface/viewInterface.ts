import { TaskInterface } from "./taskInterface";

export interface ViewInterface {
    appRoot: HTMLElement;
    mainTitle: HTMLElement;
    divMain: HTMLElement;
    divPlanned: HTMLElement;
    divInProgress: HTMLElement;
    divDone: HTMLElement;
    viewDivMain: (tasks: TaskInterface[]) => void;
    viewTask: (task: HTMLElement) => void;
}