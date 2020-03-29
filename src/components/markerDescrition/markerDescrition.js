import React from "react";
import { MyCarousel } from "../carousel/carousel";

export const MarkerDescription = ({ imgArr, city, title, courses, price }) => {
  return (
    <>
      <div className="markerPlace">
        <div className="picturePart">
          <MyCarousel imgArr={imgArr} />
        </div>
        <div className="markerDescription">
          <div className="flexWrap">
            <h5 className="city">{city}</h5>
            <h3 className="name">{title}</h3>
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
