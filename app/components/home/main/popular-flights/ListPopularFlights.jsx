import ItemPopularFlights from "./ItemPopularFlights";
import classes from "./ListPopularFlights.module.css";
import POPULAR_FLIGHTS from "@/store/popularFlights";

export default function ListPopularFlights() {
  return (
    <div className={classes.listPopularFlights}>
      {POPULAR_FLIGHTS.map((item) => (
        <ItemPopularFlights
          cityFromId={item.from}
          cityToId={item.to}
          key={`${item.from}${item.to}`}
        />
      ))}
    </div>
  );
}
