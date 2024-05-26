import classes from "./ListTickets.module.css";
import ItemTicket from "./ItemTicket";
import { useSelector } from "react-redux";

export default function ListTickets() {
  const flightsAreLoading = useSelector(
    (state) => state.checks.flightsAreLoading
  );
  const fromInfo = useSelector((state) => state.form.fromInfo);
  const toInfo = useSelector((state) => state.form.toInfo);
  const flights = useSelector((state) => state.flights.flights);

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
