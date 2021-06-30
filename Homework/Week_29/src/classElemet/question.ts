import { TypeAnswer } from "../enum/typeAnswer";
import cuid from "cuid";

export class Question {
    id: string;
    text: string;
    typeAnswer: TypeAnswer;
    arrAnswers: string[] | string;
    correctAnswer: string;
    constructor(Text: string, Type: TypeAnswer, ArrAnswers: string[] | string, CorrectAnswer: string) {
        this.id = cuid();
        this.text = Text;
        this.typeAnswer = Type;
        this.arrAnswers = ArrAnswers;
        this.correctAnswer = CorrectAnswer;
    }
}