export class Controller {
    constructor(productEntity, productRepository, viewBasket) {
        this.productEntity = productEntity;
        this.productRepository = productRepository;
        this.viewBasket = viewBasket;
        this.onBasketChanged(this.productEntity.getProduct(), this.productRepository.countTotal());
        this.productRepository.bindBasketChanged(this.onBasketChanged);
        this.viewBasket.bindIncreaseAmountProductBasket(this.handlerIncreaseAmountProductBasket);
        this.viewBasket.bindReduceAmountProductBasket(this.handlerReduceAmountProductBasket);
    }
    onBasketChanged = (arr, total) => {
        this.viewBasket.showBasket(arr, total);
    };
    handlerIncreaseAmountProductBasket = (id) => {
        this.productRepository.increaseAmountProduct(id);
    }
    handlerReduceAmountProductBasket = (id) => {
        this.productRepository.reduceAmountProduct(id);
    }
}