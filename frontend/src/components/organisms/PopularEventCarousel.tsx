// Organisms/PopularEventsCarousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { PopularEventCard } from "./PopularEventCard";
import { ReactComponent as PriceIcon } from "../../assets/images/card_icon/ticket.svg";
import { ReactComponent as LocationIcon } from "../../assets/images/card_icon/location.svg";
import ArrowButtons from "../molecules/ArrowButton";

const WrapperStyledSlider = styled.div`
  margin-left: 40px;
  margin-right: 40px;
`;

const StyledSlider = styled(Slider)`
  position: relative;
  margin-top: 70px;
  .slick-slide {
    padding: 0 15px; // Add padding for slide spacing
  }
`;

export interface PopularEventsCarouselProps {
  events: Array<{
    imageSrc: string;
    date: string;
    eventName: string;
    location: string;
    priceRange: string;
    PriceIcon: JSX.Element;
    LocationIcon: JSX.Element;
  }>;
}

export const PopularEventsCarousel: React.FC<PopularEventsCarouselProps> = ({
  events,
}) => {
  const sliderRef = React.useRef<Slider>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // responsive and other settings
    nextArrow: (
      <ArrowButtons
        direction="right"
        onClick={() => sliderRef.current?.slickNext()}
      />
    ),
    prevArrow: (
      <ArrowButtons
        direction="left"
        onClick={() => sliderRef.current?.slickPrev()}
      />
    ),
  };

  return (
    <WrapperStyledSlider>
      <StyledSlider {...settings}>
        {events.map((event, idx) => (
          <div>
            <PopularEventCard
              key={idx}
              {...event}
              LocationIcon={<LocationIcon width="15px" height="15px" />}
              PriceIcon={<PriceIcon width="15px" height="15px" />}
            />
          </div>
        ))}
      </StyledSlider>
    </WrapperStyledSlider>
  );
};
