import { BasicInterface } from "./basicInterface";
import { TypeAnswer } from "../enum/typeAnswer";

export interface QuestionInterface extends BasicInterface {
    answer: TypeAnswer;
}