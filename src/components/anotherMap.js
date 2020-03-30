import React, { Component } from "react";
import GoogleMap, { Marker } from "react-maps-google";
import { controlPosition } from "../common/mapControlPositions";

export const ExampleMap = ({ myCenter, setMyCenter }) => {
  return (
    // 50.436437, 30.512129
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
      <Marker
        position={{ lat: 50.436437, lng: 30.512129 }}
        options={{
          opacity: 1,
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
      />
      <Marker position={{ lat: 47.816065, lng: 35.170213 }} />
    </GoogleMap>
  );
};
