import { Request, Response } from "express";
import { RunnerModel } from "../models/runner.model";

const runners: RunnerModel[] = [
  {
    id: 1,
    name: "Modest Explorer",
    price: 60,
    description:
      "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
    type: "simple",
    upcomingId: "11",
  },
  {
    id: 2,
    name: "Beach Bum",
    price: 80,
    description:
      "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
    type: "rugged",
    upcomingId: "22",
  },
  {
    id: 3,
    name: "Reliable Red",
    price: 100,
    description:
      "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
    type: "luxury",
    upcomingId: "33",
  },
  {
    id: 4,
    name: "Dreamfinder",
    price: 65,
    description:
      "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
    type: "simple",
    upcomingId: "44",
  },
  {
    id: 5,
    name: "The Cruiser",
    price: 120,
    description:
      "The Cruiser is a van that is perfect for those who love to travel. It has a spacious interior and plenty of storage space. The Cruiser also has an outdoor shower, so you can enjoy the outdoors without having to worry about getting dirty.",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
    type: "luxury",
    upcomingId: "55",
  },
  {
    id: 6,
    name: "The Traveler",
    price: 70,
    description:
      "The Traveler is a van that was designed for those who love to travel. It has a spacious interior with plenty of room for all your gear, and it's easy to drive. You'll be able to explore the world in comfort and style with this van!",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/the-traveler.png",
    type: "rugged",
    upcomingId: "66",
  },
  {
    id: 7,
    name: "The Wanderer",
    price: 90,
    description:
      "The Wanderer is a van that was designed for those who love to travel. It has a spacious interior with plenty of room for all your gear, and it's easy to drive. You'll be able to explore the world in comfort and style with this van!",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/the-wanderer.png",
    type: "luxury",
    upcomingId: "77",
  },
  {
    id: 8,
    name: "The Voyager",
    price: 110,
    description:
      "The Voyager is a van that was designed for those who love to travel. It has a spacious interior with plenty of room for all your gear, and it's easy to drive. You'll be able to explore the world in comfort and style with this van!",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/the-voyager.png",
    type: "luxury",
    upcomingId: "88",
  },
];

export function getAllRunners(req: Request, res: Response) {
  res.json(runners);
}

export function getRunnerById(req: Request, res: Response) {
  const runnerId = Number(req.params.runnerId);
  const runner = runners.find((r) => r.id === runnerId);

  runner
    ? res.json(runner)
    : res.status(404).json({ message: "Runner not found" });
}

export function getUpcomingRunningEvents(req: Request, res: Response) {
  //   const upcomingId = req.query.upcomingId as string;
  //   const upcomingEvents = runners.filter((r) => r.upcomingId === upcomingId);
  const upcomingEvents = runners.map(({ name, price, imageUrl }) => ({
    name,
    price,
    imageUrl,
  }));

  res.json(upcomingEvents);
}

export function getUpcomingRunningEventsById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const upcomingRunningEventId = runners.filter((r) => r.id === id);

  res.json(upcomingRunningEventId);
}
