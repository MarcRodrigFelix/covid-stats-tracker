import React from 'react'
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = () => {
  return (
    <div>
      <ComposableMap projection={geoAlbersUsa}>
        <Geographies geography={geo}>

        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart