import { useContext } from "react";
import classes from "./ListCityBlocks.module.css";
import { TravelInfoContext } from "../../../store/travelInfoContext";
import ItemCityBlock from "./ItemCityBlock";

// Lists 'fromInfo' or 'toInfo' depending on 'from' prop

export default function ListCityBlocks({ from }) {
  const { fromInfo, toInfo } = useContext(TravelInfoContext);
  if (from && fromInfo.length > 0) {
    return (
      <div className={classes.cities}>
        <div className={classes.listPlaces}>
          {fromInfo.map((item) => (
            <ItemCityBlock city={item} key={item.id} from={from} />
          ))}
        </div>
      </div>
    );
  } else if (!from && toInfo.length > 0) {
    return (
      <div className={classes.cities}>
        <div className={classes.listPlaces}>
          {toInfo.map((item) => (
            <ItemCityBlock city={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }

  return;
}
