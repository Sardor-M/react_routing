"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
// src/services/ProductService.ts
const typedi_1 = require("typedi");
const ProductRepository_1 = require("../repositories/ProductRepository");
let ProductService = class ProductService {
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
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, typedi_1.Service)()
], ProductService);
