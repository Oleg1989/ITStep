import {
    ProductEntity
} from "./productEntity.js"

import {
    ProductRepository
} from "./productRepository.js"

import {
    ViewAdmin
} from "./viewAdmin.js"

import {
    ViewForm
} from "./viewForm.js"

import {
    Controller
} from "./controller.js"

const controller = new Controller(new ProductEntity(), new ProductRepository(), new ViewAdmin(), new ViewForm());