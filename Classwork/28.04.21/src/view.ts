import { ViewInterface } from "./interface/viewInterface";
import { TaskInterface } from "./interface/taskInterface";
import { TaskStatus } from "./enum/taskStatus";
import { VeiwTask } from "./viewTask";


export class View implements ViewInterface {
    appRoot: HTMLElement;
    mainTitle: HTMLElement;
    divMain: HTMLElement;
    divPlanned: HTMLElement;
    divInProgress: HTMLElement;
    divDone: HTMLElement;
    constructor() {
        this.appRoot = document.createElement('div');
        this.appRoot.id = 'app-root';

        this.mainTitle = document.createElement('h1');
        this.mainTitle.textContent = 'To-do list';
        this.mainTitle.style.textAlign = 'center';

        this.divMain = document.createElement('div');
        this.divMain.id = 'main';
        this.divMain.style.width = '90%';
        this.divMain.style.margin = '20px auto';
        this.divMain.style.border = '4px solid black';
        this.divMain.style.display = 'flex';
        this.divMain.style.backgroundColor = 'rgb(0,0,0, 0.1)';

        this.divPlanned = document.createElement('div');
        this.divPlanned.id = 'planned';
        this.divPlanned.style.width = '30%';
        this.divPlanned.style.margin = '20px';
        this.divPlanned.style.padding = '10px';
        this.divPlanned.style.border = '2px solid red';
        this.divPlanned.style.backgroundColor = 'rgb(255,0,0,0.1)';

        let titlePlanned = document.createElement('h2');
        titlePlanned.textContent = 'Planned';
        titlePlanned.style.textAlign = 'center';
        titlePlanned.style.color = 'red';
        this.divPlanned.append(titlePlanned);


        this.divInProgress = document.createElement('div');
        this.divInProgress.id = 'in-progres';
        this.divInProgress.style.width = '30%';
        this.divInProgress.style.margin = '20px';
        this.divInProgress.style.padding = '10px';
        this.divInProgress.style.border = '2px solid orange';
        this.divInProgress.style.backgroundColor = '	rgb(255,165,0, 0.1)';

        let titleInProgress = document.createElement('h2');
        titleInProgress.textContent = 'In progress';
        titleInProgress.style.textAlign = 'center';
        titleInProgress.style.color = 'orange';
        this.divInProgress.append(titleInProgress);

        this.divDone = document.createElement('div');
        this.divDone.id = 'done';
        this.divDone.style.width = '30%';
        this.divDone.style.margin = '20px';
        this.divDone.style.padding = '10px';
        this.divDone.style.border = '2px solid green';
        this.divDone.style.backgroundColor = 'rgb(0,128,0, 0.1)';

        let titleDone = document.createElement('h2');
        titleDone.textContent = 'Done';
        titleDone.style.textAlign = 'center';
        titleDone.style.color = 'green';
        this.divDone.append(titleDone);

        this.divMain.append(this.divPlanned, this.divInProgress, this.divDone);
        this.appRoot.append(this.mainTitle, this.divMain);
        document.body.append(this.appRoot);

    }
    viewDivMain = (tasks: TaskInterface[]) => {
        tasks.forEach(element => {
            const task = new VeiwTask();
            this.viewTask(task.TaskAddContent(element));
        });
    }
    viewTask = (task: HTMLElement) => {
        if (task.className === 'planned') {
            this.divPlanned.append(task);
        }
        if (task.className === 'in-progress') {
            this.divInProgress.append(task);
        }
        if (task.className === 'done') {
            this.divDone.append(task);
        }
    }
}

// document.addEventListener("DOMContentLoaded", function (event) {
//     const view = new View();
//     view.viewDivMain([
//         {
//             id: '1',
//             title: 'hello',
//             desc: 'ksdksd',
//             dedline: new Date(2011, 0, 1),
//             type: TaskStatus.Planned
//         },
//         {
//             id: '2',
//             title: 'hello2',
//             desc: 'ksdksd',
//             dedline: new Date(2018, 0, 1),
//             type: TaskStatus.InProgress
//         },
//         {
//             id: '3',
//             title: 'hello3',
//             desc: 'ksdksd',
//             dedline: new Date(2019, 0, 1),
//             type: TaskStatus.Done
//         },
//         {
//             id: '4',
//             title: 'hello3',
//             desc: 'ksdksd',
//             dedline: new Date(2019, 0, 1),
//             type: TaskStatus.Planned
//         }
//     ]);
// });