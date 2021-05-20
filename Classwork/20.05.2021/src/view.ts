
export class View {
    divApp: HTMLElement;
    divMain: HTMLElement;
    divQuestions: HTMLElement;
    divAnswers: HTMLElement;
    constructor(){
        this.divApp = document.createElement('div');

        this.divMain = document.createElement('div');
        this.divMain.id = 'main';
        this.divMain.style.width = '100%';
        this.divMain.style.display = 'flex';
        this.divMain.style.justifyContent = 'space-between';

        this.divQuestions = document.createElement('div');
        this.divQuestions.id = 'questions';
        this.divQuestions.style.width = '30%';
        this.divQuestions.style.margin = '5px';
        this.divQuestions.style.border = '2px solid blue';

        let numberFormQuestin = document.createElement('form');
        numberFormQuestin.setAttribute('number','number-questions');
        numberFormQuestin.style.display = 'flex';
        numberFormQuestin.style.margin = '5px';
        numberFormQuestin.style.flexDirection = 'column';

        let inputNumber = document.createElement('input');
        inputNumber.id = 'number';
        inputNumber.type = 'number';
        inputNumber.style.margin = '5px';
        //inputNumber.setAttribute('placeholder', 'Задайте кількість питань(максимально 5 питань)');

        let inputButton = document.createElement('input');
        inputButton.type = 'submit';
        inputButton.style.width = '50%';
        inputButton.value = 'Show';
        inputButton.addEventListener('click', this.viewQuestins);

        numberFormQuestin.append(inputNumber, inputButton);
        this.divQuestions.append(numberFormQuestin);

        this.divAnswers = document.createElement('div');
        this.divAnswers.id = 'answer';
        this.divAnswers.style.width = '70%';
        this.divAnswers.style.margin = '5px';
        this.divAnswers.style.border = '2px solid yellow';

        this.divMain.append(this.divQuestions, this.divAnswers);
        this.divApp.append(this.divMain);
        document.body.append(this.divApp);
    }

    viewQuestins = (event: Event) => {
        event.preventDefault();
        let number = document.getElementById('number');
        let divQuestions = document.createElement('div');
        divQuestions.id = 'questions';
        divQuestions.style.display = 'flex';
        divQuestions.style.flexDirection = 'column';
        if((number as Element).value){
            console.log(number);
            if(number?.nodeValue  > 0 && number.nodeValue  <= 5){
                for(let i = 0; i < number.nodeValue; i++){
                    let question = document.createElement('div');
                    question.textContent = `Question ${i + 1}`;
                    question.style.backgroundColor = 'orange';
                    question.style.margin = '5px';
                    divQuestions.append(question);
                } 
                this.divQuestions.append(divQuestions);
            }  else {
                alert('Мінімум 1 і не бідьше 5 питань!')ж
            } 
        }   
    }
}