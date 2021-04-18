export class ProductEntity {
    constructor() {
        this.arrProducts = JSON.parse(localStorage.getItem("products")) || [];
    }
    addProduct = (obj) => {
        for (let key in obj) {
            if (obj[key] === '' || obj[key] === 0) {
                return;
            } else {
                if (this.arrProducts.length === 0) {
                    obj.id = `title0`;
                } else {
                    obj.id = `title${this.arrProducts.length}`;
                }
            }
        }
        this.arrProducts.push(obj);
        localStorage.setItem("products", JSON.stringify(this.arrProducts));

        this._changeArrayProducts(this.arrProducts, this.countTotal());
    }
    deleteProduct = (id) => {
        for (let i = 0; i < this.arrProducts.length; i++) {
            if (id === this.arrProducts[i].id) {
                this.arrProducts.splice(i, 1);
            }
        }
        localStorage.setItem("products", JSON.stringify(this.arrProducts));
        this._changeArrayProducts(this.arrProducts, this.countTotal());
    }
    editProduct = (idProduct) => {
        let obj = this.arrProducts.find(item => item.id === idProduct);
        return obj;
    }
    updateProduct = (obj) => {
        this.arrProducts.forEach(function (item) {
            if (item.id === obj.id) {
                for (let key in obj) {
                    item[key] = obj[key];
                }
            }
        });
        localStorage.setItem("products", JSON.stringify(this.arrProducts));
        this._changeArrayProducts(this.arrProducts, this.countTotal());
    }
    countTotal = () => {
        let total = 0;
        for (let i = 0; i < this.arrProducts.length; i++) {
            total += this.arrProducts[i].cost * this.arrProducts[i].number;
        }
        return total;
    }
    bindAdminChanged(callback) {
        this.onAdminChanged = callback;
    }
    _changeArrayProducts(arr, total) {
        this.onAdminChanged(arr, total);
    }
}