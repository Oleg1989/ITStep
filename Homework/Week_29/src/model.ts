import { BasicInterface } from "./interface/basicInterface";

export class Repo {
    elementQuestions: BasicInterface[];
    constructor() {
        let arrElements = localStorage.getItem("items");
        if (arrElements) {
            this.elementQuestions = JSON.parse(arrElements);
        } else {
            this.elementQuestions = [];
        }
    }
    get questions(): BasicInterface[] {
        return this.elementQuestions;
    }
    addItem(element: BasicInterface): void {
        if (!this.elementQuestions.find(x => x == element)) {
            this.elementQuestions.push(element);
            this._commit(this.elementQuestions);
        }
        else {
            throw new Error("Element is not exist!!!");
        }
    }
    _commit(elements: BasicInterface[]) {
        localStorage.setItem("elementQuestions", JSON.stringify(elements));
    }
}