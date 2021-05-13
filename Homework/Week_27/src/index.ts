import { View } from "./view";
import { DataItemsArray } from "./ItemsMas";
import { Controller } from "./controller";
import { arrItems } from "./testObjItems";

document.addEventListener("DOMContentLoaded", function (event: Event) {
    const controller = new Controller(new View(), new DataItemsArray(arrItems));
});
