export interface Reviews {
  id: number;
  title: string;
  description: string;
  rating: number;
  event: number;
}
export interface Events {
  imageUrl: string;
  category: string;
  title: string;
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
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  color?: string;
  position?: "absolute" | "abstract";
}

export interface EventCardProps {
  imageSrc?: string;
  title?: string;
  eventName?: string;
  name?: string;
  location?: string;
  price?: number;
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  objectFit?: "cover" | "contain" | "none" | "scale-down" | "fill";
  isIcon?: boolean;
  description?: string;
  category?: string;
  date?: string;
  type?: string;
}

export interface ImageProps {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  objectFit?: "cover" | "contain" | "none" | "scale-down" | "fill";
  isIcon?: boolean;
}
