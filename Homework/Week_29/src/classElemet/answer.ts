import { AnswerInterface } from "../interface/ansverInterface";
import cuid from "cuid";

export class Answer implements AnswerInterface {
    id: string;
    text: string;
    imageURL!: string;
    freeform!: string;
    isRight: boolean;
    constructor(Text: string, ImageURL: string, FreeForm: string, IsRight: boolean) {
        this.id = cuid();
        this.text = Text;
        this.imageURL = ImageURL;
        this.freeform = FreeForm;
        this.isRight = IsRight;
    }
}