import classes from "./Nav.module.css";
import InputText from "../home/form/input-text/InputText";
import InputDate from "../home/form/input-date/InputDate";
import { useDispatch } from "react-redux";
import { getCities, getFlights } from "@/store/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Nav() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.flights.cities);

  useEffect(() => {
    if (!cities.length > 0) {
      dispatch(getCities());
      dispatch(getFlights());
      console.log("Fetching...");
    }
  }, [dispatch, cities]);
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
