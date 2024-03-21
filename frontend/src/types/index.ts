
export interface Reviews {
    id: number;
    title: string;
    description: string;
    rating: number;
    event: number
}
export interface Events {
  imageUrl: string;
  type: string;
  name: string;
  price: number;
  description: string;
  id: number;
  upcomingId: string;
}

export interface GetEvent {
  id: string;
}
export interface HomePageProps {
    images: string[];
    interval?: number;
}
export interface Auth extends GetEvent {
  email: string;
  password: string;
  token: string;
}
export interface ContactPageProps {
    name: string;
    email: string;
    city: string;
    country: string;
    message: string;
}
export interface TextProps {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
    color?: string
    position?: "absolute" | "abstract"
}