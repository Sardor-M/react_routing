// src/services/ProductService.ts
import { Product } from "../entity/Product";
import { getRepository } from "../repositories/ProductRepository";

export class ProductService {
  private productRepository = getRepository(Product);

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async getProductById(id: number): Promise<Product | null> {
    return await this.productRepository.findOneBy({ id });
  }

  // Add methods to create, update, and delete products as needed
}
