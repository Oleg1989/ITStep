import { Question } from "./classElemet/question";
import { TypeAnswer } from "./enum/typeAnswer";

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

        let sentInput = document.createElement('button');
        sentInput.textContent = 'Sent';
        sentInput.id = 'sent';
        sentInput.style.width = '40%';
        sentInput.style.backgroundColor = 'blue';
        sentInput.style.color = 'white';
        sentInput.style.margin = '5px auto';
        sentInput.style.fontSize = '24px';
        sentInput.style.cursor = 'pointer';

        let deleteQuestions = document.createElement('button');
        deleteQuestions.textContent = 'Delete';
        deleteQuestions.id = 'delete';
        deleteQuestions.style.width = '60%';
        deleteQuestions.style.backgroundColor = 'red';
        deleteQuestions.style.color = 'white';
        deleteQuestions.style.margin = '5px auto';
        deleteQuestions.style.fontSize = '24px';
        deleteQuestions.style.cursor = 'pointer';

        let divNewQuestin = document.createElement('div');
        divNewQuestin.id = 'new-question';
        divNewQuestin.style.width = '100%';

        numberFormQuestin.append(title, inputNumber, inputButton, sentInput, deleteQuestions, divNewQuestin);
        this.divQuestions.append(numberFormQuestin);

        this.divAnswers = document.createElement('div');
        this.divAnswers.id = 'answer';
        this.divAnswers.style.width = '70%';
        this.divAnswers.style.margin = '5px';
        this.divAnswers.style.borderRadius = '5px';
        this.divAnswers.style.border = '2px solid yellow';
        this.divAnswers.style.backgroundColor = 'rgba(255,255,0, 0.1)';
        this.divAnswers.style.width = '100%';
        this.divAnswers.style.display = 'flex';
        this.divAnswers.style.flexDirection = 'column';
        this.divAnswers.style.justifyContent = 'space-between';

        this.divMain.append(this.divQuestions, this.divAnswers);
        this.divApp.append(this.formAdd, this.divMain);
        document.body.append(this.divApp);
    }

    viewQuestins = (event: Event) => {
        event.preventDefault();
        let questions = document.getElementById('new-question');
        while (questions?.firstChild) {
            questions.removeChild(questions.firstChild);
        }
        let alert = document.getElementById('alert');
        if (alert) {
            alert.textContent = 'Задайте кількість запитань (від 1 до 3)';
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
            if (parseInt(number) > 0 && parseInt(number) <= 3) {
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
                questions?.append(divQuestions);
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

            this.formAdd.append(modalTitle, inputTitle, divAnswer, addQuestion);
        } else {
            this.formAdd.style.display = 'none';
        }
    }
    viewAnswerInput = (event: Event) => {
        let id = (event.target as HTMLElement).id;
        let divAnswer = document.getElementById('div-answer');
        if (id === 'one' && document.getElementById('input-one') == null) {
            while (divAnswer?.firstChild) {
                divAnswer.removeChild(divAnswer.firstChild);
            }
            let pOne = document.getElementById('one');
            if (pOne) {
                let answer = document.createElement('input');
                answer.type = 'text';
                answer.classList.add('many-inputs')
                answer.setAttribute('name', `version`);
                answer.setAttribute('placeholder', `Version`);
                answer.style.margin = '10px 0';
                answer.style.width = '100%';
                answer.style.fontSize = '24px';

                let correctAnswer = document.createElement('input');
                correctAnswer.type = 'text';
                correctAnswer.id = 'correct-answer';
                correctAnswer.setAttribute('placeholder', 'Correct answer');
                correctAnswer.setAttribute('name', 'correct-answer');
                correctAnswer.style.margin = '10px 0';
                correctAnswer.style.width = '100%';
                correctAnswer.style.fontSize = '24px';

                divAnswer?.append(answer, correctAnswer);
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
                answer.setAttribute('name', `version${i}`);
                answer.setAttribute('placeholder', `Version ${i + 1}`);
                answer.style.margin = '10px 0';
                answer.style.width = '100%';
                answer.style.fontSize = '24px';

                divAnswer?.append(answer);
            }
            let correctAnswer = document.createElement('input');
            correctAnswer.type = 'text';
            correctAnswer.id = 'correct-answer';
            correctAnswer.setAttribute('placeholder', 'Correct answer');
            correctAnswer.setAttribute('name', 'correct-answer');
            correctAnswer.style.margin = '10px 0';
            correctAnswer.style.width = '100%';
            correctAnswer.style.fontSize = '24px';

            divAnswer?.append(correctAnswer);
        }
        if (id === 'free') {
            while (divAnswer?.firstChild) {
                divAnswer.removeChild(divAnswer.firstChild);
            }
            let correctAnswer = document.createElement('input');
            correctAnswer.type = 'text';
            correctAnswer.id = 'correct-answer';
            correctAnswer.setAttribute('placeholder', 'Correct answer');
            correctAnswer.setAttribute('name', 'correct-answer');
            correctAnswer.style.margin = '10px 0';
            correctAnswer.style.width = '100%';
            correctAnswer.style.fontSize = '24px';

            divAnswer?.append(correctAnswer);
        }
        if (id === 'btn-add') {
            event.preventDefault();
        }

    }
    viewTests = (questions: Question[]) => {
        let divQuestion = document.getElementById('answer');
        if (divQuestion) {
            while (divQuestion.firstChild) {
                divQuestion.removeChild(divQuestion.firstChild);
            }
            let div = document.createElement('div');
            div.id = "check-questions"

            questions.forEach(element => {
                if (element.typeAnswer == TypeAnswer.One) {
                    let divNew = document.createElement('div');
                    divNew.style.margin = '5px';
                    divNew.style.padding = '5px';
                    divNew.style.border = '2px solid gray';
                    divNew.style.borderRadius = '5px';
                    divNew.id = element.id;

                    let title = document.createElement('h2');
                    title.textContent = element.text;
                    title.style.textAlign = 'center';

                    let answer = document.createElement('span');

                    answer.textContent = `Answer: ${element.arrAnswers}`;

                    let pYes = document.createElement('p');
                    pYes.textContent = 'Yes';

                    let inputYes = document.createElement('input');
                    inputYes.type = 'radio';
                    inputYes.id = 'yes';
                    inputYes.setAttribute('name', 'check-boolean');
                    inputYes.value = 'true'

                    pYes.append(inputYes);

                    let pNot = document.createElement('p');
                    pNot.textContent = 'Not';

                    let inputNot = document.createElement('input');
                    inputNot.type = 'radio';
                    inputNot.id = 'not';
                    inputNot.setAttribute('name', 'check-boolean');
                    inputNot.value = 'false'

                    pNot.append(inputNot);

                    divNew.append(title, answer, pYes, pNot);
                    div.append(divNew);
                }
                if (element.typeAnswer == TypeAnswer.Many) {
                    let divNew = document.createElement('div');
                    divNew.style.margin = '5px';
                    divNew.style.padding = '5px';
                    divNew.style.border = '2px solid gray';
                    divNew.style.borderRadius = '5px';
                    divNew.id = element.id;

                    let title = document.createElement('h2');
                    title.textContent = element.text;
                    title.style.textAlign = 'center';

                    divNew.append(title);

                    if (typeof (element.arrAnswers) == "object") {
                        let i: number = 0;
                        element.arrAnswers.forEach(e => {
                            let p = document.createElement('p');
                            p.textContent = `Answer ${e}`;

                            let input = document.createElement('input');
                            input.type = 'radio';
                            input.setAttribute('name', 'check');
                            input.value = `${e}`;

                            p.append(input);
                            divNew.append(p);
                            i++;
                        });
                    }
                    div.append(divNew);
                }
                if (element.typeAnswer == TypeAnswer.FreeForm) {
                    let divNew = document.createElement('div');
                    divNew.style.margin = '5px';
                    divNew.style.padding = '5px';
                    divNew.style.border = '2px solid gray';
                    divNew.style.borderRadius = '5px';
                    divNew.id = element.id;

                    let title = document.createElement('h2');
                    title.textContent = element.text;
                    title.style.textAlign = 'center';

                    divNew.append(title);

                    if (element.arrAnswers.length == 0) {
                        let p = document.createElement('p');
                        p.textContent = `Your answer - `;

                        let input = document.createElement('input');
                        input.type = 'text';
                        input.setAttribute('name', 'check-free');

                        p.append(input);
                        divNew.append(p);
                        div.append(divNew);
                    }
                }
                divQuestion?.append(div);
            });
            let check = document.createElement('button');
            check.textContent = 'Check';
            check.id = 'check';
            check.style.width = '20%';
            check.style.backgroundColor = 'grey';
            check.style.color = 'white';
            check.style.margin = '5px auto';
            check.style.fontSize = '24px';
            check.style.cursor = 'pointer';
            divQuestion?.append(check);
        }
    }
    viewCheckQuestions = (questions: Question[]) => {
        this.divMain.addEventListener('click', (event: Event) => {
            let checkQuestions = document.getElementById('check-questions');
            if (checkQuestions) {
                if ((event.target as HTMLElement).id == 'check') {
                    let arrQuestionId = checkQuestions?.querySelectorAll('div');
                    for (let i = 0; i < arrQuestionId.length; i++) {
                        if (questions[i].id == arrQuestionId[i].id) {
                            if (questions[i].typeAnswer == TypeAnswer.One) {
                                let answer = arrQuestionId[i].querySelector('input[name="check-boolean"]:checked');
                                if ((answer as HTMLInputElement).value == 'true') {
                                    if (+questions[i].arrAnswers[0] == +questions[i].correctAnswer) {
                                        let question = document.getElementById(`${questions[i].id}`);
                                        if (question) {
                                            question.style.border = '4px solid green';
                                        }
                                    } else {
                                        let question = document.getElementById(`${questions[i].id}`);
                                        if (question) {
                                            question.style.border = '4px solid red';
                                        }
                                    }
                                } else {
                                    if (+questions[i].arrAnswers[0] !== +questions[i].correctAnswer) {
                                        let question = document.getElementById(`${questions[i].id}`);
                                        if (question) {
                                            question.style.border = '4px solid green';
                                        }
                                    } else {
                                        let question = document.getElementById(`${questions[i].id}`);
                                        if (question) {
                                            question.style.border = '4px solid red';
                                        }
                                    }
                                }
                            }
                            if (questions[i].typeAnswer == TypeAnswer.Many) {
                                let answer = arrQuestionId[i].querySelector('input[name="check"]:checked');
                                if (+(answer as HTMLInputElement).value == +questions[i].correctAnswer) {
                                    let question = document.getElementById(`${questions[i].id}`);
                                    if (question) {
                                        question.style.border = '4px solid green';
                                    }
                                } else {
                                    let question = document.getElementById(`${questions[i].id}`);
                                    if (question) {
                                        question.style.border = '4px solid red';
                                    }
                                }

                            }
                            if (questions[i].typeAnswer == TypeAnswer.FreeForm) {
                                let answer = arrQuestionId[i].querySelector('input[name="check-free"]');
                                if (+(answer as HTMLInputElement).value == +questions[i].correctAnswer) {
                                    let question = document.getElementById(`${questions[i].id}`);
                                    if (question) {
                                        question.style.border = '4px solid green';
                                    }
                                } else {
                                    let question = document.getElementById(`${questions[i].id}`);
                                    if (question) {
                                        question.style.border = '4px solid red';
                                    }
                                }

                            }
                        }
                    }
                }
            }
        });
    }
    bindAddQuestionModalQuestin(handler: (question: Question) => void) {
        this.formAdd.addEventListener('click', (event: Event) => {
            if ((event.target as HTMLElement).id === 'btn-add') {
                this.formAdd.style.display = 'none';
                let inputAnswer = document.getElementById('div-answer')?.getElementsByTagName('input');
                let type: TypeAnswer;
                let answers: string | string[] = [];
                if (inputAnswer) {
                    if (inputAnswer.length == 2) {
                        type = TypeAnswer.One;
                        answers = inputAnswer[0].value;
                    } else if (inputAnswer.length > 2) {
                        type = TypeAnswer.Many;
                        for (let i = 0; i < inputAnswer.length; i++) {
                            if (inputAnswer[i].id !== 'correct-answer') {
                                answers.push(inputAnswer[i].value);
                            }
                        }
                    } else {
                        type = TypeAnswer.FreeForm;
                    }
                    if ((document.getElementById('title') as HTMLInputElement).value == '' || (document.getElementById('correct-answer') as HTMLInputElement).value == '') {
                        alert('Заповніть всі поля!');
                    } else {
                        const question = new Question(
                            (document.getElementById('title') as HTMLInputElement).value,
                            type,
                            answers,
                            (document.getElementById('correct-answer') as HTMLInputElement).value,
                        );
                        handler(question);
                    }
                }
            }
        });
    }
    bindDeleteQuestins(handler: () => void) {
        this.divMain.addEventListener('click', (event: Event) => {
            if ((event.target as HTMLElement).id === 'delete') {
                handler();
            }
        });
    }
}