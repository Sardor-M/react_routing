import { dataSource } from "../database/db";
import { Runner } from "../entity/Runner";
import { Request } from "express";

export function getRepository() {
  return dataSource.getRepository(Runner);
}

export function getIdFromRequest(req: Request): number {
  return Number(req.params.id);
}
