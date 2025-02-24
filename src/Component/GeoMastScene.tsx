import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const GeoScene: React.FC = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "webgl-container",
      style: "mapbox://styles/mapbox/streets-v11", // Change style as needed
      center: [longitude, latitude],
      zoom: 5,
    });

    return () => map.remove();
  }, []);

  return <div id="webgl-container" className="h-screen w-full"></div>;
};

export default GeoScene;
