import classes from "./Main.module.css";
import PopularDestinations from "./popular-destinations/PopularDestinations";
import TripleDiv from "./triple-div/TripleDiv";

export default function Main() {
  return (
    <div className={classes.main}>
      <TripleDiv />
      <hr />
      <PopularDestinations />
    </div>
  );
}
