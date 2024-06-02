"use client";
import classes from "./Modal.module.css";
import { motion } from "framer-motion";

export default function Modal({
  children,
  onClose,
  modalDate,
  modalPassengers,
  searchTickets,
  onKeyDown,
}) {
  return (
    <div>
      <div className={classes.backdrop} onClick={onClose} />
      <motion.dialog
        onKeyDown={onKeyDown}
        open
        className={
          searchTickets && modalDate
            ? classes.modalDateSearchTickets
            : searchTickets
            ? classes.modalSearchTickets
            : modalDate
            ? classes.modalDate
            : modalPassengers
            ? classes.modalPassengers
            : classes.modal
        }
        initial={{ backgroundColor: "#FFFFFF55" }}
        animate={{ backgroundColor: "#FFFFFFff", opacity: 1 }}
        exit={{ backgroundColor: "#FFFFFF55", opacity: 0 }}
        transition={{
          duration: 0.1,
        }}
      >
        {children}
      </motion.dialog>
    </div>
  );
}
