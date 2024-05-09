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

const InputDate = memo(function InputDate({ departure }) {
  const { departureInfo, changeDepartureInfo, changeReturnInfo } =
    useContext(TravelInfoContext);
  const [isEdited, setIsEdited] = useState(false);
  const [value, onChange] = useState(new Date());

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
      setIsEdited(true);
    } else {
      changeReturnInfo(value);
      setIsEdited(true);
    }
  }

  return (
    <div className={classes.inputDate}>
      <AnimatePresence>
        {whichIsVisible === whichNeedsToBeVisible && (
          <Modal onClose={handleClose} modalDate>
            <div className={classes.modal}>
              <ButtonInputDate
                departure={departure}
                value={date}
                isEdited={isEdited}
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
        isEdited={isEdited}
      />
    </div>
  );
});

export default InputDate;
