import cuid from "cuid";

export class Answer {
    id: string;
    text: string;
    freeform: string;
    isRight: boolean;
    constructor(Text: string, FreeForm: string, IsRight: boolean) {
        this.id = cuid();
        this.text = Text;
        this.freeform = FreeForm;
        this.isRight = IsRight;
    }
}