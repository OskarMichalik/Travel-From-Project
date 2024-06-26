"use client";
import classes from "./Form.module.css";
import FormHeader from "./form-header/FormHeader";
import InputText from "./input-text/InputText";
import InputDate from "./input-date/InputDate";
import InputPersonel from "./input-personel/InputPersonel";
import SubmitButton from "./submit-button/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { getCities, getPopularFlights } from "@/store/actions";
import { useEffect, useState } from "react";

export default function Form() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.flights.cities);
  const popularFlights = useSelector((state) => state.flights.popularFlights);

  const [wasSubmitted, setWasSubmitted] = useState(false);

  useEffect(() => {
    if (!cities.length > 0) {
      dispatch(getCities());
      console.log("Fetching Cities...");
    }
    if (!popularFlights.length > 0) {
      dispatch(getPopularFlights());
      console.log("Fetching Popular cities...");
    }
  }, [dispatch, cities, popularFlights]);

  return (
    <div className={classes.banner}>
      <div className={classes.bannerContent}>
        <FormHeader />
        <div className={classes.flightForm}>
          <InputPersonel />
          <div className={classes.pathDateInfo}>
            <InputText
              from
              wasSubmitted={wasSubmitted}
              setWasSubmitted={setWasSubmitted}
            />
            <InputText
              wasSubmitted={wasSubmitted}
              setWasSubmitted={setWasSubmitted}
            />
            <InputDate
              departure
              wasSubmitted={wasSubmitted}
              setWasSubmitted={setWasSubmitted}
            />
            <InputDate
              wasSubmitted={wasSubmitted}
              setWasSubmitted={setWasSubmitted}
            />
          </div>
          <SubmitButton setWasSubmitted={setWasSubmitted} />
        </div>
      </div>
    </div>
  );
}
