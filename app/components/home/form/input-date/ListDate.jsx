"use client";
import Calendar from "react-calendar";
import "./Calendar.css";
import classes from "./ListDate.module.css";
import { motion } from "framer-motion";

// Renders the calendar inside the modal

export default function ListDate({ value, onChange, minValue, departure }) {
  return (
    <motion.div
      className={classes.listDate}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
    >
      <Calendar
        onChange={onChange}
        value={value}
        minDate={minValue && !departure ? minValue : undefined}
      />
    </motion.div>
  );
}
