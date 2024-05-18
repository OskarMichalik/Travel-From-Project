import classes from "./Nav.module.css";
import InputText from "../home/form/input-text/InputText";
import InputDate from "../home/form/input-date/InputDate";

export default function Nav() {
  return (
    <div className={classes.nav}>
      <div className={classes.bannerContent}>
        <div className={classes.flightForm}>
          <div className={classes.pathDateInfo}>
            <InputText from searchTickets />
            <InputText searchTickets />
            <InputDate departure searchTickets />
            <InputDate searchTickets />
          </div>
        </div>
      </div>
    </div>
  );
}
