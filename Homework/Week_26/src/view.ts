import { ViewInterface } from "./interface/viewInterface";
import { TaskInterface } from "./interface/taskInterface";
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
        modal.style.borderRadius = '10px';
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
        inputTitle.style.width = '100%';
        inputTitle.style.fontSize = '24px';

        let inputDesc = document.createElement('input');
        inputDesc.type = 'text';
        inputDesc.setAttribute('placeholder', 'Description');
        inputDesc.setAttribute('name', 'desc');
        inputDesc.style.margin = '10px 0';
        inputDesc.style.width = '100%';
        inputDesc.style.fontSize = '24px';

        let inputDeadline = document.createElement('input');
        inputDeadline.type = "date";
        inputDeadline.setAttribute('name', 'deadline');
        inputDeadline.id = "date";
        inputDeadline.style.margin = '10px 0';
        inputDeadline.style.width = '100%';
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
        this.buttonAddTask.style.borderRadius = '10px';
        this.buttonAddTask.addEventListener('click', this.viewModalAddTask);

        this.divMain = document.createElement('div');
        this.divMain.id = 'main';
        this.divMain.style.width = '90%';
        this.divMain.style.margin = '20px auto';
        this.divMain.style.border = '4px solid black';
        this.divMain.style.borderRadius = '10px';
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
        this.divPlanned.style.borderRadius = '5px';
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
        this.divInProgress.style.borderRadius = '5px';
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
        this.divDone.style.borderRadius = '5px';
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
        task.addEventListener('dragstart', this.onDragStartAdd);
        if (task.className === 'planned') {
            let button = task.querySelector('button');
            if (button) {
                button.textContent = 'In progress';
                button.style.backgroundColor = 'red';
                button.style.width = '50%';
                button.style.margin = '5px';
                button.style.borderRadius = '5px';
                button.style.fontSize = '16px';
                button.setAttribute('data-type', 'planned');
                this.divPlanned.append(task);
            } else {
                throw new Error('No found className!');
            }
        }
        if (task.className === 'in-progress') {
            task.style.border = '1px solid orange';
            let button = task.querySelector('button');
            if (button) {
                button.textContent = 'Done';
                button.style.backgroundColor = 'orange';
                button.style.width = '50%';
                button.style.margin = '5px';
                button.style.borderRadius = '5px';
                button.style.fontSize = '16px';
                button.setAttribute('data-type', 'in-progress');
                this.divInProgress.append(task);
            } else {
                throw new Error('No found className!');
            }
        }
        if (task.className === 'done') {
            task.style.border = '1px solid green';
            let button = task.querySelector('button');
            if (button) {
                button.textContent = 'Delete';
                button.style.backgroundColor = 'green';
                button.style.width = '50%';
                button.style.margin = '5px';
                button.style.borderRadius = '5px';
                button.style.fontSize = '16px';
                button.setAttribute('data-type', 'done');
                this.divDone.append(task);
            } else {
                throw new Error('No found className!');
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
        this.form.addEventListener('submit', (event: Event) => {
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
        if (taskStatus) {
            taskStatus.addEventListener('click', (event: Event) => {
                if ((event.target as HTMLElement).dataset.type == 'planned') {
                    if (event.target) {
                        let result = (event.target as HTMLElement).parentElement?.id;
                        if (result) {
                            handler(result);
                        }
                    }
                }
            });
        } else {
            throw new Error('ID planned not found!');
        }
    }
    bindMoveToFieldDone(handler: (id: string) => void) {
        let taskStatus = document.getElementById('in-progress');
        if (taskStatus) {
            taskStatus.addEventListener('click', (event: Event) => {
                if ((event.target as HTMLElement).dataset.type == 'in-progress') {
                    if (event.target) {
                        let result = (event.target as HTMLElement).parentElement?.id;
                        if (result) {
                            handler(result);
                        }
                    }
                }
            });
        } else {
            throw new Error('ID in-progress not found!');
        }
    }
    bindRemoveTask(handler: (id: string) => void) {
        let taskStatus = document.getElementById('done');
        if (taskStatus) {
            taskStatus.addEventListener('click', (event: Event) => {
                if ((event.target as HTMLElement).dataset.type == 'done') {
                    if (event.target) {
                        let result = (event.target as HTMLElement).parentElement?.id;
                        if (result) {
                            handler(result);
                        }
                    }
                }
            });
        } else {
            throw new Error('ID done not found!');
        }
    }
    onDragStartAdd = (event: DragEvent) => {
        event.dataTransfer?.setData("text/plain", `${(event.target as Element).id}, ${(event.target as Element).classList[0]}`);
    };
    onDragOver = (event: Event) => {
        event.preventDefault();
    };
    bindChangeType(handler: (id: string, type: TaskStatus) => void) {
        const main = document.getElementById('main');
        if (main) {
            main.addEventListener('dragover', this.onDragOver);
            main.addEventListener('drop', (event: DragEvent) => {
                const dropzone = event.target as HTMLElement;
                if (dropzone.id === TaskStatus.Planned || dropzone.id === TaskStatus.InProgress || dropzone.id === TaskStatus.Done) {
                    const data = event.dataTransfer?.getData("text/plain");
                    if (data) {
                        const newData = data.split(', ');
                        if (dropzone.id === TaskStatus.Done && newData[1] === TaskStatus.Planned) {
                            throw new Error('Error!');
                        } else {
                            handler(newData[0], dropzone.id as TaskStatus);
                            event.dataTransfer?.clearData();
                        }
                    }
                }
            });
        } else {
            throw new Error('ID main not found!')
        }
    }
}