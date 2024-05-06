import classes from "./ButtonInputDate.module.css";

export default function ButtonInputDate({
  handleClick,
  departure,
  value,
  isEdited,
}) {
  return (
    <div className={classes.input} onClick={handleClick}>
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
