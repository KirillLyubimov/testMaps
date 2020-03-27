import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const MyCarousel = ({ firstImgPath, secondImgPath }) => {
  return (
    <Carousel autoPlay={false} showThumbs={false} infiniteLoop={true}>
      <div>
        <img src={firstImgPath} alt={"slide1"} />
        {/*<p className="legend">Legend 1</p>*/}
      </div>
      <div>
        <img src={secondImgPath} alt={"slide2"} />
        {/*<p className="legend">Legend 2</p>*/}
      </div>
    </Carousel>
  );
};
