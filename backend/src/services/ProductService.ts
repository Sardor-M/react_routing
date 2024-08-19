// src/services/ProductService.ts
import { Event } from "../entity/Event";
import { getRepository } from "../repositories/ProductRepository";

export class ProductService {
  private productRepository = getRepository();

  async getAllProducts(): Promise<Event[]> {
    return await this.productRepository.find();
  }

  async getProductById(id: number): Promise<Event | null> {
    return await this.productRepository.findOneBy({ id });
  }

  // Add methods to create, update, and delete products as needed
}
