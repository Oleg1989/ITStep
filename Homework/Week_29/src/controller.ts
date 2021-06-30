import { Model } from "./model";
import { View } from "./view";
import { Question } from "./classElemet/question";

export class Controller {
    view: View;
    model: Model;
    constructor(view: View, model: Model) {
        this.view = view;
        this.model = model;

        let sent = document.getElementById('sent');
        if (sent) {
            sent.addEventListener('click', this.handlerViewTests);
        }
        this.view.viewCheckQuestions(this.model.questions);
        this.view.bindAddQuestionModalQuestin(this.handlerAddaddQuestion);
        this.view.bindDeleteQuestins(this.handlerDeleteQuestions);
    }
    handlerAddaddQuestion = (question: Question) => {
        this.model.addQuestion(question);
    }
    handlerDeleteQuestions = () => {
        this.model.deleteQuestions();
    }
    handlerViewTests = (event: Event) => {
        event.preventDefault();
        this.view.viewTests(this.model.questions);
    }
}