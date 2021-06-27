import { Product } from "./product";
import { productType } from "./enum/productType";
import { typeContainer } from "./enum/typeContainer";

export class Model {
    private _arrProducts: { [key: string]: Product };
    MAX_NUMBER_CONTAINERS: number = 10;
    maxNumberBoxes: number;
    maxNumberBarrels: number;
    STARTING_NUMBER_BOXES: number = 4;
    STARTING_NUMBER_BARRELS: number = 3;
    numberBox: number = 0;
    numberBarrel: number = 0;
    storageParameters: { [key: string]: number } = {};
    onArrProductsChanged!: (arrProducts: { [key: string]: Product }) => void;
    onBalanceTableChanged!: (parametrs: { [key: string]: number }, arrProducts: { [key: string]: Product }) => void;
    constructor() {
        let arrProducts = localStorage.getItem("arrProducts");
        if (arrProducts) {
            this._arrProducts = JSON.parse(arrProducts);
        } else {
            this._arrProducts = {};
        }
        for (let key in this._arrProducts) {
            if (this._arrProducts[key].container == typeContainer.Box) {
                this.numberBox++;
            } else {
                this.numberBarrel++;
            }
        }
        if (this.STARTING_NUMBER_BOXES < this.numberBox) {
            this.maxNumberBarrels = this.MAX_NUMBER_CONTAINERS - this.numberBox;
        } else {
            this.maxNumberBarrels = this.MAX_NUMBER_CONTAINERS - this.STARTING_NUMBER_BOXES;
        }
        if (this.STARTING_NUMBER_BARRELS < this.numberBarrel) {
            this.maxNumberBoxes = this.MAX_NUMBER_CONTAINERS - this.numberBarrel;
        } else {
            this.maxNumberBoxes = this.MAX_NUMBER_CONTAINERS - this.STARTING_NUMBER_BARRELS;
        }
        this.storageParameters['Maximum number of all containers'] = this.MAX_NUMBER_CONTAINERS;
        this.storageParameters['Starting number of boxe'] = this.STARTING_NUMBER_BOXES;
        this.storageParameters['Starting number barrel'] = this.STARTING_NUMBER_BARRELS;
        this.storageParameters['Maximum number of all boxes'] = this.maxNumberBoxes;
        this.storageParameters['Maximum number of all barrels'] = this.maxNumberBarrels;
    }
    get products(): { [key: string]: Product } {
        return { ...this._arrProducts };
    }
    get parameters(): { [key: string]: number } {
        return { ...this.storageParameters };
    }
    addProduct = (newProduct: Product) => {
        if (Object.keys(this._arrProducts).length == 0) {
            this._arrProducts[newProduct.title] = newProduct;
        } else {
            if (Object.keys(this._arrProducts).length >= this.MAX_NUMBER_CONTAINERS) {
                return false
            } else {
                let box: number = 0;
                let barrel: number = 0;
                for (let key in this._arrProducts) {
                    if (this._arrProducts[key].container == typeContainer.Box) {
                        box++;
                    } else {
                        barrel++;
                    }
                }
                this.numberBox = box;
                this.numberBarrel = barrel;
                if (this.STARTING_NUMBER_BOXES < this.numberBox) {
                    this.maxNumberBarrels = this.MAX_NUMBER_CONTAINERS - this.numberBox;
                    this.storageParameters['Maximum number of all barrels'] = this.maxNumberBarrels;
                }
                if (this.STARTING_NUMBER_BARRELS < this.numberBarrel) {
                    this.maxNumberBoxes = this.MAX_NUMBER_CONTAINERS - this.numberBarrel;
                    this.storageParameters['Maximum number of all boxes'] = this.maxNumberBoxes;
                }
                console.log(this.maxNumberBoxes);
                console.log(this.maxNumberBarrels);
                console.log(this.numberBox);
                console.log(this.numberBarrel);
                if (this.numberBox < this.maxNumberBoxes && newProduct.container == typeContainer.Box) {
                    for (let key in this._arrProducts) {
                        if (this._arrProducts[key].title === newProduct.title && this._arrProducts[key].type === newProduct.type) {
                            this._arrProducts[key].currentQuantity += newProduct.currentQuantity;
                            this.onArrProductsChanged(this._arrProducts);
                            this.onBalanceTableChanged(this.storageParameters, this._arrProducts);
                            this._commit(this._arrProducts);
                            return true;
                        }
                        if (this._arrProducts[key].title === newProduct.title && this._arrProducts[key].type !== newProduct.type) {
                            return false;
                        }
                    }
                    this._arrProducts[newProduct.title] = newProduct;
                }
                if (this.numberBarrel < this.maxNumberBarrels && newProduct.container == typeContainer.Barrel) {
                    for (let key in this._arrProducts) {
                        if (this._arrProducts[key].title === newProduct.title && this._arrProducts[key].type === newProduct.type) {
                            this._arrProducts[key].currentQuantity += newProduct.currentQuantity;
                            this.onArrProductsChanged(this._arrProducts);
                            this.onBalanceTableChanged(this.storageParameters, this._arrProducts);
                            this._commit(this._arrProducts);
                            return true;
                        }
                        if (this._arrProducts[key].title === newProduct.title && this._arrProducts[key].type !== newProduct.type) {
                            return false;
                        }
                    }
                    this._arrProducts[newProduct.title] = newProduct;
                }
            }
        }
        this.onArrProductsChanged(this._arrProducts);
        this.onBalanceTableChanged(this.storageParameters, this._arrProducts);
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
                this.onBalanceTableChanged(this.storageParameters, this._arrProducts);
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
    bindBalanceTableChanged = (handler: (parametrs: { [key: string]: number }, arrProducts: { [key: string]: Product }) => void) => {
        this.onBalanceTableChanged = handler;
    }
}