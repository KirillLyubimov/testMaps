import React from "react";
import GoogleMap, { Marker } from "react-maps-google";
import { controlPosition } from "../common/mapControlPositions";
import { places } from "../common/places";

export const ExampleMap = ({ myCenter, setMyCenter }) => {
  return (

    <GoogleMap
      apiKey=""
      options={{
        center: myCenter,
        mapTypeId: "terrain",
        zoom: 18,
        fullscreenControl: false,
        panControl: true,
        zoomControl: true,
        zoomControlOptions: {
          position: controlPosition.TR,
        },
      }}
    >

      {places.map((elem, i) => (
        <Marker position={elem.coord} />
      ))}
      {/*<Marker
        position={{ lat: 50.436437, lng: 30.512129 }}
        options={{
          optimized: false,
          title: "myMarker",
          draggable: false,
          icon:
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          // label: {
          //   text: "55$",
          //   fontWeight: "bold",
          //   color: "red",
          //   fontSize: "50px"
          // }
        }}
        // onDragStart={this.markerDragStart}
        // onDragEnd={this.markerDragEnd}
      />*/}
    </GoogleMap>
  );
};
