"use client";
import { useContext, useRef, useState } from "react";
import classes from "./InputText.module.css";
import ListCityBlocks from "./ListCityBlocks";
import { TravelInfoContext } from "@/store/travelInfoContext";
import { AnimatePresence } from "framer-motion";
import InputTextModal from "./modal/InputTextModal";

// Renders a button and modal. The 'from' prop decides if it's a button that changes 'fromInfo' (true) or 'toInfo' (false)

export default function InputText({ from }) {
  const [searchValue, setSearchValue] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const inputRef = useRef();

  const { whichIsVisible, changeWhichIsVisible } =
    useContext(TravelInfoContext);

  let whichNeedsToBeVisible = from ? "from" : "to";

  function handleClick() {
    if (from) {
      changeWhichIsVisible("from");
    } else {
      changeWhichIsVisible("to");
    }
    setTimeout(() => {
      inputRef.current.focus();
    }, 10);
  }
  function handleClose() {
    changeWhichIsVisible("");
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
          />
        )}
      </AnimatePresence>
      <div className={classes.input} onClick={handleClick}>
        <div className={classes.spanText}>{from ? "From" : "To"}</div>
        <div className={classes.content}>
          <ListCityBlocks from={from ? true : false} />
          <div className={classes.inputActive}>
            {!isEdited || searchValue === ""
              ? "City, airport or place"
              : searchValue}
          </div>
        </div>
      </div>
    </div>
  );
}
