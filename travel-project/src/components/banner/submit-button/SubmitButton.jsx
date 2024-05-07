import { useContext } from "react";
import classes from "./SubmitButton.module.css";
import { motion } from "framer-motion";
import { TravelInfoContext } from "../../../store/travelInfoContext";

export default function SubmitButton() {
  const { fromInfo, toInfo, departureInfo, returnInfo } =
    useContext(TravelInfoContext);
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
        >
          {toInfo.length > 0 ? "Search" : "Explore"}
        </motion.button>
      </div>
    </div>
  );
}
