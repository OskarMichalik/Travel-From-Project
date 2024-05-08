import classes from "./OutputItem.module.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

// Renders single block

export default function OutputItem({ tableHeader, children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layout
        className={
          tableHeader ? classes.outputItemGreen : classes.outputItemOrange
        }
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
