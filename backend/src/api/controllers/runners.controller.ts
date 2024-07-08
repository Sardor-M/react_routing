import { Request, Response } from "express";
import { Runner } from "../../entity/Runner";
import { dataSource } from "../../database/db";
import {
  getRepository,
  getIdFromRequest,
} from "../../repositories/ProductRepository";
export async function getAllRunners(req: Request, res: Response) {
  try {
    const runnerRepository = getRepository();
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
  const { category, month, eventType, reviewScore } = req.body;
  const eventsRepository = dataSource.getRepository(Runner);

  try {
    let query = eventsRepository.createQueryBuilder("event");

    const filters = [
      { field: "category", values: category },
      { field: "month", values: month },
      { field: "eventType", values: eventType },
      { field: "reviewScore", values: reviewScore },
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

  runner
    ? res.json(runner)
    : res.status(404).json({ message: "Runner not found" });
}

export async function getUpcomingRunningEvents(req: Request, res: Response) {
  // Get the filter value from the query parameter
  const typeFilter = req.query.type as string;
  const runnerRepository = getRepository();
  const runners = await runnerRepository.find();
  let upcomingEvents = runners.map(
    ({ id, category, title, price, imageUrl }) => {
      return {
        id,
        category,
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

  upcomingRunningEventId
    ? res.json(upcomingRunningEventId)
    : res.status(404).json({ message: "Runner not found" });
}
