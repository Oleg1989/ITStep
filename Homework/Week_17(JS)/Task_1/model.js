export class ProductEntity {
    constructor(arrProducts) {
        this.arrProducts = arrProducts;
    }
    getProduct = () => {
        return this.arrProducts;
    }
}
export class ProductRepository {
    constructor(arrProducts) {
        this.arrProducts = arrProducts;
    }
    increaseAmountProduct = (id) => {
        for (let i = 0; i < this.arrProducts.length; i++) {
            if (+this.arrProducts[i].id === id) {
                this.arrProducts[i].number += 1;
            }
        }
        this._changeArrayProducts(this.arrProducts, this.countTotal());
    }
    reduceAmountProduct = (id) => {
        for (let i = 0; i < this.arrProducts.length; i++) {
            if (+this.arrProducts[i].id === id) {
                if (this.arrProducts[i].number === 0) {
                    return;
                } else {
                    this.arrProducts[i].number -= 1;
                }
            }
        }
        this._changeArrayProducts(this.arrProducts, this.countTotal());
    }
    countTotal = () => {
        let total = 0;
        for (let i = 0; i < this.arrProducts.length; i++) {
            total += this.arrProducts[i].cost * this.arrProducts[i].number;
        }
        return total;
    }
    bindBasketChanged(callback) {
        this.onBasketChanged = callback;
    }
    _changeArrayProducts(arr, total) {
        this.onBasketChanged(arr, total);
    }
}
