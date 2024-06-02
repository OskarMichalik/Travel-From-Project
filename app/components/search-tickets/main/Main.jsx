import NavBaggage from "./NavBaggage";
import classes from "./Main.module.css";
import Tickets from "./Tickets/Tickets";
import UpButton from "./UpButton";

export default function Main() {
  return (
    <div className={classes.main}>
      <NavBaggage />
      <Tickets />
      <UpButton />
    </div>
  );
}
