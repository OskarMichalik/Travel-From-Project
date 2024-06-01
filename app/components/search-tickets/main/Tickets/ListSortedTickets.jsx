import classes from "./ListSortedTickets.module.css";
import ItemTicket from "./ItemTicket";

export default function ListSortedTickets({ flights }) {
  return (
    <div className={classes.listTickets}>
      {flights.map((item, index) => (
        <ItemTicket flight={item} key={index} index={index} />
      ))}
    </div>
  );
}
