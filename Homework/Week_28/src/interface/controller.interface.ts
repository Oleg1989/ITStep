import { ViewInterface } from "./viewInterface";
import { DataItemsArray } from "../ItemsMas";

export interface ControllerInterface {
    view: ViewInterface;
    repo: DataItemsArray;
}