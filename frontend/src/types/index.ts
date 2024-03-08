
export interface Reviews {
    id: number;
    title: string;
    description: string;
    rating: number;
    event: number
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

export interface GetEvent {
  id: string;
}


export interface Auth {
  id: number;
  email: string;
  password: string;
  token: string;
}