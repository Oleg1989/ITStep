import { TaskInterface } from "./model";
import { TaskStatus } from "./model"

interface ViewTaskInterface {
    divTask: HTMLElement;
    divTitle: HTMLElement;
    divDesk: HTMLElement;
    divDedline: HTMLElement;
    TaskAddContent: (task: TaskInterface) => HTMLElement;
}

class VeiwTask implements ViewTaskInterface {
    divTask: HTMLElement;
    divTitle: HTMLElement;
    divDesk: HTMLElement;
    divDedline: HTMLElement;
    constructor() {
        this.divTask = document.createElement('div');
        this.divTask.style.border = '1px solid blue';
        this.divTask.style.margin = '10px';
        this.divTask.style.padding = '10px';
        this.divTitle = document.createElement('div');
        this.divDesk = document.createElement('div');
        this.divDedline = document.createElement('div');

        this.divTask.append(this.divTitle, this.divDesk, this.divDedline);
    }
    TaskAddContent = (task: TaskInterface) => {
        this.divTask.id = task.id;
        this.divTask.className = task.type;
        this.divTitle.textContent = task.title;
        this.divDesk.textContent = task.desc;
        this.divDedline.textContent = `${task.dedline}`;

        return this.divTask;
    }
}

interface ViewInterface {
    appRoot: HTMLElement;
    mainTitle: HTMLElement;
    divMain: HTMLElement;
    divPlanned: HTMLElement;
    divInProgres: HTMLElement;
    divDone: HTMLElement;
    viewDivMain: (tasks: TaskInterface[]) => void;
    viewTask: (task: HTMLElement) => void;
}

class View implements ViewInterface {
    appRoot: HTMLElement;
    mainTitle: HTMLElement;
    divMain: HTMLElement;
    divPlanned: HTMLElement;
    divInProgres: HTMLElement;
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
        this.divMain.style.margin = '20px';
        this.divMain.style.border = '2px solid black';
        this.divMain.style.display = 'flex';

        this.divPlanned = document.createElement('div');
        this.divPlanned.id = 'planned';
        this.divPlanned.style.width = '30%';
        this.divPlanned.style.margin = '20px';
        this.divPlanned.style.padding = '10px';
        this.divPlanned.style.border = '1px solid red';

        this.divInProgres = document.createElement('div');
        this.divInProgres.id = 'in-progres';
        this.divInProgres.style.width = '30%';
        this.divInProgres.style.margin = '20px';
        this.divInProgres.style.padding = '10px';
        this.divInProgres.style.border = '1px solid orange';

        this.divDone = document.createElement('div');
        this.divDone.id = 'done';
        this.divDone.style.width = '30%';
        this.divDone.style.margin = '20px';
        this.divDone.style.padding = '10px';
        this.divDone.style.border = '1px solid green';

        this.divMain.append(this.divPlanned, this.divInProgres, this.divDone);
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
        if (task.className === 'in-progres') {
            this.divInProgres.append(task);
        }
        if (task.className === 'done') {
            this.divDone.append(task);
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    const view = new View();
    view.viewDivMain([
        {
            id: '1',
            title: 'hello',
            desc: 'ksdksd',
            dedline: new Date(2011, 0, 1),
            type: TaskStatus.Planned
        },
        {
            id: '2',
            title: 'hello2',
            desc: 'ksdksd',
            dedline: new Date(2018, 0, 1),
            type: TaskStatus.InProgres
        },
        {
            id: '3',
            title: 'hello3',
            desc: 'ksdksd',
            dedline: new Date(2019, 0, 1),
            type: TaskStatus.Done
        }
    ]);
});