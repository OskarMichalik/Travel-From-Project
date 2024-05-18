import classes from "./Main.module.css";
import PopularDestinations from "./popular-destinations/PopularDestinations";
import PopularFlights from "./popular-flights/PopularFlights";
import OfferSection from "./offer-section/OfferSection";

export default function Main() {
  return (
    <div className={classes.main}>
      <OfferSection />
      <hr />
      <PopularDestinations />
      <PopularFlights />
    </div>
  );
}
