export class ProductRepository {
    constructor() {
        this.arrProducts = JSON.parse(localStorage.getItem("products")) || [];
    }
    getProduct = () => {
        return this.arrProducts;
    }
}