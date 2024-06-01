"use client";
import { useRef, useState } from "react";
import classes from "./InputText.module.css";
import ListCityBlocks from "./ListCityBlocks";
import { AnimatePresence } from "framer-motion";
import InputTextModal from "./modal/InputTextModal";
import { useDispatch, useSelector } from "react-redux";
import { checksActions } from "@/store/checksSlice";

// Renders a button and modal. The 'from' prop decides if it's a button that changes 'fromInfo' (true) or 'toInfo' (false)

export default function InputText({
  from,
  searchTickets,
  wasSubmitted,
  setWasSubmitted,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const inputRef = useRef();

  const fromInfo = useSelector((state) => state.form.fromInfo);
  const toInfo = useSelector((state) => state.form.toInfo);

  const dispatch = useDispatch();
  const whichIsVisible = useSelector((state) => state.checks.whichIsVisible);
  const citiesAreLoading = useSelector(
    (state) => state.checks.citiesAreLoading
  );

  let whichNeedsToBeVisible = from ? "from" : "to";

  let submitIsWrong = false;
  if (from && wasSubmitted && !fromInfo.length > 0) {
    submitIsWrong = true;
  } else if (!from && wasSubmitted && !toInfo.length > 0) {
    submitIsWrong = true;
  }

  function handleClick() {
    if (wasSubmitted) {
      setWasSubmitted(false);
    }
    if (from) {
      dispatch(checksActions.CHANGE_WHICH_IS_VISIBLE("from"));
    } else {
      dispatch(checksActions.CHANGE_WHICH_IS_VISIBLE("to"));
    }
    setTimeout(() => {
      inputRef.current.focus();
    }, 10);
  }
  function handleClose() {
    dispatch(checksActions.CHANGE_WHICH_IS_VISIBLE(""));
  }
  function handleInputChange(event) {
    setSearchValue(event.target.value);
    setIsEdited(true);
  }

  return (
    <div className={classes.inputText}>
      <AnimatePresence>
        {whichIsVisible === whichNeedsToBeVisible && (
          <InputTextModal
            handleClose={handleClose}
            handleInputChange={handleInputChange}
            from={from}
            searchValue={searchValue}
            listCitiesSetSearchValue={setSearchValue}
            inputRef={inputRef}
            searchTickets={searchTickets}
          />
        )}
      </AnimatePresence>
      <div
        className={submitIsWrong ? classes.inputSubmitWrong : classes.input}
        onClick={handleClick}
      >
        <div className={classes.spanText}>{from ? "From" : "To"}</div>
        <div className={classes.content}>
          <ListCityBlocks from={from ? true : false} />
          <div className={classes.inputActive}>
            {citiesAreLoading
              ? "Loading..."
              : !isEdited || searchValue === ""
              ? "City, airport or place"
              : searchValue}
          </div>
        </div>
      </div>
    </div>
  );
}
