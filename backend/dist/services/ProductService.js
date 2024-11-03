"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const ProductRepository_1 = require("../repositories/ProductRepository");
class ProductService {
    constructor() {
        this.productRepository = (0, ProductRepository_1.getRepository)();
        // Add methods to create, update, and delete products as needed
    }
    async getAllProducts() {
        return await this.productRepository.find();
    }
    async getProductById(id) {
        return await this.productRepository.findOneBy({ id });
    }
}
exports.ProductService = ProductService;
