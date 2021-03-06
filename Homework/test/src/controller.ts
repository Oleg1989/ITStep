import { Model } from "./model";
import { View } from "./view";
import { Product } from "./product";

export class Controller {
    view: View;
    model: Model;
    constructor(view: View, model: Model) {
        this.view = view;
        this.model = model;

        this.view.viewProducts(this.model.products);
        this.view.viewBalance(this.model.parameters, this.model.products);
        this.view.viewStoreInformation(this.model.products);

        this.view.bindAddProduct(this.handlerAddProduct);
        this.view.bindRemoveProduct(this.handlerRemoveProduct);
        this.model.bindArrProductsChanged(this.onArrProductsChanged);
        this.model.bindBalanceTableChanged(this.onBalanceTableChanged);
        this.model.bindStoreInformationChanged(this.onStoreInformationChanged);
    }
    onArrProductsChanged = (objProducts: { [key: string]: Product }) => {
        this.view.viewProducts(objProducts);
    }
    onBalanceTableChanged = (parametrs: { [key: string]: number }, objProducts: { [key: string]: Product }) => {
        this.view.viewBalance(parametrs, objProducts);
    }
    onStoreInformationChanged = (objProducts: { [key: string]: Product }) => {
        this.view.viewStoreInformation(objProducts);
    }
    handlerAddProduct = (product: Product) => {
        this.model.addProduct(product);
    }
    handlerRemoveProduct = (title: string, quantityProduct: number) => {
        this.model.removeProduct(title, quantityProduct);
    }
}