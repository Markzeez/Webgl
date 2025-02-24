import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN"; // Replace with your token

const GeoScene: React.FC = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "webgl-container",
      style: "mapbox://styles/mapbox/streets-v11", // Change style as needed
      center: [-74.006, 40.7128], // Coordinates for New York City
      zoom: 5,
    });

    return () => map.remove();
  }, []);

  return <div id="webgl-container" className="h-screen w-full"></div>;
};

export default GeoScene;
