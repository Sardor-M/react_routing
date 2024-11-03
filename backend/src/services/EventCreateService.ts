import { EventRepository } from "../repositories/EventRepository";
import { CreateEventDto } from "../types/CreateEventDto";
import { User } from "../entity/User";
import { Event } from "../entity/Event";

// to create a new event, we need to inject the EventRepository
export class EventCreateService {
  constructor(
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
