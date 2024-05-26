import classes from "./Nav.module.css";
import InputText from "../home/form/input-text/InputText";
import InputDate from "../home/form/input-date/InputDate";
import { useDispatch } from "react-redux";
import { getCities, getFlights } from "@/store/actions";
import { useEffect } from "react";

export default function Nav() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
    dispatch(getFlights());
  }, [dispatch]);
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
