import TravelInfoContext from "./store/travelInfoContext";
import classes from "./App.module.css";
import Banner from "./components/banner/Banner";

export default function App() {
  return (
    <TravelInfoContext>
      <div className={classes.app}>
        <Banner />
      </div>
    </TravelInfoContext>
  );
}
