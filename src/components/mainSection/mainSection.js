import React, { useState } from "react";
import { ExampleMap } from "../anotherMap";
import { Radio } from "semantic-ui-react";
import "./mainSection.scss";
import { places } from "../../common/places";
import { MarkerDescription } from "../markerDescrition/markerDescrition";

const MyToggle = () => <Radio toggle={true} defaultChecked={false} />;
// const newCenter1 = GoogleMap.onCenterChange({ lat: 50.436437, lng: 30.512129 });
// const newCenter2 = GoogleMap.panTo({
//   lat: 50.436437,
//   lng: 30.512129,
// });

export const MainSection = ({ query }) => {
  const [visible, setVisible] = useState(false);
  const visibility = visible ? "" : "mapHide";
  const [bigBasis, setBigBasis] = useState(true);
  const basisSettings = bigBasis ? "bigBasis" : "";
  const mapToggle = () => {
    setVisible(!visible);
    setBigBasis(!bigBasis);
  };
  const [myCenter, setMyCenter] = useState({ lat: 50.450515, lng: 30.523006 });

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
            {query.length === 0 &&
              places.map((elem, i) => (
                <MarkerDescription
                  key={i + elem.city}
                  city={elem.city}
                  title={elem.title}
                  courses={elem.description.courses}
                  price={elem.price}
                  imgArr={elem.slidesImg}
                  myCenter={myCenter}
                  setMyCenter={setMyCenter}
                  coord={elem.coord}
                />
              ))}
            {query.length > 0 &&
              places.filter((item) =>
                item.city.toLowerCase().includes(query.toLowerCase())
              ).length === 0 && <span>No match results</span>}

            {query.length > 0 &&
              places.filter((item) =>
                item.city.toLowerCase().includes(query.toLowerCase())
              ).length > 0 &&
              places
                .filter((item) =>
                  item.city.toLowerCase().includes(query.toLowerCase())
                )
                .map((elem, i) => (
                  <MarkerDescription
                    key={i + elem.city}
                    city={elem.city}
                    title={elem.title}
                    courses={elem.description.courses}
                    price={elem.price}
                    imgArr={elem.slidesImg}
                  />
                ))}
          </div>
          <div className={"mapSide sides " + visibility}>
            <ExampleMap myCenter={myCenter} setMyCenter={setMyCenter} />
          </div>
        </div>
      </div>
    </section>
  );
};
