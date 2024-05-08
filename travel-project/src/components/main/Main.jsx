import { useContext } from "react";
import FormOutputInfo from "./form-info/FormOutputInfo";
import classes from "./Main.module.css";
import { TravelInfoContext } from "../../store/travelInfoContext";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

// Outputs the information when 'Explore' or 'Search' button has been clicked

export default function Main() {
  const { fromInfo, mockSearchClicked } = useContext(TravelInfoContext);
  return (
    <div className={classes.main}>
      <AnimatePresence>
        {mockSearchClicked && fromInfo.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className={classes.formInfo}
          >
            <h1>Form Info</h1>
            <FormOutputInfo />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
