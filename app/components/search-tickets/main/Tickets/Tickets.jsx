import classes from "./Tickets.module.css";
import ListTickets from "./ListTickets";
import { useSelector } from "react-redux";

export default function Tickets() {
  const fromInfo = useSelector((state) => state.form.fromInfo);
  const toInfo = useSelector((state) => state.form.toInfo);
  const departureInfo = useSelector((state) => state.form.departureInfo);
  const returnInfo = useSelector((state) => state.form.returnInfo);

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
