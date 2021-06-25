import { Product } from "./product";

export class Model {
    private _arrProducts: { [key: string]: Product };
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
        for (let key in this._arrProducts) {
            if (this._arrProducts[key].title == newProduct.title && this._arrProducts[key].type == newProduct.type) {
                this._arrProducts[key].currentQuantity += newProduct.currentQuantity;
            } else {
                this._arrProducts[newProduct.title] = newProduct;
            }
        }
        this._commit(this._arrProducts);
        return true;
    }
    removeProduct = (id: string, quantityProduct: number) => {
        for (let key in this._arrProducts) {
            if (this._arrProducts[key].id == id) {
                this._arrProducts[key].currentQuantity -= quantityProduct;
                this._commit(this._arrProducts);
                return true;
            }
        }
        return false;
    }
    _commit(arrProducts: { [key: string]: Product }) {
        localStorage.setItem("userList", JSON.stringify(arrProducts));
    }
}