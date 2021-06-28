import { productType } from "./enum/productType";
import { typeContainer } from "./enum/typeContainer";
import cuid from "cuid";

export class Product {
    id: string;
    title: string;
    type: productType;
    container: typeContainer;
    maxCapacity: number;
    currentQuantity: number;
    numberContainers: number;
    constructor(Title: string, Type: productType, Container: typeContainer, CurrentQuantity: number) {
        this.id = cuid();
        this.title = Title;
        this.type = Type;
        this.container = Container;
        this.currentQuantity = CurrentQuantity;
        this.maxCapacity = 100;
        this.numberContainers = 1;
    }
}