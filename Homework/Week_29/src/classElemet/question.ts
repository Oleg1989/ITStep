import { TypeAnswer } from "../enum/typeAnswer";
import cuid from "cuid";

export class Question {
    id: string;
    text: string;
    imageURL: string;
    answer: TypeAnswer;
    arrAnswers: string[] | string;
    constructor(Text: string, ImageURL: string, Type: TypeAnswer, ArrAnswers: string[] | string) {
        this.id = cuid();
        this.text = Text;
        this.imageURL = ImageURL;
        this.answer = Type;
        this.arrAnswers = ArrAnswers;
    }
}