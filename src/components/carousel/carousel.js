import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const MyCarousel = ({ imgArr }) => {
  return (
    <Carousel autoPlay={false} showThumbs={false} infiniteLoop={true}>
      {imgArr.map((elem, i) => (
        <div key={i + "slide"}>
          <img src={elem} alt={"slide1"} />
        </div>
      ))}
    </Carousel>
  );
};
