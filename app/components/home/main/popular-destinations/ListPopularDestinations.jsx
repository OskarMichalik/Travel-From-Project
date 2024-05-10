import ItemPopularDestination from "./ItemPopularDestination";
import classes from "./ListPopularDestinations.module.css";

export default function ListPopularDestinations({
  destinations,
  itemNearestCity,
}) {
  return (
    <div className={classes.listPopularDestinations}>
      {destinations.map((item) => (
        <ItemPopularDestination
          city={item}
          key={item.id}
          nearestCity={itemNearestCity}
        />
      ))}
    </div>
  );
}
