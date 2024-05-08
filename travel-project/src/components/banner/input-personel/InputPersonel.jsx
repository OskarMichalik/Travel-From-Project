import Modal from "../Modal";
import classes from "./InputPersonel.module.css";
import InputPersonelButton from "./InputPersonelButton";
import { useContext } from "react";
import { TravelInfoContext } from "../../../store/travelInfoContext";
import { AnimatePresence } from "framer-motion";
import { memo } from "react";
import ModalPersonelPassengersContent from "./ModalPersonelPassengersContent";

// Renders buttons and modal

const InputPersonel = memo(function InputPersonel() {
  const { whichIsVisible, changeWhichIsVisible } =
    useContext(TravelInfoContext);

  function handleClick() {
    changeWhichIsVisible("personel");
  }
  function handleClose() {
    changeWhichIsVisible("");
  }

  return (
    <div className={classes.inputPersonel}>
      <AnimatePresence>
        {whichIsVisible === "personel" && (
          <div className={classes.modal}>
            <Modal modalPassengers onClose={handleClose}>
              <ModalPersonelPassengersContent />
            </Modal>
          </div>
        )}
      </AnimatePresence>
      <div className={classes.content}>
        <InputPersonelButton handleClick={handleClick} />
      </div>
    </div>
  );
});

export default InputPersonel;
