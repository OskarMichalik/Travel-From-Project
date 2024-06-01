"use client";
import { useState } from "react";
import classes from "./InputDate.module.css";
import ButtonInputDate from "./ButtonInputDate";
import Modal from "../Modal";
import ListDate from "./ListDate";
import { AnimatePresence } from "framer-motion";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checksActions } from "@/store/checksSlice";
import { formInputActions } from "@/store/formInputSlice";

// Renders the button and modal. The 'departure' prop decides if it's a button that changes 'departureInfo' (true) or 'returnInfo' (false)

const InputDate = memo(function InputDate({
  departure,
  searchTickets,
  wasSubmitted,
  setWasSubmitted,
}) {
  const departureInfo = useSelector((state) => state.form.departureInfo);
  const returnInfo = useSelector((state) => state.form.returnInfo);
  const dateIsEdited = useSelector((state) => state.checks.dateIsEdited);
  const whichIsVisible = useSelector((state) => state.checks.whichIsVisible);
  const dispatch = useDispatch();

  let defaultValue = new Date();
  if (departure && departureInfo) {
    defaultValue = new Date(departureInfo);
  } else if (returnInfo) {
    defaultValue = new Date(returnInfo);
  }

  const [value, onChange] = useState(defaultValue);

  const day = value.getDate();
  const month = value.getMonth() + 1;
  const year = value.getFullYear();
  const date = day + "/" + month + "/" + year;

  let whichNeedsToBeVisible = departure ? "departure" : "return";

  function handleClick() {
    if (wasSubmitted) {
      setWasSubmitted(false);
    }
    if (departure) {
      dispatch(checksActions.CHANGE_WHICH_IS_VISIBLE("departure"));
    } else {
      dispatch(checksActions.CHANGE_WHICH_IS_VISIBLE("return"));
    }
  }
  function handleClose() {
    dispatch(checksActions.CHANGE_WHICH_IS_VISIBLE(""));
  }
  function handleChange(value) {
    onChange(value);
    if (departure) {
      dispatch(
        formInputActions.CHANGE_DEPARTURE_TRAVEL_INFO(value.toISOString())
      );
      dispatch(checksActions.CHANGE_DATE_IS_EDITED("departure"));
    } else {
      dispatch(formInputActions.CHANGE_RETURN_TRAVEL_INFO(value.toISOString()));
      dispatch(checksActions.CHANGE_DATE_IS_EDITED("return"));
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
                  minValue={departureInfo && new Date(departureInfo)}
                  maxValue={returnInfo && new Date(returnInfo)}
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
        wasSubmitted={wasSubmitted}
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
