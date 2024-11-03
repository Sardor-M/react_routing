// now i have to figure out how to create an event registration service

import { Event } from "../entity/Event";
import { EventRegistrationRepository } from "../repositories/EventRegistrationRepository";
import { User } from "../entity/User";
import { EventRegistration } from "../entity/EventRegistration";

export class EventRegisterService {
  constructor(
    private readonly eventRegistrationRepository: EventRegistrationRepository
  ) {}

  async registerEvent(eventId: number, user: User): Promise<EventRegistration> {
    const registration = this.eventRegistrationRepository.create({
      event: { id: eventId } as Event, // setting up the event
      user,
      registrationDate: new Date(),
    });

    return this.eventRegistrationRepository.save(registration);
  }
}
