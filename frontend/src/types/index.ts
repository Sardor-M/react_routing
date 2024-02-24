export interface Reviews {
  id: number;
  title: string;
  description: string;
  rating: number;
  event: number;
}

export interface Events {
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  type: string;
  upcomingId: string;
}
