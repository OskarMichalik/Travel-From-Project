import classes from "./Tickets.module.css";
import { useContext } from "react";
import { TravelInfoContext } from "@/store/travelInfoContext";
import ListTickets from "./ListTickets";

export default function Tickets() {
  const { fromInfo, toInfo, departureInfo, returnInfo } =
    useContext(TravelInfoContext);

  let isEmpty;
  if (
    fromInfo.length === 0 ||
    toInfo.length === 0 ||
    departureInfo === "" ||
    returnInfo === ""
  ) {
    isEmpty = true;
  } else {
    isEmpty = false;
  }
  return (
    <div className={classes.tickets}>
      {isEmpty && <p>Please fill out the form.</p>}
      {!isEmpty && <ListTickets />}
    </div>
  );
}
