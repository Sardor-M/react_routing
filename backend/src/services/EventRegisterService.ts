// now i have to figure out how to create an event registration service

import { Event } from "../entity/Event";
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { EventRegistrationRepository } from "../repositories/EventRegistrationRepository";
import { User } from "../entity/User";
import { EventRegistration } from "../entity/EventRegistration";

@Service()
export class EventRegisterService {
  constructor(
    @InjectRepository(EventRegistrationRepository)
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

// import { dataSource } from "../database/db";
// import { EventRegistration } from "../entity/EventRegistration";
// import { User } from "../entity/User";
// import { Event } from "../entity/Event";

// const eventRegistrationRepository = dataSource.getRepository(EventRegistration);

// /**
//  * function to register a usr for an event.
//  * @param eventId;
//  * @param user;
//  * @returns
//  **/

// export async function registerEvent(
//   eventId: number,
//   user: User
// ): Promise<EventRegistration> {
//   const registration = eventRegistrationRepository.create({
//     event: { id: eventId } as any,
//     user,
//     registerationDate: new Date(),
//   });

//   return eventRegistrationRepository.save(registration);
// }
