import classes from "./Nav.module.css";
import InputText from "../home/form/input-text/InputText";
import InputDate from "../home/form/input-date/InputDate";
import { useDispatch } from "react-redux";
import { getCities, getFlights } from "@/store/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Nav() {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights.flights);
  const cities = useSelector((state) => state.flights.cities);

  useEffect(() => {
    if (!flights.length > 0) {
      dispatch(getFlights());
      console.log("Fetching flights...");
    }
    if (!cities.length > 0) {
      dispatch(getCities());
      console.log("Fetching cities...");
    }
  }, [dispatch, cities, flights]);
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
