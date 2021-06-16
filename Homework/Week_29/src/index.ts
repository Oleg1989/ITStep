import { View } from "./view";
import { Model } from "./model";
import { Controller } from "./controller";


document.addEventListener("DOMContentLoaded", function (event: Event) {
    const controller = new Controller(new View(), new Model());
});
