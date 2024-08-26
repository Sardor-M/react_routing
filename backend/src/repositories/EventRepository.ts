import { Repository } from "typeorm";
import { Event } from "../entity/Event";

export class EventRepository extends Repository<Event> {}
