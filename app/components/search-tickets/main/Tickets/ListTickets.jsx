import classes from "./ListTickets.module.css";
import { useContext } from "react";
import { TravelInfoContext } from "@/store/travelInfoContext";
import FLIGHTS from "@/store/flights";
import ItemTicket from "./ItemTicket";

export default function ListTickets() {
  const { fromInfo, toInfo } = useContext(TravelInfoContext);

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

  return (
    <div className={classes.listTickets}>
      {availableFlights.map((item, index) => (
        <ItemTicket flight={item} key={index} index={index} />
      ))}
    </div>
  );
}
