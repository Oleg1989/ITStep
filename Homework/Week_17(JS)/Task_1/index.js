import {
    ProductEntity, ProductRepository
} from "./model.js"

import {
    ViewBasket
} from "./view.js"

import {
    Controller
} from "./controller.js"

let productArr = [
    {
        url: "https://picsum.photos/id/421/70/100",
        title: "Movie 1",
        cost: 10,
        number: 1,
        id: '0'
    },
    {
        url: "https://picsum.photos/id/299/70/100",
        title: "Movie 2",
        cost: 15,
        number: 1,
        id: '1'
    }
];

const controller = new Controller(new ProductEntity(productArr), new ProductRepository(productArr), new ViewBasket());