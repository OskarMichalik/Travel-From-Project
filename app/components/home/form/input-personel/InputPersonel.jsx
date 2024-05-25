"use client";
import Modal from "../Modal";
import classes from "./InputPersonel.module.css";
import InputPersonelButton from "./InputPersonelButton";
import { AnimatePresence } from "framer-motion";
import { memo } from "react";
import ModalPersonelPassengersContent from "./ModalPersonelPassengersContent";
import { useDispatch, useSelector } from "react-redux";
import { checksActions } from "@/store/checksSlice";

// Renders buttons and modal

const InputPersonel = memo(function InputPersonel() {
  const dispatch = useDispatch();
  const whichIsVisible = useSelector((state) => state.checks.whichIsVisible);

  function handleClick() {
    dispatch(checksActions.CHANGE_WHICH_IS_VISIBLE("personel"));
  }
  function handleClose() {
    dispatch(checksActions.CHANGE_WHICH_IS_VISIBLE(""));
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
