"use client";
import { motion } from "framer-motion";
import { TravelInfoContext } from "@/store/travelInfoContext";
import classes from "./ModalPersonelPassengersContent.module.css";
import BaggageInput from "./baggage/BaggageInput";
import PassengersInput from "./passengers/PassengersInput";
import { useContext } from "react";

// Renders the modal. contains the passanger and baggage form

export default function ModalPersonelPassengersContent() {
  const { passengers, changePassengerNumber, baggage, changeBaggageNumber } =
    useContext(TravelInfoContext);

  function handleChangePassengersNumber(category, number) {
    changePassengerNumber(category, number);
  }
  function handleChangeBaggageNumber(category, number) {
    changeBaggageNumber(category, number);
  }
  const baggageIsMax = passengers.adults + passengers.children;

  return (
    <motion.div
      className={classes.modalPersonelContent}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
    >
      <div className={classes.passengers}>
        <div className={classes.label}>Passengers</div>
        <PassengersInput
          passengers={passengers}
          handleChangePassengersNumber={handleChangePassengersNumber}
        />
        <div className={classes.label}>Baggage</div>
        <BaggageInput
          baggage={baggage}
          handleChangeBaggageNumber={handleChangeBaggageNumber}
          baggageIsMax={baggageIsMax}
        />
      </div>
    </motion.div>
  );
}