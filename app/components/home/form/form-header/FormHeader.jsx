"use client";
import classes from "./FormHeader.module.css";
import { motion } from "framer-motion";

export default function FormHeader() {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className={classes.bannerHeader}
    >
      <h1>Fly for less!</h1>
      <p>You deserve a good vacation.</p>
    </motion.div>
  );
}
