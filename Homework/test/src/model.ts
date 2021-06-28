import { Product } from "./product";
import { productType } from "./enum/productType";
import { typeContainer } from "./enum/typeContainer";

export class Model {
    private _objProducts: { [key: string]: Product };
    private MAX_CONTAINER_CAPACITY: number = 100;
    MAX_NUMBER_CONTAINERS: number = 10;
    maxNumberBoxes: number;
    maxNumberBarrels: number;
    STARTING_NUMBER_BOXES: number = 4;
    STARTING_NUMBER_BARRELS: number = 3;
    numberBox: number = 0;
    numberBarrel: number = 0;
    storageParameters: { [key: string]: number } = {};
    onArrProductsChanged!: (objProducts: { [key: string]: Product }) => void;
    onBalanceTableChanged!: (parametrs: { [key: string]: number }, objProducts: { [key: string]: Product }) => void;
    onStoreInformationChanged!: (objProducts: { [key: string]: Product }) => void;
    constructor() {
        let objProducts = localStorage.getItem("objProducts");
        if (objProducts) {
            this._objProducts = JSON.parse(objProducts);
        } else {
            this._objProducts = {};
        }
        let box: number = 0;
        let barrel: number = 0;
        for (let key in this._objProducts) {
            if (this._objProducts[key].container == typeContainer.Box) {
                box += this._objProducts[key].numberContainers;
            }
            if (this._objProducts[key].container == typeContainer.Barrel) {
                barrel += this._objProducts[key].numberContainers;
            }
        }
        this.numberBox = box;
        this.numberBarrel = barrel;
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
        return { ...this._objProducts };
    }
    get parameters(): { [key: string]: number } {
        return { ...this.storageParameters };
    }
    addProduct = (newProduct: Product) => {
        if (this.numberBox + this.numberBarrel == 0) {
            let number: number = 0;
            let i = newProduct.currentQuantity;
            while (i >= this.MAX_CONTAINER_CAPACITY) {
                i -= this.MAX_CONTAINER_CAPACITY;
                number++;
            };
            if (newProduct.type == productType.bulkProducts) {
                if (number > this.maxNumberBoxes) {
                    alert('Insufficient number of boxes!');
                    return false;
                } else {
                    newProduct.numberContainers = number;
                    if (newProduct.numberContainers > this.STARTING_NUMBER_BOXES) {
                        this.maxNumberBarrels = this.MAX_NUMBER_CONTAINERS - newProduct.numberContainers;
                        this.storageParameters['Maximum number of all barrels'] = this.maxNumberBarrels;
                    }
                }
            }
            if (newProduct.type == productType.liquidProducts) {
                if (number > this.maxNumberBarrels) {
                    alert('Insufficient number of barrels!');
                    return false;
                } else {
                    newProduct.numberContainers = number;
                    if (newProduct.numberContainers > this.STARTING_NUMBER_BARRELS) {
                        this.maxNumberBoxes = this.MAX_NUMBER_CONTAINERS - newProduct.numberContainers;
                        this.storageParameters['Maximum number of all boxes'] = this.maxNumberBoxes;
                    }
                }
            }
            this._objProducts[newProduct.title] = newProduct;
        } else {
            if (this.numberBox + this.numberBarrel >= this.MAX_NUMBER_CONTAINERS) {
                alert('Не більше 10 продуктів!');
                return false
            } else {
                if (this.numberBox < this.maxNumberBoxes && newProduct.container == typeContainer.Box) {
                    for (let key in this._objProducts) {
                        if (this._objProducts[key].title === newProduct.title && this._objProducts[key].type === newProduct.type) {
                            if (this._objProducts[key].numberContainers >= this.maxNumberBoxes) {
                                console.log(this._objProducts[key].numberContainers);
                                console.log(this.maxNumberBoxes);
                                alert('Insufficient number of boxes!');
                                return false;
                            } else {
                                let number: number = 1;
                                let i = newProduct.currentQuantity;
                                while (i > this.MAX_CONTAINER_CAPACITY) {
                                    i -= this.MAX_CONTAINER_CAPACITY;
                                    number++;
                                };
                                if (number > this.maxNumberBoxes) {
                                    alert('Insufficient number of boxes!');
                                    return false;
                                } else {
                                    newProduct.numberContainers = number;
                                    this._objProducts[key].currentQuantity += newProduct.currentQuantity;
                                    this._objProducts[key].numberContainers += newProduct.numberContainers;
                                    if (this._objProducts[key].numberContainers > this.STARTING_NUMBER_BOXES) {
                                        this.maxNumberBarrels = this.MAX_NUMBER_CONTAINERS - this._objProducts[key].numberContainers;
                                        this.storageParameters['Maximum number of all barrels'] = this.maxNumberBarrels;
                                    }
                                }
                                this.onArrProductsChanged(this._objProducts);
                                this.onBalanceTableChanged(this.storageParameters, this._objProducts);
                                this.onStoreInformationChanged(this._objProducts);
                                this._commit(this._objProducts);
                                return true;
                            }
                        }
                        if (this._objProducts[key].title === newProduct.title && this._objProducts[key].type !== newProduct.type) {
                            alert(`Неможна ${newProduct.title} добавити до типу ${newProduct.type}`);
                            return false;
                        }
                    }
                    let number: number = 1;
                    let i = newProduct.currentQuantity;
                    while (i > this.MAX_CONTAINER_CAPACITY) {
                        i -= this.MAX_CONTAINER_CAPACITY;
                        number++;
                    };
                    if (number > this.maxNumberBoxes) {
                        alert('Insufficient number of boxes!');
                        return false;
                    } else {
                        newProduct.numberContainers = number;
                        if (newProduct.numberContainers > this.STARTING_NUMBER_BOXES) {
                            this.maxNumberBarrels = this.MAX_NUMBER_CONTAINERS - newProduct.numberContainers;
                            this.storageParameters['Maximum number of all barrels'] = this.maxNumberBarrels;
                        }
                    }
                    this._objProducts[newProduct.title] = newProduct;
                }
                if (this.numberBarrel < this.maxNumberBarrels && newProduct.container == typeContainer.Barrel) {
                    for (let key in this._objProducts) {
                        if (this._objProducts[key].title === newProduct.title && this._objProducts[key].type === newProduct.type) {
                            if (this._objProducts[key].numberContainers >= this.maxNumberBarrels) {
                                alert('Insufficient number of barrels!');
                                return false;
                            } else {
                                let number: number = 1;
                                let i = newProduct.currentQuantity;
                                while (i > this.MAX_CONTAINER_CAPACITY) {
                                    i -= this.MAX_CONTAINER_CAPACITY;
                                    number++;
                                };
                                if (number > this.maxNumberBoxes) {
                                    alert('Insufficient number of barrels!');
                                    return false;
                                } else {
                                    newProduct.numberContainers = number;
                                    this._objProducts[key].currentQuantity += newProduct.currentQuantity;
                                    this._objProducts[key].numberContainers += newProduct.numberContainers;
                                    if (this._objProducts[key].numberContainers > this.STARTING_NUMBER_BARRELS) {
                                        this.maxNumberBoxes = this.MAX_NUMBER_CONTAINERS - this._objProducts[key].numberContainers;
                                        this.storageParameters['Maximum number of all boxes'] = this.maxNumberBoxes;
                                    }
                                }
                                this.onArrProductsChanged(this._objProducts);
                                this.onBalanceTableChanged(this.storageParameters, this._objProducts);
                                this.onStoreInformationChanged(this._objProducts);
                                this._commit(this._objProducts);
                                return true;
                            }
                        }
                        if (this._objProducts[key].title === newProduct.title && this._objProducts[key].type !== newProduct.type) {
                            alert(`Неможна ${newProduct.title} добавити до типу ${newProduct.type}`);
                            return false;
                        }
                    }
                    let number: number = 1;
                    let i = newProduct.currentQuantity;
                    while (i > this.MAX_CONTAINER_CAPACITY) {
                        i -= this.MAX_CONTAINER_CAPACITY;
                        number++;
                    };
                    if (number > this.maxNumberBarrels) {
                        alert('Insufficient number of barrels!');
                        return false;
                    } else {
                        newProduct.numberContainers = number;
                        if (newProduct.numberContainers > this.STARTING_NUMBER_BARRELS) {
                            this.maxNumberBoxes = this.MAX_NUMBER_CONTAINERS - newProduct.numberContainers;
                            this.storageParameters['Maximum number of all boxes'] = this.maxNumberBoxes;
                        }
                    }
                    this._objProducts[newProduct.title] = newProduct;
                }
            }
        }
        let box: number = 0;
        let barrel: number = 0;
        for (let key in this._objProducts) {
            if (this._objProducts[key].container == typeContainer.Box) {
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
        this.onArrProductsChanged(this._objProducts);
        this.onBalanceTableChanged(this.storageParameters, this._objProducts);
        this.onStoreInformationChanged(this._objProducts);
        this._commit(this._objProducts);
        return true;
    }
    removeProduct = (title: string, quantityProduct: number) => {
        for (let key in this._objProducts) {
            if (this._objProducts[key].title == title) {
                this._objProducts[key].currentQuantity -= quantityProduct;
                let number: number = 0;
                while (quantityProduct > this.MAX_CONTAINER_CAPACITY) {
                    quantityProduct -= this.MAX_CONTAINER_CAPACITY;
                    number++;
                };
                this._objProducts[key].numberContainers -= number;
                if (this._objProducts[key].currentQuantity <= 0) {
                    delete this._objProducts[key];
                    let box: number = 0;
                    let barrel: number = 0;
                    for (let key in this._objProducts) {
                        if (this._objProducts[key].container == typeContainer.Box) {
                            box++;
                        } else {
                            barrel++;
                        }
                    }
                    this.numberBox = box;
                    this.numberBarrel = barrel;
                    if (this.STARTING_NUMBER_BOXES <= this.numberBox) {
                        this.maxNumberBarrels = this.MAX_NUMBER_CONTAINERS - this.numberBox;
                        this.storageParameters['Maximum number of all barrels'] = this.maxNumberBarrels;
                    }
                    if (this.STARTING_NUMBER_BARRELS <= this.numberBarrel) {
                        this.maxNumberBoxes = this.MAX_NUMBER_CONTAINERS - this.numberBarrel;
                        this.storageParameters['Maximum number of all boxes'] = this.maxNumberBoxes;
                    }
                }
                this.onArrProductsChanged(this._objProducts);
                this.onBalanceTableChanged(this.storageParameters, this._objProducts);
                this.onStoreInformationChanged(this._objProducts);
                this._commit(this._objProducts);
                return true;
            }
        }
        return false;
    }
    _commit(objProducts: { [key: string]: Product }) {
        localStorage.setItem("objProducts", JSON.stringify(objProducts));
    }
    bindArrProductsChanged = (handler: (objProducts: { [key: string]: Product }) => void) => {
        this.onArrProductsChanged = handler;
    }
    bindBalanceTableChanged = (handler: (parametrs: { [key: string]: number }, objProducts: { [key: string]: Product }) => void) => {
        this.onBalanceTableChanged = handler;
    }
    bindStoreInformationChanged = (handler: (objProducts: { [key: string]: Product }) => void) => {
        this.onStoreInformationChanged = handler;
    }
}