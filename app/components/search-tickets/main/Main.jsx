import NavBaggage from "./NavBaggage";
import classes from "./Main.module.css";
import Tickets from "./Tickets/Tickets";

export default function Main() {
  return (
    <div className={classes.main}>
      <NavBaggage />
      <Tickets />
    </div>
  );
}
