// src/services/ProductService.ts
import { Runner } from "../entity/Runner";
import { getRepository } from "../repositories/ProductRepository";

export class ProductService {
  private productRepository = getRepository();

  async getAllProducts(): Promise<Runner[]> {
    return await this.productRepository.find();
  }

  async getProductById(id: number): Promise<Runner | null> {
    return await this.productRepository.findOneBy({ id });
  }

  // Add methods to create, update, and delete products as needed
}
