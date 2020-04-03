import React from "react";
import { MyCarousel } from "../carousel/carousel";

export const MarkerDescription = ({
  imgArr,
  city,
  title,
  courses,
  price,
  setMyCenter,
  myCenter,
  coord,
}) => {
  const changeCenter = () => {
    setMyCenter(coord);
  };
  return (
    <>
      <div className="markerPlace">
        <div className="picturePart">
          <MyCarousel imgArr={imgArr} />
        </div>
        <div className="markerDescription" onClick={changeCenter}>
          <div className="flexWrap">
            <h5 className="city">{city}</h5>
            <h3 className="name" onClick={changeCenter}>
              {title}
            </h3>
            <h5>Courses</h5>
            <ul className="courses">
              {courses.map((elem, i) => (
                <li className="courseName" key={i + "course" + city}>
                  {elem}
                </li>
              ))}
            </ul>
            <span className="price">{price}</span>
          </div>
        </div>
      </div>
    </>
  );
};
