export interface Runner {
    id: number;
    name: string;
    price: number;
    type: string;
    description: string;
    imageUrl: string;
    upcomingId: string;
}
  
export interface Reviews {
    id: number;
    title: string;
    comment: string;
    rating: number;
    eventSelect: number
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