import { Service } from "typedi";
import { EventRepository } from "../repositories/EventRepository";
import { InjectRepository } from "typeorm-typedi-extensions";
import { CreateEventDto } from "../types/CreateEventDto";
import { User } from "../entity/User";
import { Event } from "../entity/Event";

// to create a new event, we need to inject the EventRepository
@Service()
export class EventCreateService {
  constructor(
    @InjectRepository(EventRepository)
    private readonly eventRepository: EventRepository
  ) {}

  async createEvent(eventData: CreateEventDto, user: User): Promise<Event> {
    const event = this.eventRepository.create({
      ...eventData,
      creator: user,
    });

    return this.eventRepository.save(event);
  }
}
