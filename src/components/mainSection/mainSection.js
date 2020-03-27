import React, { useState } from "react";
import ExampleMap from "../anotherMap";
import { Radio } from "semantic-ui-react";
import "./mainSection.scss";
import { MyCarousel } from "../carousel/carousel";
import GoogleMap from "react-maps-google";

const MyToggle = () => <Radio toggle={true} defaultChecked={false} />;
// const newCenter1 = GoogleMap.onCenterChange({ lat: 50.436437, lng: 30.512129 });
const newCenter2 = GoogleMap.panTo({
  lat: 50.436437,
  lng: 30.512129,
});

export const MainSection = () => {
  const [visible, setVisible] = useState(false);
  const visibility = visible ? "" : "mapHide";
  const [bigBasis, setBigBasis] = useState(true);
  const basisSettings = bigBasis ? "bigBasis" : "";
  const mapToggle = () => {
    setVisible(!visible);
    setBigBasis(!bigBasis);
  };

  return (
    <section className="main">
      <div className="sectionContainer">
        <div className="firstRow sectionRow">
          <div className="filters">
            <button className="filter">Date</button>
            <button className="filter">Quantities</button>
            <button className="filter">Type</button>
            <button className="filter">Home type</button>
            <button className="filter">Price</button>
            <button className="filter">Momental</button>
            <button className="filter">Another Filters</button>
          </div>
          <div className="mapVisible" onClick={mapToggle}>
            <span>Show map</span>
            <MyToggle />
          </div>
        </div>
        <div className="secondRow sectionRow">
          <div className={"searchResults sides " + basisSettings}>
            <div className="markerPlace">
              <div className="picturePart">
                <MyCarousel
                  firstImgPath={"./img/firstCarFirstSl.jpeg"}
                  secondImgPath={"./img/firstCarSecSl.jpeg"}
                />
              </div>
              <div className="markerDescription" onClick={"newCenter1"}>
                <div className="flexWrap">
                  <h5 className="city">Kiev</h5>
                  <h3 className="name">PowerCode Academy</h3>
                  <ul className="courses">
                    <li className="courseName">Front-End</li>
                    <li className="courseName">PHP</li>
                    <li className="courseName">It project management</li>
                    <li className="courseName">Web-design</li>
                  </ul>
                  <span className="price">8400 uah</span>
                </div>
              </div>
            </div>
            <div className="markerPlace">
              <div className="picturePart">
                <MyCarousel
                  firstImgPath={"./img/secCarFirstSl.jpeg"}
                  secondImgPath={"./img/secCarSecSl.jpeg"}
                />
              </div>
              <div className="markerDescription" onClick={newCenter2}>
                <div className="flexWrap">
                  <h5 className="city">Zaporozhye</h5>
                  <h3 className="name">PowerCode Academy</h3>
                  <ul className="courses">
                    <li className="courseName">Front-End</li>
                    <li className="courseName">QA</li>
                    <li className="courseName">Basics of programming</li>
                  </ul>
                  <span className="price">8400 uah</span>
                </div>
              </div>
            </div>
          </div>
          <div className={"mapSide sides " + visibility}>
            <ExampleMap />
          </div>
        </div>
      </div>
    </section>
  );
};
