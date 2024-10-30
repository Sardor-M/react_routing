import { Request, Response } from "express";
import { Runner } from "../../../entity/Runner";
import { dataSource } from "../../../database/db";
import { getIdFromRequest } from "../../../repositories/ProductRepository";
import { EventCreateService } from "../../../services/EventCreateService";
import { User } from "../../../entity/User";
import { CreateEventDto } from "../../../types/CreateEventDto";
import { Event } from "../../../entity/Event";
import { EventRegistration } from "../../../entity/EventRegistration";
import { EventRegisterService } from "../../../services/EventRegisterService";
import { UserRequestInfo } from "../../../types/userRequest";
import { getcodeLocation } from "../../../services/EventGeoLocation";

export class EventController {

  private eventService: EventCreateService;
  private eventRegistrationService: EventRegisterService;


  constructor() {
    this.eventService = new EventCreateService(dataSource.getRepository(Event));
    this.eventRegistrationService = new EventRegisterService(dataSource.getRepository(EventRegistration));
  }

  async getAllRunners(req: Request, res: Response) {
    try {
      const runnerRepository = dataSource.getRepository(Runner);
      const runners = await runnerRepository.find();
      console.log("Runners data in the response: ", runnerRepository, runners);

      if (!runners || runners.length === 0) {
        res
          .status(404)
          .json({ message: "No Runners found from the server is an error" });
        return;
      }

      return res.json(runners);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error fetching runners from the database" });
    }
  }

  async getFilteredEvent(req: Request, res: Response) {
    const { category, month, eventType, reviewScore, location, date, price } =
      req.body;
    const eventsRepository = dataSource.getRepository(Runner);

    try {
      let query = eventsRepository.createQueryBuilder("event");

      const filters = [
        { field: "category", values: category },
        { field: "month", values: month },
        { field: "eventType", values: eventType },
        { field: "reviewScore", values: reviewScore },
        { field: "location", values: location },
        { field: "date", values: date },
        { field: "price", values: price },
      ];

      // will filter the events dynamically
      filters.forEach((filter) => {
        if (filter.values && filter.values.length > 0) {
          query = query.andWhere(
            `event.${filter.field} IN (:...${filter.field})`,
            { [filter.field]: filter.values }
          );
        }
      });

      // Limit the number of events to 50 events
      query = query.take(50);

      const events = await query.getMany();

      const runnersWithCoordinates = await Promise.all(
        events.map(async (event) => {
          if (event.location) {
            try {
              const { latitude, longitude } = (await getcodeLocation(
                event.location
              )) as { latitude: number; longitude: number };
              return { ...event, latitude, longitude };
            } catch (error) {
              console.error(
                `Error geocoding location for runner ${event.id}:`,
                error
              );
              return event; // return the evnet without coordinates
            }
          } else {
            return event; // no location provided for the event
          }
        })
      );
      res.json(runnersWithCoordinates);

      // res.json(events);

      console.log("Filtered Event:", events);
    } catch (error) {
      console.error("There was error fetching the data", error);
      res.status(500).json({
        message: "Error fetching events",
        error: (error as Error).message,
      });
    }
  }

  async getRunnerById(req: Request, res: Response) {
    const id = getIdFromRequest(req);
    const runnerRepository = dataSource.getRepository(Runner);
    const runner = await runnerRepository.findOne({ where: { id: id } });

    if (runner) {
      res.json(runner);
    } else {
      res.status(404).json({ message: "Runner not found" });
    }
  }

  async getUpcomingRunningEvents(req: Request, res: Response) {
    // Get the filter value from the query parameter
    const typeFilter = req.query.type as string;
    const runnerRepository = dataSource.getRepository(Runner);
    const runners = await runnerRepository.find();
    let upcomingEvents = runners.map(
      ({ id, date, category, location, title, price, imageUrl }) => {
        return {
          id,
          date,
          category,
          location,
          title,
          price,
          imageUrl,
        };
      }
    );

    if (typeFilter) {
      upcomingEvents = upcomingEvents.filter(
        (event) => event.category === typeFilter
      );
    }

    res.json(upcomingEvents);
  }

  async getUpcomingRunningEventsById(
    req: Request,
    res: Response
  ) {
    const id = getIdFromRequest(req);
    const runnerRepository = dataSource.getRepository(Runner);
    const runners = await runnerRepository.find();
    const upcomingRunningEventId = runners.find((r) => r.id === id);

    if (upcomingRunningEventId) {
      res.json(upcomingRunningEventId);
    } else {
      res.status(404).json({ message: "Runner not found" });
    }
  }

  // this handles the event creation
  async createAnEvents(req: UserRequestInfo, res: Response) {
    // const eventService = new EventCreateService(dataSource.getRepository(Event));

    try {
      const user: User = req.user as User;
      const eventData: CreateEventDto = req.body;

      const createdEvent = await this.eventService.createEvent(eventData, user);
      return res.status(201).json(createdEvent);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error creating the event: ", error });
    }
  }

  // this will register the event
  async registerForEvent(req: UserRequestInfo, res: Response) {
    try {
      const user = req.user as User;
      const eventId = parseInt(req.params.id);

      const registration = await this.eventRegistrationService.registerEvent(
        eventId,
        user
      );
      return res.status(201).json(registration);
    } catch (error) {
      console.error("Error regsirtering for Event: ", error);
      return res.status(500).json({ message: "Error registering for the event" });
    }
  }
}
