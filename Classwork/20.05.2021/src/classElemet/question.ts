import { QuestionInterface } from "../interface/questionsInterface";
import { TypeAnswer } from "../enum/typeAnswer";
import cuid from "cuid";

export class Question implements QuestionInterface {
    id: string;
    text: string;
    imageURL: string | null;
    answer: TypeAnswer;
    constructor(Text: string, ImageURL: string | null, Type: TypeAnswer) {
        this.id = cuid();
        this.text = Text;
        this.imageURL = ImageURL;
        this.answer = Type;
    }
}