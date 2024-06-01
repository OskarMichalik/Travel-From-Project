import classes from "./ListTickets.module.css";
import { useSelector } from "react-redux";
import MapComponent from "../Map/MapComponent";
import { APIProvider } from "@vis.gl/react-google-maps";
import MapMenu from "../Map/MapMenu";
import { useState } from "react";
import { calculateDistance } from "@/app/util/locationFn";
import SortMenu from "./SortMenu";
import ListSortedTickets from "./ListSortedTickets";

export default function ListTickets() {
  const flightsAreLoading = useSelector(
    (state) => state.checks.flightsAreLoading
  );
  const fromInfo = useSelector((state) => state.form.fromInfo);
  const toInfo = useSelector((state) => state.form.toInfo);
  const flights = useSelector((state) => state.flights.flights);
  const places = useSelector((state) => state.flights.cities);
  const baggage = useSelector((state) => state.form.baggage);
  const passengers = useSelector((state) => state.form.passengers);
  let fastestFlights = [];

  const [isSorted, setIsSorted] = useState("cheapest");

  function toggleSort(value) {
    setIsSorted(value);
  }

  if (flightsAreLoading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }
  let availableFlightsFrom = [];
  let availableFlightsTo = [];

  flights.map((itemFlights) => {
    fromInfo.map((itemFrom) => {
      if (itemFlights.from === itemFrom.id) {
        availableFlightsFrom.push(itemFlights);
      }
    });
    toInfo.map((itemTo) => {
      if (itemFlights.to === itemTo.id) {
        availableFlightsTo.push(itemFlights);
      }
    });
  });

  const availableFlights = [];

  availableFlightsFrom.map((item) => {
    if (availableFlightsTo.includes(item)) {
      const fromCity = places.filter(
        (itemPlace) => itemPlace.id === item.from
      )[0];
      const toCity = places.filter((itemPlace) => itemPlace.id === item.to)[0];

      const distance = calculateDistance(
        fromCity.lat,
        fromCity.lon,
        toCity.lat,
        toCity.lon
      );
      const travelTimeRaw = distance / 900;
      const travelTimeHours = Math.floor(distance / 900);
      const travelTimeMinutes = Math.floor(
        (travelTimeRaw - travelTimeHours) * 60
      );

      const obj = {
        ...item,
        travelTimeRaw,
        travelTimeHours,
        travelTimeMinutes,
      };
      availableFlights.push(obj);
    }
  });
  const cheapestFlights = [
    ...availableFlights.sort((a, b) => a.price - b.price),
  ];
  const cheapestFlight = availableFlights.sort((a, b) => a.price - b.price)[0];

  const defaultCenter = { lat: fromInfo[0].lat, lng: fromInfo[0].lon };

  fastestFlights = [
    ...availableFlights.sort((a, b) => a.travelTimeRaw - b.travelTimeRaw),
  ];

  const bestFlights = [
    ...availableFlights.sort((a, b) => {
      const scoreA = 0.001 * a.price + 0.1 * a.travelTimeRaw;
      const scoreB = 0.001 * b.price + 0.1 * b.travelTimeRaw;
      return scoreA - scoreB;
    }),
  ];
  return (
    <div className={classes.ticketsDiv}>
      <MapMenu>
        <APIProvider apiKey={process.env.API_KEY}>
          <MapComponent
            defaultCenter={defaultCenter}
            places={places}
            availableFlights={availableFlights}
          />
        </APIProvider>
      </MapMenu>
      <SortMenu
        isSorted={isSorted}
        toggleSort={toggleSort}
        availableFlights={availableFlights}
        passengers={passengers}
        baggage={baggage}
        places={places}
        cheapestFlight={cheapestFlight}
        fastestFlights={fastestFlights}
        bestFlights={bestFlights}
      />
      <ListSortedTickets
        flights={
          isSorted === "cheapest"
            ? cheapestFlights
            : isSorted === "fastest"
            ? fastestFlights
            : isSorted === "best" && bestFlights
        }
      />
    </div>
  );
}
