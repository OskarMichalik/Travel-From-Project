"use client";
import classes from "./ButtonInputDate.module.css";
import { useSelector } from "react-redux";

// Renders the button

export default function ButtonInputDate({
  handleClick,
  departure,
  value,
  isEdited,
  isInModal,
  wasSubmitted,
}) {
  const citiesAreLoading = useSelector(
    (state) => state.checks.citiesAreLoading
  );
  return (
    <div
      className={
        isInModal
          ? classes.inputInModal
          : wasSubmitted && !isEdited
          ? classes.inputSubmitWrong
          : classes.input
      }
      onClick={handleClick}
    >
      <div className={classes.spanText}>
        {departure ? "Departure" : "Return"}
      </div>
      <div className={classes.content}>
        <div className={classes.inputActive}>
          {citiesAreLoading ? "Loading..." : isEdited ? value : "Anytime"}
        </div>
      </div>
    </div>
  );
}
