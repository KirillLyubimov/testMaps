import React from "react";
import GoogleMapReact from "google-map-react";

const CenterPoint = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

class TestMap extends React.Component {
  static defaultProps = {
    center: { lat: 50.45, lng: 30.52 },
    zoom: 11,
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <CenterPoint lat={50.450475} lng={30.523828} text={"Kyiv"} />
      </GoogleMapReact>
    );
  }
}

export default TestMap;
