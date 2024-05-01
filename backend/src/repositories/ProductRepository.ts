import { dataSource } from "../database/db";
import { Repository, EntityTarget } from "typeorm";
// import { Product } from "../entity/Product";

export function getRepository<T>(entity: EntityTarget<T>): Repository<T> {
  return dataSource.getRepository(entity);
}

// export async function findByName(name: string) {
//   const productRepository = dataSource.getRepository(Product);
//   return productRepository.findOneBy({ name });
// }
