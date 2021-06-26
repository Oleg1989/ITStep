import { Product } from "./product";

export class Model {
    private _arrProducts: { [key: string]: Product };
    onArrProductsChanged!: (arrProducts: { [key: string]: Product }) => void;
    constructor() {
        let arrProducts = localStorage.getItem("arrProducts");
        if (arrProducts) {
            this._arrProducts = JSON.parse(arrProducts);
        } else {
            this._arrProducts = {};
        }
    }
    get products(): { [key: string]: Product } {
        return { ...this._arrProducts };
    }
    addProduct = (newProduct: Product) => {
        if (this._arrProducts == {}) {
            for (let key in this._arrProducts) {
                if (this._arrProducts[key].title == newProduct.title && this._arrProducts[key].type == newProduct.type) {
                    this._arrProducts[key].currentQuantity += newProduct.currentQuantity;
                } else {
                    this._arrProducts[newProduct.title] = newProduct;
                }
            }
        } else {
            this._arrProducts[newProduct.title] = newProduct;
        }
        this.onArrProductsChanged(this._arrProducts);
        this._commit(this._arrProducts);
        return true;
    }
    removeProduct = (title: string, quantityProduct: number) => {
        for (let key in this._arrProducts) {
            if (this._arrProducts[key].title == title) {
                this._arrProducts[key].currentQuantity -= quantityProduct;
                if (this._arrProducts[key].currentQuantity <= 0) {
                    delete this._arrProducts[key];
                }
                this.onArrProductsChanged(this._arrProducts);
                this._commit(this._arrProducts);
                return true;
            }
        }
        return false;
    }
    _commit(arrProducts: { [key: string]: Product }) {
        localStorage.setItem("arrProducts", JSON.stringify(arrProducts));
    }
    bindArrProductsChanged = (handler: (arrProducts: { [key: string]: Product }) => void) => {
        this.onArrProductsChanged = handler;
    }
}