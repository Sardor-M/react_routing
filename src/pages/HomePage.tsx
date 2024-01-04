import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { Link } from "react-router-dom";

interface SlideData {
  image: string;
  title: string;
  description: string;
  date: string;
}
interface ArrowProps extends CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SampleNextArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};

const Homepage: React.FC = () => {
  const slideData: SlideData[] = [
    {
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGV2ZW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      title: "Run with us",
      description:
        "If you want to run, run a mile with us. If you want to experience a different life, run a marathon with a community.",
      date: "04/01/2023",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  //   console.log(CarouselComponent.);

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {slideData.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.image}
              alt={slide.title}
              className="carousel-image"
            />
            <div className="carousel-content">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <span>{slide.date}</span>
              {/* <Link className="link-button" to="/register">
                            Find your buddy
                        </Link> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Homepage;

// <div className="home-container">
//   <h1>
//     If you want to run, run a mile with us. If you want to experience a
//     different life, run a marathon with a community.
//   </h1>
//   <p>
//     {" "}
//     Add one mile everyday to your daily streak of running challenge and be
//     part of the running community.{" "}
//   </p>
//   <Link className="link-button" to="/register">
//     {" "}
//     Find your buddy
//   </Link>
// </div>
