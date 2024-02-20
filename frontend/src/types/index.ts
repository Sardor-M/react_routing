
export interface Reviews {
    id: number;
    title: string;
    description: string;
    rating: number;
    event: number
}
export interface UpcomingEvents {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    type: string;
  }

  export interface EventCategory {
    id: number;
    eventType: string;
    date: number;
    location: string;
    distanceLength: number;
  }