import ModalPersonelPassengersContent from "../../home/banner/input-personel/ModalPersonelPassengersContent";
import classes from "./NavBaggage.module.css";

export default function NavBaggage() {
  return (
    <div className={classes.navBaggage}>
      <div className={classes.baggage}>
        <ModalPersonelPassengersContent />
      </div>
    </div>
  );
}
