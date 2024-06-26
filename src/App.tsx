import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

import "./App.css";

function App() {
  const viewDivRef = useRef(null);
  useEffect(() => {
    if (viewDivRef.current) {
      const map = new Map({
        basemap: "topo-vector",
      });

      new MapView({
        container: viewDivRef.current as HTMLDivElement,
        map,
        zoom: 13,
        center: [55, 25], // longitude, latitude
      });
    }
  }, []);
  return <div className="viewDiv" ref={viewDivRef} />;
}
export default App;
