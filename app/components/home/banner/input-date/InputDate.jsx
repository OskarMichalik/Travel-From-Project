"use client";
import { useContext, useState } from "react";
import classes from "./InputDate.module.css";
import ButtonInputDate from "./ButtonInputDate";
import Modal from "../Modal";
import ListDate from "./ListDate";
import { TravelInfoContext } from "@/store/travelInfoContext";
import { AnimatePresence } from "framer-motion";
import { memo } from "react";

// Renders the button and modal. The 'departure' prop decides if it's a button that changes 'departureInfo' (true) or 'returnInfo' (false)

const InputDate = memo(function InputDate({ departure, searchTickets }) {
  const {
    departureInfo,
    returnInfo,
    dateIsEdited,
    changeDepartureInfo,
    changeReturnInfo,
    changeDateIsEdited,
  } = useContext(TravelInfoContext);

  let defaultValue = new Date();
  if (departure && departureInfo) {
    defaultValue = departureInfo;
  } else if (returnInfo) {
    defaultValue = returnInfo;
  }

  const [value, onChange] = useState(defaultValue);

  const day = value.getDate();
  const month = value.getMonth() + 1;
  const year = value.getFullYear();
  const date = day + "/" + month + "/" + year;

  const { whichIsVisible, changeWhichIsVisible } =
    useContext(TravelInfoContext);

  let whichNeedsToBeVisible = departure ? "departure" : "return";

  function handleClick() {
    if (departure) {
      changeWhichIsVisible("departure");
    } else {
      changeWhichIsVisible("return");
    }
  }
  function handleClose() {
    changeWhichIsVisible("");
  }
  function handleChange(value) {
    onChange(value);
    if (departure) {
      changeDepartureInfo(value);
      changeDateIsEdited("departure");
    } else {
      changeReturnInfo(value);
      changeDateIsEdited("return");
    }
  }

  return (
    <div className={classes.inputDate}>
      <AnimatePresence>
        {whichIsVisible === whichNeedsToBeVisible && (
          <Modal onClose={handleClose} modalDate searchTickets={searchTickets}>
            <div className={classes.modal}>
              <ButtonInputDate
                departure={departure}
                value={date}
                isEdited={
                  departure
                    ? dateIsEdited.departureIsEdited
                    : dateIsEdited.returnIsEdited
                }
                isInModal
              />
              <div className={classes.cities}>
                <ListDate
                  value={value}
                  onChange={handleChange}
                  minValue={departureInfo}
                  departure={departure}
                />
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
      <ButtonInputDate
        handleClick={handleClick}
        departure={departure}
        value={date}
        isEdited={
          departure
            ? dateIsEdited.departureIsEdited
            : dateIsEdited.returnIsEdited
        }
      />
    </div>
  );
});

export default InputDate;
