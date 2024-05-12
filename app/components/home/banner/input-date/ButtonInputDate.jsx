import classes from "./ButtonInputDate.module.css";

// Renders the button

export default function ButtonInputDate({
  handleClick,
  departure,
  value,
  isEdited,
  isInModal,
}) {
  return (
    <div
      className={isInModal ? classes.inputInModal : classes.input}
      onClick={handleClick}
    >
      <div className={classes.spanText}>
        {departure ? "Departure" : "Return"}
      </div>
      <div className={classes.content}>
        <div className={classes.inputActive}>
          {isEdited ? value : "Anytime"}
        </div>
      </div>
    </div>
  );
}
