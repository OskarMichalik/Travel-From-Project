import ListPopularFlights from "./ListPopularFlights";
import classes from "./PopularFlights.module.css";

export default function PopularFlights() {
  return (
    <div className={classes.popularFlights}>
      <div className={classes.popularFlightsLabel}>
        <h1>Popular flights</h1>
        <p>People pick these flights the most...</p>
      </div>
      <ListPopularFlights />
    </div>
  );
}
