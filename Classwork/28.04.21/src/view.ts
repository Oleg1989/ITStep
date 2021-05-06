import { ViewInterface } from "./interface/viewInterface";
import { TaskInterface } from "./interface/taskInterface";
import { TaskStatus } from "./enum/taskStatus";
import { VeiwTask } from "./viewTask";


export class View implements ViewInterface {
    appRoot: HTMLElement;
    divHeader: HTMLElement;
    mainTitle: HTMLElement;
    buttonAddTask: HTMLElement;
    divMain: HTMLElement;
    divPlanned: HTMLElement;
    divInProgress: HTMLElement;
    divDone: HTMLElement;
    constructor() {
        this.appRoot = document.createElement('div');
        this.appRoot.id = 'app-root';

        this.divHeader = document.createElement('div');
        this.divHeader.style.width = '90%';
        this.divHeader.style.margin = '20px auto';
        this.divHeader.style.display = 'flex';
        this.divHeader.style.justifyContent = 'space-between';

        this.mainTitle = document.createElement('h1');
        this.mainTitle.textContent = 'To-do list';
        this.mainTitle.style.textAlign = 'center';
        this.mainTitle.style.flexGrow = '6';

        this.buttonAddTask = document.createElement('button');
        this.buttonAddTask.id = 'btn';
        this.buttonAddTask.textContent = 'Add task';
        this.buttonAddTask.style.fontSize = '24px';
        this.buttonAddTask.style.height = '50px';
        this.buttonAddTask.style.flexGrow = '1';
        this.buttonAddTask.style.alignSelf = 'center';

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
        this.divHeader.append(this.mainTitle, this.buttonAddTask,);
        this.appRoot.append(this.divHeader, this.divMain);
        document.body.append(this.appRoot);

        document.getElementById('btn')?.addEventListener('click', this.viewModalAddTask);

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
    viewModalAddTask = () => {
        let modal = document.createElement('div');
        modal.id = 'modal';
        modal.style.width = '50%';
        modal.style.border = '2px solid yellow';
        modal.style.display = 'flex';
        modal.style.flexDirection = "column";
        modal.style.padding = '20px';
        modal.style.textAlign = 'center';
        modal.style.backgroundColor = 'rgb(0,128,128, 0.9)';
        modal.style.position = 'absolute';
        modal.style.left = '25%';
        modal.style.top = '30px';

        let modalTitle = document.createElement('h1');
        modalTitle.textContent = 'Add task';

        let inputTitle = document.createElement('input');
        inputTitle.type = 'text';
        inputTitle.setAttribute('placeholder', 'Title');
        inputTitle.style.margin = '10px 0';
        inputTitle.style.width = '90%';
        inputTitle.style.fontSize = '24px';

        let inputDesc = document.createElement('input');
        inputDesc.type = 'text';
        inputDesc.setAttribute('placeholder', 'Description');
        inputDesc.style.margin = '10px 0';
        inputDesc.style.width = '90%';
        inputDesc.style.fontSize = '24px';

        let inputDeadline = document.createElement('input');
        inputDeadline.type = "date";
        inputDeadline.id = "date";
        inputDeadline.style.margin = '10px 0';
        inputDeadline.style.width = '90%';
        inputDeadline.style.fontSize = '24px';

        let buttonAdd = document.createElement('button');
        buttonAdd.id = 'btn-add';
        buttonAdd.textContent = 'Add';
        buttonAdd.addEventListener('click', this.closeModalAddTask);
        buttonAdd.style.width = '30%';
        buttonAdd.style.margin = '10px auto';
        buttonAdd.style.fontSize = '24px';

        modal.append(modalTitle, inputTitle, inputDesc, inputDeadline, buttonAdd);
        this.appRoot.append(modal);
    }
    closeModalAddTask = () => {
        let modal = document.getElementById('modal');
        if (modal == null) {
            return false
        } else {
            modal.style.display = 'none';
        }
    }
}