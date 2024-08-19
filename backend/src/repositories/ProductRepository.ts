import { dataSource } from "../database/db";
import { Event } from "../entity/Event";
import { Request } from "express";

export function getRepository() {
  return dataSource.getRepository(Event);
}

export function getIdFromRequest(req: Request): number {
  return Number(req.params.id);
}
