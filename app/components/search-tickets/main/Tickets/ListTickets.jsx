import classes from "./ListTickets.module.css";
import { useContext } from "react";
import { TravelInfoContext } from "@/store/travelInfoContext";
import FLIGHTS from "@/store/flights";

export default function ListTickets() {
  const { fromInfo, toInfo, departureInfo, returnInfo, baggage, passengers } =
    useContext(TravelInfoContext);

  let availableFlightsFrom = [];
  let availableFlightsTo = [];

  FLIGHTS.map((itemFlights) => {
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
      availableFlights.push(item);
    }
  });

  console.log(availableFlights);

  return;
}
