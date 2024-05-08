import Calendar from "react-calendar";
import "./Calendar.css";
import classes from "./ListDate.module.css";

// Renders the calendar inside the modal

export default function ListDate({ value, onChange, minValue, departure }) {
  return (
    <div className={classes.listDate}>
      <Calendar
        onChange={onChange}
        value={value}
        minDate={minValue && !departure ? minValue : undefined}
      />
    </div>
  );
}
