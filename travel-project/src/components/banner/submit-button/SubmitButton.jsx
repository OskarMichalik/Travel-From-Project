import { useContext } from "react";
import classes from "./SubmitButton.module.css";
import { motion } from "framer-motion";
import { TravelInfoContext } from "../../../store/travelInfoContext";

// Renders the submit button. It's disabled if the user hasn't entered any information in the 'From', 'Departure', 'Return' fields

export default function SubmitButton() {
  const {
    fromInfo,
    toInfo,
    departureInfo,
    returnInfo,
    mockChangeSearchClicked,
  } = useContext(TravelInfoContext);
  return (
    <div className={classes.submitButtonDiv}>
      <div className={classes.submitButton}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 700,
          }}
          className={
            fromInfo.length === 0 || departureInfo === "" || returnInfo === ""
              ? classes.disabled
              : classes.button
          }
          disabled={
            fromInfo.length === 0 || departureInfo === "" || returnInfo === ""
              ? true
              : false
          }
          onClick={mockChangeSearchClicked}
        >
          {toInfo.length > 0 ? "Search" : "Explore"}
        </motion.button>
      </div>
    </div>
  );
}
