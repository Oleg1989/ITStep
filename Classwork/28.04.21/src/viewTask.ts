import { ViewTaskInterface } from "../src/interface/viewTaskInterfase";
import { TaskInterface } from "../src/interface/taskInterface";

export class VeiwTask implements ViewTaskInterface {
    divTask: HTMLElement;
    divTitle: HTMLElement;
    divDesk: HTMLElement;
    divDedline: HTMLElement;
    button: HTMLElement;
    constructor() {
        this.divTask = document.createElement('div');
        this.divTask.style.border = '1px solid blue';
        this.divTask.style.margin = '10px';
        this.divTask.style.padding = '10px';
        this.divTask.style.borderRadius = '5px';
        this.divTask.style.backgroundColor = 'rgb(0,0,255, 0.1)';

        this.divTitle = document.createElement('div');
        this.divDesk = document.createElement('div');
        this.divDedline = document.createElement('div');
        this.button = document.createElement('button');

        this.divTask.append(this.divTitle, this.divDesk, this.divDedline, this.button);
    }
    TaskAddContent = (task: TaskInterface) => {
        this.divTask.id = task.id;
        this.divTask.className = task.type;
        this.divTitle.textContent = `Title: ${task.title}`;
        this.divDesk.textContent = `Description: ${task.desc}`;
        this.divDedline.textContent = `Deadline: ${task.deadline}`;

        return this.divTask;
    }
}