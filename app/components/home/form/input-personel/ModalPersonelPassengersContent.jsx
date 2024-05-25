"use client";
import { motion } from "framer-motion";
import classes from "./ModalPersonelPassengersContent.module.css";
import BaggageInput from "./baggage/BaggageInput";
import PassengersInput from "./passengers/PassengersInput";
import { useDispatch, useSelector } from "react-redux";
import { formInputActions } from "@/store/formInputSlice";

// Renders the modal. contains the passanger and baggage form

export default function ModalPersonelPassengersContent() {
  const dispatch = useDispatch();
  const passengers = useSelector((state) => state.form.passengers);
  const baggage = useSelector((state) => state.form.baggage);

  function handleChangePassengersNumber(category, number) {
    dispatch(formInputActions.CHANGE_PASSENGER_NUMBER({ category, number }));
  }
  function handleChangeBaggageNumber(category, number) {
    dispatch(formInputActions.CHANGE_BAGGAGE_NUMBER({ category, number }));
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
