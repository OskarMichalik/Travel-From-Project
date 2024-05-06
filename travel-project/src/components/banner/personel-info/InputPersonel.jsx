import Modal from "../Modal";
import classes from "./InputPersonel.module.css";
import { useState } from "react";
import InputPersonelButton from "./InputPersonelButton";

export default function InputPersonel() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(true);
  }
  function handleClose() {
    setIsActive(false);
  }

  return (
    <div className={classes.inputPersonel}>
      {isActive && (
        <div className={classes.modal}>
          <Modal modalPassengers onClose={handleClose}>
            test
          </Modal>
        </div>
      )}
      <div className={classes.content}>
        <InputPersonelButton handleClick={handleClick} />
      </div>
    </div>
  );
}
