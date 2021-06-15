import { QuestionInterface } from "./interface/questionsInterface";
import cuid from "cuid";

export class View {
    divApp: HTMLElement;
    divMain: HTMLElement;
    divQuestions: HTMLElement;
    divAnswers: HTMLElement;
    formAdd: HTMLElement;
    constructor() {
        this.divApp = document.createElement('div');

        this.formAdd = document.createElement('form');
        this.formAdd.id = 'form-modal';
        this.formAdd.style.display = 'none';
        this.formAdd.addEventListener('click', this.viewAnswerInput);

        this.divMain = document.createElement('div');
        this.divMain.id = 'main';
        this.divMain.style.width = '100%';
        this.divMain.style.display = 'flex';
        this.divMain.style.justifyContent = 'space-between';

        this.divQuestions = document.createElement('div');
        this.divQuestions.id = 'add-questions';
        this.divQuestions.style.width = '30%';
        this.divQuestions.style.margin = '5px';
        this.divQuestions.style.borderRadius = '5px';
        this.divQuestions.style.border = '2px solid blue';
        this.divQuestions.style.backgroundColor = 'rgba(0,0,255,0.1)';

        let numberFormQuestin = document.createElement('form');
        numberFormQuestin.setAttribute('number', 'number-questions');
        numberFormQuestin.style.display = 'flex';
        numberFormQuestin.style.margin = '5px';
        numberFormQuestin.style.flexDirection = 'column';
        numberFormQuestin.style.alignItems = 'center';


        let title = document.createElement('h3');
        title.textContent = 'Задайте кількість запитань (від 1 до 5)';
        title.style.color = 'green';
        title.style.textAlign = 'center';
        title.id = 'alert';

        let inputNumber = document.createElement('input');
        inputNumber.id = 'number';
        inputNumber.type = 'number';
        inputNumber.style.width = '20%';
        inputNumber.style.margin = '5px';

        let inputButton = document.createElement('input');
        inputButton.type = 'submit';
        inputButton.style.width = '40%';
        inputButton.style.backgroundColor = 'green';
        inputButton.style.fontSize = '24px';
        inputButton.value = 'Show';
        inputButton.style.cursor = 'pointer';
        inputButton.addEventListener('click', this.viewQuestins);

        numberFormQuestin.append(title, inputNumber, inputButton);
        this.divQuestions.append(numberFormQuestin);

        this.divAnswers = document.createElement('div');
        this.divAnswers.id = 'answer';
        this.divAnswers.style.width = '70%';
        this.divAnswers.style.margin = '5px';
        this.divAnswers.style.borderRadius = '5px';
        this.divAnswers.style.border = '2px solid yellow';
        this.divAnswers.style.backgroundColor = 'rgba(255,255,0, 0.1)';

        this.divMain.append(this.divQuestions, this.divAnswers);
        this.divApp.append(this.formAdd, this.divMain);
        document.body.append(this.divApp);
    }

