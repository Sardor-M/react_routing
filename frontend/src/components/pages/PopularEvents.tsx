import { PopularEventsCarousel } from "../organisms/PopularEventCarousel";
import location from "../../assets/images/card_icon/location.svg";
import { ReactComponent as LocationIcon } from "../../assets/images/card_icon/location.svg";
import { ReactComponent as PriceIcon } from "../../assets/images/card_icon/ticket.svg";
import shortRun from "../../assets/images/card/short_runs.jpg";
import marathon from "../../assets/images/card/marathons.jpg";
import swimming from "../../assets/images/card/swimmings.jpg";
import triathlon from "../../assets/images/card/triathlon.jpg";
import { v4 as uuid } from "uuid";

interface PopularEventsProps {
  imageSrc: string;
  date: string;
  eventName: string;
  location: string;
  priceRange: string;
  PriceIcon: JSX.Element;
  LocationIcon: JSX.Element;
}

const popularEvents = [
  {
    imageSrc: triathlon,
    date: "Sunday, 10 Oct 2024",
    eventName: "Triathlon ",
    location: "Sokcho",
    priceRange: "$10.00",
    src: location,
    alt: "location",
    width: "20px",
    height: "20px",
    LocationIcon: <LocationIcon width="15px" height="15px" />,
    PriceIcon: <PriceIcon width="15px" height="15px" />,
  },
  {
    imageSrc: shortRun,
    date: "Tuesday, 11 Oct 2024",
    eventName: "Short Run",
    location: "Busan",
    priceRange: "$6.00",
    src: location,
    alt: "location",
    width: "20px",
    height: "20px",
    LocationIcon: <LocationIcon width="15px" height="15px" />,
    PriceIcon: <PriceIcon width="15px" height="15px" />,
  },
  {
    imageSrc: marathon,
    date: "Wednesday, 12 Oct 2024",
    eventName: "Marathon",
    location: "Seoul",
    priceRange: "Free",
    src: location,
    alt: "location",
    width: "20px",
    height: "20px",
    LocationIcon: <LocationIcon width="15px" height="15px" />,
    PriceIcon: <PriceIcon width="15px" height="15px" />,
  },
  {
    imageSrc: swimming,
    date: "Thursday, 13 Oct 2024",
    eventName: "Swimming",
    location: "Seoul",
    priceRange: "$5.00",
    src: location,
    alt: "location",
    width: "20px",
    height: "20px",
    LocationIcon: <LocationIcon width="15px" height="15px" />,
    PriceIcon: <PriceIcon width="15px" height="15px" />,
  },
  {
    imageSrc: triathlon,
    date: "Friday, 14 Oct 2024",
    eventName: "Full Marathon",
    location: "Daegu",
    priceRange: "Free",
    src: location,
    alt: "location",
    width: "20px",
    height: "20px",
    LocationIcon: <LocationIcon width="15px" height="15px" />,
    PriceIcon: <PriceIcon width="15px" height="15px" />,
  },
];

// fucntion to assign an unique id to each object;
const assignUniqueId = (items: Array<PopularEventsProps>) => {
  return items.map((item) => {
    return { ...item, id: uuid() };
  });
};

export const PopularEvents: React.FC = () => {
  // storing the popular events each assigned to an unique id
  const eventsWithIDs = assignUniqueId(popularEvents);

  return (
    <div>
      <PopularEventsCarousel events={eventsWithIDs} />
    </div>
  );
};
