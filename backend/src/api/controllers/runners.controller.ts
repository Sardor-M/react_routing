import { Request, Response } from "express";
import { Product } from "../../entity/Product";
import { dataSource } from "../../database/db";
import { getRepository, getIdFromRequest } from "../../utils/fetch";

export async function getAllRunners(req: Request, res: Response) {
  try {
    const runnerRepository = getRepository();
    const runners = await runnerRepository.find();
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

export async function getRunnerById(req: Request, res: Response) {
  const id = getIdFromRequest(req);
  const runnerRepository = dataSource.getRepository(Product);
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
  let upcomingEvents = runners.map(({ id, type, name, price, imageUrl }) => {
    return {
      id,
      type,
      name,
      price,
      imageUrl,
    };
  });

  if (typeFilter) {
    upcomingEvents = upcomingEvents.filter(
      (event) => event.type === typeFilter
    );
  }

  res.json(upcomingEvents);
}

export async function getUpcomingRunningEventsById(
  req: Request,
  res: Response
) {
  const id = getIdFromRequest(req);
  const runnerRepository = dataSource.getRepository(Product);
  const runners = await runnerRepository.find();
  const upcomingRunningEventId = runners.find((r) => r.id === id);

  upcomingRunningEventId
    ? res.json(upcomingRunningEventId)
    : res.status(404).json({ message: "Runner not found" });
}
