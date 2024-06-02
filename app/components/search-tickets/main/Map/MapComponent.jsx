"use client";
import classes from "./MapComponent.module.css";
import {
  AdvancedMarker,
  Map,
  Pin,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { useEffect } from "react";
import { useState } from "react";

export default function MapComponent({
  defaultCenter,
  places,
  availableFlights,
}) {
  const map = useMap();
  const maps = useMapsLibrary("maps");

  const [pinFromLocation, setPinFromLocation] = useState([]);
  const [pinToLocation, setPinToLocation] = useState([]);

  useEffect(() => {
    if (map && maps) {
      let polylines = [];
      let pinFromLocationInside = [];
      let pinToLocationInside = [];
      setPinToLocation([]);
      setPinFromLocation([]);

      for (let i = 0; i < availableFlights.length; i++) {
        let fromLocation = places.find(
          (item) => item.id === availableFlights[i].from
        );
        let toLocation = places.find(
          (item) => item.id === availableFlights[i].to
        );

        let line = [
          { lat: fromLocation.lat, lng: fromLocation.lon },
          { lat: toLocation.lat, lng: toLocation.lon },
        ];

        let flightPath = new maps.Polyline({
          path: line,
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        });

        flightPath.setMap(map);
        polylines.push(flightPath);

        if (
          !pinFromLocationInside.some(
            (loc) =>
              loc.lat === fromLocation.lat && loc.lng === fromLocation.lon
          )
        ) {
          pinFromLocationInside.push({
            lat: fromLocation.lat,
            lng: fromLocation.lon,
          });
        }
        if (
          !pinToLocationInside.some(
            (loc) => loc.lat === toLocation.lat && loc.lng === toLocation.lon
          )
        ) {
          pinToLocationInside.push({
            lat: toLocation.lat,
            lng: toLocation.lon,
          });
        }
      }

      setPinFromLocation(pinFromLocationInside);
      setPinToLocation(pinToLocationInside);

      return () => {
        polylines.forEach((polyline) => polyline.setMap(null));
      };
    }
  }, [map, maps, places, availableFlights]);

  if (!maps) {
    return null;
  }

  return (
    <div className={classes.mapDiv}>
      <Map
        defaultZoom={5}
        mapId={process.env.MAP_ID}
        defaultCenter={defaultCenter}
        disableDefaultUI={true}
        gestureHandling={"cooperative"}
      >
        {pinFromLocation.map((pin, index) => (
          <AdvancedMarker key={index} position={{ lat: pin.lat, lng: pin.lng }}>
            <Pin
              background={"#f9971e"}
              borderColor={"#9a5c10"}
              glyphColor={"#9a5c10"}
            />
          </AdvancedMarker>
        ))}
        {pinToLocation.map((pin, index) => (
          <AdvancedMarker key={index} position={{ lat: pin.lat, lng: pin.lng }}>
            <Pin
              background={"#00a991"}
              borderColor={"#007e6d"}
              glyphColor={"#007e6d"}
            />
          </AdvancedMarker>
        ))}
      </Map>
    </div>
  );
}
