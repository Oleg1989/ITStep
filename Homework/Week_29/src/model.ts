import { BasicInterface } from "./interface/basicInterface";

export class Repo {
    private _elementQuestions: BasicInterface[];
    constructor() {
        let arrElements = localStorage.getItem("items");
        if (arrElements) {
            this._elementQuestions = JSON.parse(arrElements);
        } else {
            this._elementQuestions = [];
        }
    }
    get questions(): BasicInterface[] {
        return this._elementQuestions;
    }
    addItem(element: BasicInterface): void {
        if (!this._elementQuestions.find(x => x == element)) {
            this._elementQuestions.push(element);
            this._commit(this._elementQuestions);
        }
        else {
            throw new Error("Element is not exist!!!");
        }
    }
    _commit(elements: BasicInterface[]) {
        localStorage.setItem("elementQuestions", JSON.stringify(elements));
    }
}