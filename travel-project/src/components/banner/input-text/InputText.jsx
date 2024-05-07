import { useContext, useRef, useState } from "react";
import classes from "./InputText.module.css";
import Modal from "../Modal";
import ListCities from "./ListCities";
import ListCityBlocks from "./ListCityBlocks";
import { TravelInfoContext } from "../../../store/travelInfoContext";
import { AnimatePresence } from "framer-motion";

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
          <Modal onClose={handleClose}>
            <div className={classes.modal}>
              <div className={classes.input}>
                <div className={classes.spanText}>{from ? "From" : "To"}</div>
                <div className={classes.content}>
                  <ListCityBlocks from={from ? true : false} />
                  <input
                    placeholder="City, airport or place"
                    maxLength="120"
                    className={classes.inputActive}
                    onChange={handleInputChange}
                    value={searchValue}
                    ref={inputRef}
                  />
                </div>
              </div>
              <div className={classes.cities}>
                <ListCities
                  searchValue={searchValue}
                  from={from ? true : false}
                  itemCityOnClose={handleClose}
                  inputRef={inputRef}
                  itemCitySetSearchValue={setSearchValue}
                />
              </div>
            </div>
          </Modal>
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
