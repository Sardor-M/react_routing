import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { Link } from "react-router-dom";
import "../carousel.css";

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
        "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Run with us",
      description:
        "If you want to run, run a mile with us. If you want to experience a different life, run a marathon with a community.",
      date: "04/01/2023",
    },
    {
      image:
        " https://images.unsplash.com/photo-1695264424367-a61e7988200b?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    autoplay: false,
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
          <div>
            <div key={index}>
              <img
                src={slide.image}
                alt={slide.title}
                style={{ width: "100%", display: "block" }}
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
