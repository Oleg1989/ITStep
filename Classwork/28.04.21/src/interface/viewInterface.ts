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
    viewDivMain: (tasks: TaskInterface[]) => void;
    viewTask: (task: HTMLElement) => void;
}