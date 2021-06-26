import { Model } from "./model";
import { View } from "./view";
import { Product } from "./product";

export class Controller {
    view: View;
    model: Model;
    constructor(view: View, model: Model) {
        this.view = view;
        this.model = model;

        this.view.bindAddProduct(this.handlerAddProduct);
        this.view.bindRemoveProduct(this.handlerRemoveProduct);
        this.view.viewProducts(this.model.products);
        this.model.bindArrProductsChanged(this.onArrProductsChanged);
    }
    onArrProductsChanged = (arrProducts: { [key: string]: Product }) => {
        this.view.viewProducts(arrProducts);
    }
    handlerAddProduct = (product: Product) => {
        this.model.addProduct(product);
    }
    handlerRemoveProduct = (title: string, quantityProduct: number) => {
        this.model.removeProduct(title, quantityProduct);
    }
}