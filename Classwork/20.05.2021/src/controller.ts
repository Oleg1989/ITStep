import { Repo } from "./model";
import { View } from "./view";

export class Controller{
    view: View;
    repo: Repo;
    constructor(view: View, repo: Repo) {
        this.view = view;
        this.repo = repo;
    }
}