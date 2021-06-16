import { Model } from "./model";
import { View } from "./view";
import { Question } from "./classElemet/question";
import { Answer } from "./classElemet/answer";

export class Controller {
    view: View;
    model: Model;
    constructor(view: View, model: Model) {
        this.view = view;
        this.model = model;

        this.view.bindAddQuestionModalQuestin(this.handlerAddaddQuestion);
    }
    handlerAddaddQuestion = (question: Question) => {
        this.model.addQuestion(question);
    }
}