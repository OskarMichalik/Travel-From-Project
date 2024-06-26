"use client";
import { useState } from "react";
import classes from "./SubmitButton.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { checksActions } from "@/store/checksSlice";

// Renders the submit button. It's disabled if the user hasn't entered any information in the 'From', 'Departure', 'Return' fields

export default function SubmitButton({ setWasSubmitted }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const fromInfo = useSelector((state) => state.form.fromInfo);
  const toInfo = useSelector((state) => state.form.fromInfo);
  const departureInfo = useSelector((state) => state.form.fromInfo);
  const returnInfo = useSelector((state) => state.form.returnInfo);

  const dispatch = useDispatch();

  return (
    <div className={classes.submitButtonDiv}>
      <div className={classes.submitButton}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 700,
          }}
          className={
            fromInfo.length === 0 || departureInfo === "" || returnInfo === ""
              ? classes.disabled
              : classes.button
          }
          onClick={() => {
            if (
              fromInfo.length === 0 ||
              departureInfo === "" ||
              returnInfo === ""
            ) {
              setWasSubmitted(true);
              dispatch(checksActions.CHANGE_WHICH_IS_VISIBLE(""));
            } else {
              setWasSubmitted(true);
              setIsLoading(true);
              router.replace("/search-tickets");
            }
          }}
        >
          {isLoading ? "Loading..." : toInfo.length > 0 ? "Search" : "Explore"}
        </motion.button>
      </div>
    </div>
  );
}
