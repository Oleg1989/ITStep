import { View } from "./view";
import { Repo } from "./model";
import { Controller } from "./controller";

document.addEventListener("DOMContentLoaded", function (event) {
    const controller = new Controller(new View(), new Repo());
});
