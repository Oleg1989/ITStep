import { ViewInterface } from "./interface/viewInterface";
import { TaskInterface } from "./interface/taskInterface";
import { ControllerInterface } from "./interface/controllerInterface";
import { TaskStatus } from "./enum/taskStatus";
import { VeiwTask } from "./viewTask";
import cuid from "cuid";


export class View implements ViewInterface {
    appRoot: HTMLElement;
    divHeader: HTMLElement;
    mainTitle: HTMLElement;
    buttonAddTask: HTMLElement;
    divMain: HTMLElement;
    divPlanned: HTMLElement;
    divInProgress: HTMLElement;
    divDone: HTMLElement;
    form: HTMLElement;
    constructor() {
        this.appRoot = document.createElement('div');
        this.appRoot.id = 'app-root';

        this.form = document.createElement('form');
        this.form.id = 'form-modal';
        this.form.setAttribute('name', 'modal');
        this.form.style.display = 'none';

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
        inputTitle.setAttribute('name', 'title');
        inputTitle.setAttribute('placeholder', 'Title');
        inputTitle.style.margin = '10px 0';
        inputTitle.style.width = '90%';
        inputTitle.style.fontSize = '24px';

        let inputDesc = document.createElement('input');
        inputDesc.type = 'text';
        inputDesc.setAttribute('placeholder', 'Description');
        inputDesc.setAttribute('name', 'desc');
        inputDesc.style.margin = '10px 0';
        inputDesc.style.width = '90%';
        inputDesc.style.fontSize = '24px';

        let inputDeadline = document.createElement('input');
        inputDeadline.type = "date";
        inputDeadline.setAttribute('name', 'deadline');
        inputDeadline.id = "date";
        inputDeadline.style.margin = '10px 0';
        inputDeadline.style.width = '90%';
        inputDeadline.style.fontSize = '24px';

        let buttonAdd = document.createElement('input');
        buttonAdd.type = 'submit';
        buttonAdd.setAttribute('name', 'btnAdd');
        buttonAdd.id = 'btn-add';
        buttonAdd.value = 'Add';
        buttonAdd.style.width = '30%';
        buttonAdd.style.margin = '10px auto';
        buttonAdd.style.fontSize = '24px';
        buttonAdd.addEventListener('click', this.closeModalAddTask);

        modal.append(modalTitle, inputTitle, inputDesc, inputDeadline, buttonAdd);
        this.form.append(modal);
        this.appRoot.append(this.form);

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
        this.buttonAddTask.addEventListener('click', this.viewModalAddTask);

        this.divMain = document.createElement('div');
        this.divMain.id = 'main';
        this.divMain.style.width = '90%';
        this.divMain.style.margin = '20px auto';
        this.divMain.style.border = '4px solid black';
        this.divMain.style.display = 'flex';
        this.divMain.style.flexDirection = 'column';
        this.divMain.style.backgroundColor = 'rgb(0,0,0, 0.1)';

        let divTitle = document.createElement('div');
        divTitle.style.display = 'flex';
        divTitle.style.justifyContent = 'space-around';

        let divContent = document.createElement('div');
        divContent.style.display = 'flex';
        divContent.style.justifyContent = 'space-around';

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
        divTitle.append(titlePlanned);


        this.divInProgress = document.createElement('div');
        this.divInProgress.id = 'in-progress';
        this.divInProgress.style.width = '30%';
        this.divInProgress.style.margin = '20px';
        this.divInProgress.style.padding = '10px';
        this.divInProgress.style.border = '2px solid orange';
        this.divInProgress.style.backgroundColor = '	rgb(255,165,0, 0.1)';

        let titleInProgress = document.createElement('h2');
        titleInProgress.textContent = 'In progress';
        titleInProgress.style.textAlign = 'center';
        titleInProgress.style.color = 'orange';
        divTitle.append(titleInProgress);

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
        divTitle.append(titleDone);

        divContent.append(this.divPlanned, this.divInProgress, this.divDone);
        this.divMain.append(divTitle, divContent);
        this.divHeader.append(this.mainTitle, this.buttonAddTask,);
        this.appRoot.append(this.divHeader, this.divMain);
        document.body.append(this.appRoot);

    }
    viewDivMain = (tasks: TaskInterface[]) => {
        this.resetToDolist();
        tasks.forEach(element => {
            const task = new VeiwTask();
            this.viewTask(task.TaskAddContent(element));
        });
    }
    viewTask = (task: HTMLElement) => {
        if (task.className === 'planned') {
            let button = task.querySelector('button');
            if (button == null) {
                return false;
            } else {
                button.id = 'planned';
                button.textContent = 'In progress';
                this.divPlanned.append(task);
            }
        }
        if (task.className === 'in-progress') {
            let button = task.querySelector('button');
            if (button == null) {
                return false;
            } else {
                button.id = 'in-progress';
                button.textContent = 'Done';
                this.divInProgress.append(task);
            }
        }
        if (task.className === 'done') {
            let button = task.querySelector('button');
            if (button == null) {
                return false;
            } else {
                button.id = 'done';
                button.textContent = 'Delete';
                this.divDone.append(task);
            }
        }
    }
    viewModalAddTask = () => {
        this.form.style.display = 'block';
        this.resetToDolist();
        let form = document.forms[0];
        form.elements.title.value = '';
        form.elements.desc.value = '';
    }
    closeModalAddTask = () => {
        this.form.style.display = 'none';
    }
    bindAddTask(handler: (task: TaskInterface) => void) {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            let form = document.forms[0];
            handler({
                id: cuid(),
                title: form.elements.title.value,
                desc: form.elements.desc.value,
                deadline: form.elements.deadline.value,
                type: TaskStatus.Planned,
            });
        })
    }
    resetToDolist() {
        while (this.divPlanned.firstChild) {
            this.divPlanned.removeChild(this.divPlanned.firstChild);
        }
        while (this.divInProgress.firstChild) {
            this.divInProgress.removeChild(this.divInProgress.firstChild);
        }
        while (this.divDone.firstChild) {
            this.divDone.removeChild(this.divDone.firstChild);
        }
    }
    bindMoveToFieldInProgress(handler: (id: string) => void) {
        let taskStatus = document.getElementById('planned');
        if (taskStatus == null) {
            return false;
        } else {
            taskStatus.addEventListener('click', (event) => {
                if (event.target == null) {
                    return false;
                } else {
                    handler(event.target.parentElement.id);
                }
            });
        }
    }
    bindMoveToFieldDone(handler: (id: string) => void) {
        let taskStatus = document.getElementById('in-progress');
        if (taskStatus == null) {
            return false;
        } else {
            taskStatus.addEventListener('click', (event) => {
                if (event.target == null) {
                    return false;
                } else {
                    handler(event.target.parentElement.id);
                }
            });
        }
    }
    bindRemoveTask(handler: (id: string) => void) {
        let taskStatus = document.getElementById('done');
        if (taskStatus == null) {
            return false;
        } else {
            taskStatus.addEventListener('click', (event) => {
                if (event.target == null) {
                    return false;
                } else {
                    handler(event.target.parentElement.id);
                }
            });
        }
    }
}