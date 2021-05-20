import { BasicInterface } from "./basicInterface";
import { TypeAnswer } from "../enum/typeAnswer";

export interface AnswerInterface extends BasicInterface {
    freeform: string | null;
    isRight: boolean;
}