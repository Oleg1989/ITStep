import { TaskInterface } from "./taskInterface";

export interface ViewTaskInterface {
    divTask: HTMLElement;
    divTitle: HTMLElement;
    divDesk: HTMLElement;
    divDedline: HTMLElement;
    TaskAddContent: (task: TaskInterface) => HTMLElement;
}