    viewQuestins = (event: Event) => {
        event.preventDefault();
        let alert = document.getElementById('alert');
        if (alert) {
            alert.textContent = 'Задайте кількість запитань (від 1 до 5)';
            alert.style.color = 'green';
            alert.style.textAlign = 'center';
        }
        let number = (<HTMLInputElement>document.getElementById('number')).value;
        let divQuestions = document.createElement('div');
        divQuestions.id = 'questions';
        divQuestions.style.display = 'flex';
        divQuestions.style.flexDirection = 'column';
        divQuestions.addEventListener('click', this.viewModalQuestin);
        if (number) {
            if (parseInt(number) > 0 && parseInt(number) <= 5) {
                for (let i = 0; i < parseInt(number); i++) {
                    let question = document.createElement('div');
                    question.textContent = `Question ${i + 1}`;
                    question.style.backgroundColor = 'orange';
                    question.style.margin = '5px';
                    question.style.padding = '5px';
                    question.style.cursor = 'pointer';
                    question.setAttribute('data-type', 'question');
                    divQuestions.append(question);
                }
                this.divQuestions.append(divQuestions);
                let sentInput = document.createElement('input');
                sentInput.type = 'submit';
                sentInput.value = 'Sent';
                sentInput.style.width = '40%';
                sentInput.style.backgroundColor = 'blue';
                sentInput.style.color = 'white';
                sentInput.style.margin = '5px auto';
                sentInput.style.fontSize = '24px';
                sentInput.style.cursor = 'pointer';
                divQuestions.append(sentInput);
            } else {
                if (alert) {
                    alert.textContent = 'Мінімум 1 максимум 5 питань!';
                    alert.style.color = 'red';
                    alert.style.textAlign = 'center';
                }
            }
        }
    }
    viewModalQuestin = (event: Event) => {
        while (this.formAdd.firstChild) {
            this.formAdd.removeChild(this.formAdd.firstChild);
        }
        if ((event.target as HTMLElement).dataset.type == 'question') {
            this.formAdd.style.display = 'block';
            this.formAdd.setAttribute('name', 'ModalQuestion');
            this.formAdd.style.width = '50%';
            this.formAdd.style.border = '2px solid yellow';
            this.formAdd.style.borderRadius = '10px';
            this.formAdd.style.display = 'flex';
            this.formAdd.style.flexDirection = "column";
            this.formAdd.style.padding = '20px';
            this.formAdd.style.textAlign = 'center';
            this.formAdd.style.backgroundColor = 'rgb(0,128,128, 0.9)';
            this.formAdd.style.position = 'absolute';
            this.formAdd.style.left = '25%';
            this.formAdd.style.top = '30px';

            let modalTitle = document.createElement('h1');
            modalTitle.textContent = `${(event.target as HTMLElement).textContent}`;

            let inputTitle = document.createElement('input');
            inputTitle.type = 'text';
            inputTitle.id = 'title';
            inputTitle.setAttribute('name', 'title');
            inputTitle.setAttribute('placeholder', 'Title');
            inputTitle.style.margin = '10px 0';
            inputTitle.style.width = '100%';
            inputTitle.style.fontSize = '24px';

            let inputImg = document.createElement('input');
            inputImg.type = 'text';
            inputImg.id = 'desc';
            inputImg.setAttribute('placeholder', 'ImgURL');
            inputImg.setAttribute('name', 'imgUrl');
            inputImg.style.margin = '10px 0';
            inputImg.style.width = '100%';
            inputImg.style.fontSize = '24px';

            let divAnswer = document.createElement('div');
            divAnswer.id = 'answer-div';

            let pOne = document.createElement('p');
            pOne.textContent = 'One';

            let inputOne = document.createElement('input');
            inputOne.type = 'radio';
            inputOne.id = 'one';
            inputOne.setAttribute('name', 'answer');
            inputOne.value = 'rad1'

            pOne.append(inputOne);

            let pMany = document.createElement('p');
            pMany.textContent = 'Many';

            let inputMany = document.createElement('input');
            inputMany.type = 'radio';
            inputMany.id = 'many';
            inputMany.setAttribute('name', 'answer');
            inputMany.value = 'rad2'

            pMany.append(inputMany);

            let pFree = document.createElement('p');
            pFree.textContent = 'Free form';

            let inputFree = document.createElement('input');
            inputFree.type = 'radio';
            inputFree.id = 'free';
            inputFree.setAttribute('name', 'answer');
            inputFree.value = 'rad3'

            pFree.append(inputFree);

            let div = document.createElement('div');
            div.id = 'div-answer';

            divAnswer.append(pOne, pMany, pFree, div);

            let addQuestion = document.createElement('button');
            addQuestion.textContent = 'Add question';
            addQuestion.setAttribute('name', 'btnAdd');
            addQuestion.id = 'btn-add';
            addQuestion.style.width = '50%';
            addQuestion.style.margin = '10px auto';
            addQuestion.style.fontSize = '24px';
            addQuestion.style.cursor = 'pointer';

            this.formAdd.append(modalTitle, inputTitle, inputImg, divAnswer, addQuestion);
        } else {
            this.formAdd.style.display = 'none';
        }
    }

    viewAnswerInput = (event: Event) => {
        //event.preventDefault();
        let id = (event.target as HTMLElement).id;
        let divAnswer = document.getElementById('div-answer');
        if (id === 'one' && document.getElementById('input-one') == null) {
            while (divAnswer?.firstChild) {
                divAnswer.removeChild(divAnswer.firstChild);
            }
            let pOne = document.getElementById('one');
            console.log(pOne);
            if (pOne) {
                let answer = document.createElement('input');
                answer.type = 'text';
                answer.id = 'input-one';
                answer.setAttribute('name', 'answer');
                answer.setAttribute('placeholder', 'Answer');
                answer.style.margin = '10px 0';
                answer.style.width = '100%';
                answer.style.fontSize = '24px';

                divAnswer?.append(answer);
            }
        }
        if (id === 'many' && document.getElementsByClassName('many-inputs').length == 0) {
            while (divAnswer?.firstChild) {
                divAnswer.removeChild(divAnswer.firstChild);
            }
            for (let i = 0; i < 3; i++) {
                let answer = document.createElement('input');
                answer.type = 'text';
                answer.classList.add('many-inputs')
                answer.setAttribute('name', `answer${i}`);
                answer.setAttribute('placeholder', `Answer ${i + 1}`);
                answer.style.margin = '10px 0';
                answer.style.width = '100%';
                answer.style.fontSize = '24px';

                divAnswer?.append(answer);
            }
        }
        if (id === 'free') {
            while (divAnswer?.firstChild) {
                divAnswer.removeChild(divAnswer.firstChild);
            }
        }
        if (id === 'btn-add') {
            event.preventDefault();
        }

    }
}