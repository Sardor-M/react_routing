"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpcomingRunningEventsById = exports.getUpcomingRunningEvents = exports.getRunnerById = exports.getAllRunners = void 0;
const runners = [
    {
        id: 1,
        name: "Marathon",
        price: 60,
        description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
        imageUrl: "https://images.unsplash.com/photo-1613937574892-25f441264a09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hcmF0aG9ufGVufDB8fDB8fHww",
        type: "marathon",
        upcomingId: "11",
    },
    {
        id: 2,
        name: "Swimming",
        price: 80,
        description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
        imageUrl: "https://images.unsplash.com/photo-1600965962102-9d260a71890d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dpbW1pbmd8ZW58MHx8MHx8fDA%3D",
        type: "swimming",
        upcomingId: "22",
    },
    {
        id: 3,
        name: "Short Distance",
        price: 100,
        description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
        imageUrl: "https://images.unsplash.com/photo-1590847330116-ea94fb93eac3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHJ1bm5pbmd8ZW58MHx8MHx8fDA%3D",
        type: "short",
        upcomingId: "33",
    },
    {
        id: 4,
        name: "Distance Running",
        price: 65,
        description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
        imageUrl: "https://images.unsplash.com/photo-1586919257548-66ec29b8c7ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHJ1bm5pbmd8ZW58MHx8MHx8fDA%3D",
        type: "short",
        upcomingId: "44",
    },
    {
        id: 5,
        name: "Marathon",
        price: 120,
        description: "The Cruiser is a van that is perfect for those who love to travel. It has a spacious interior and plenty of storage space. The Cruiser also has an outdoor shower, so you can enjoy the outdoors without having to worry about getting dirty.",
        imageUrl: "https://images.unsplash.com/photo-1613937574892-25f441264a09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hcmF0aG9ufGVufDB8fDB8fHww",
        type: "marathon",
        upcomingId: "55",
    },
    {
        id: 6,
        name: "Short Distance",
        price: 70,
        description: "The Traveler is a van that was designed for those who love to travel. It has a spacious interior with plenty of room for all your gear, and it's easy to drive. You'll be able to explore the world in comfort and style with this van!",
        imageUrl: "https://plus.unsplash.com/premium_photo-1663127253952-89bd042bd841?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hcmF0aG9ufGVufDB8fDB8fHww",
        type: "short",
        upcomingId: "66",
    },
    {
        id: 8,
        name: "Swimming",
        price: 110,
        description: "The Voyager is a van that was designed for those who love to travel. It has a spacious interior with plenty of room for all your gear, and it's easy to drive. You'll be able to explore the world in comfort and style with this van!",
        imageUrl: "https://images.unsplash.com/photo-1600965962102-9d260a71890d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dpbW1pbmd8ZW58MHx8MHx8fDA%3D",
        type: "swimming",
        upcomingId: "88",
    },
];
// const runners = await Runner.find(); // Fetch all runners from your data source
// if (!runners || runners.length === 0){
//   res.status(404).json({ message: "No runners found is an error from the server" });
//   return;
// }
// res.json(runners);
function getAllRunners(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!runners || runners.length === 0) {
            res
                .status(404)
                .json({ message: "No Runners found from the server is an error" });
            return;
        }
        res.json(runners);
    });
}
exports.getAllRunners = getAllRunners;
function getRunnerById(req, res) {
    const id = Number(req.params.id);
    const runner = runners.find((r) => r.id === id);
    runner
        ? res.json(runner)
        : res.status(404).json({ message: "Runner not found" });
}
exports.getRunnerById = getRunnerById;
function getUpcomingRunningEvents(req, res) {
    // Get the filter value from the query parameter
    const typeFilter = req.query.type;
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
        upcomingEvents = upcomingEvents.filter((event) => event.type === typeFilter);
    }
    res.json(upcomingEvents);
}
exports.getUpcomingRunningEvents = getUpcomingRunningEvents;
function getUpcomingRunningEventsById(req, res) {
    const id = Number(req.params.id);
    const upcomingRunningEventId = runners.find((r) => r.id === id);
    upcomingRunningEventId
        ? res.json(upcomingRunningEventId)
        : res.status(404).json({ message: "Runner not found" });
}
exports.getUpcomingRunningEventsById = getUpcomingRunningEventsById;
//# sourceMappingURL=runners.controller.js.map