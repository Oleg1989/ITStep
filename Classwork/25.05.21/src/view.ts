export class View {
    divApp: HTMLElement;
    divMain: HTMLElement;
    input: HTMLElement;
    button: HTMLElement;
    constructor(){
        this.divApp = document.createElement('div');

        this.divMain = document.createElement('div');
        this.divMain.style.width = '50%';
        this.divMain.style.border = '2px solidred';
        this.divMain.style.margin = '10px';

        this.input = document.createElement('input');

        

        this.button = document.createElement('button');
    }
}