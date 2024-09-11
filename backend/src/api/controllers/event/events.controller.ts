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

// const GEOCODING_API_KEY = process.env.GEOCODING_API_KEY;

// async function getGeoLocation(location: string) {
//   const response = await axios.get(
//     "https://maps.googleapis.com/maps/api/geocode/json",
//     {
//       params: {
//         address: location,
//         key: GEOCODING_API_KEY,
//       },
//     }
//   );

//   const { lat, lng } = response.data.results[0].geometry.location;
//   return { lat, lng };
// }

export async function getAllRunners(req: Request, res: Response) {
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
    res.json(runners);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching runners from the database" });
  }
}

export async function getFilteredEvent(req: Request, res: Response) {
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

    const events = await query.getMany();

    // const geoLocationEvents = await Promise.all(
    //   events.map(async (event) => {
    //     const { lat, lng } = await getGeoLocation(event.location);
    //     return {
    //       ...event,
    //       latitude: lat,
    //       langitude,
    //     };
    //   })
    // );

    res.json(events);

    console.log("Filtered Event:", events);
  } catch (error) {
    console.error("There was error fetching the data", error);
    res.status(500).json({ message: "Error fetching events" });
  }
}

export async function getRunnerById(req: Request, res: Response) {
  const id = getIdFromRequest(req);
  const runnerRepository = dataSource.getRepository(Runner);
  const runner = await runnerRepository.findOne({ where: { id: id } });

  if (runner) {
    res.json(runner);
  } else {
    res.status(404).json({ message: "Runner not found" });
  }
}

export async function getUpcomingRunningEvents(req: Request, res: Response) {
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

export async function getUpcomingRunningEventsById(
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

const eventService = new EventCreateService(dataSource.getRepository(Event));
const eventRegistrationService = new EventRegisterService(
  dataSource.getRepository(EventRegistration)
);

// this handles the event creation
export async function createAnEvents(req: UserRequestInfo, res: Response) {
  // const eventService = new EventCreateService(dataSource.getRepository(Event));

  try {
    const user: User = req.user as User;
    const eventData: CreateEventDto = req.body;

    const createdEvent = await eventService.createEvent(eventData, user);
    return res.status(201).json(createdEvent);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creating the event: ", error });
  }
}

// this will register the event
export async function registerForEvent(req: UserRequestInfo, res: Response) {
  try {
    const user = req.user as User;
    const eventId = parseInt(req.params.id);

    const registration = await eventRegistrationService.registerEvent(
      eventId,
      user
    );
    return res.status(201).json(registration);
  } catch (error) {
    console.error("Error regsirtering for Event: ", error);
    return res.status(500).json({ message: "Error registering for the event" });
  }
}
