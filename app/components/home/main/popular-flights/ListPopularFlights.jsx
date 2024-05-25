import { useSelector } from "react-redux";
import ItemPopularFlights from "./ItemPopularFlights";
import classes from "./ListPopularFlights.module.css";

export default function ListPopularFlights() {
  const popularFlights = useSelector((state) => state.flights.popularFlights);
  const popularFlightsAreLoading = useSelector(
    (state) => state.checks.popularFlightsAreLoading
  );

  if (popularFlightsAreLoading) {
    return (
      <div className={classes.listPopularFlights}>
        <div className="loading">
          <p>Loading...</p>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.listPopularFlights}>
      {popularFlights.map((item) => (
        <ItemPopularFlights
          cityFromId={item.from}
          cityToId={item.to}
          key={`${item.from}${item.to}`}
        />
      ))}
    </div>
  );
}
