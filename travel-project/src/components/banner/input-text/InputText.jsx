import { useRef, useState } from "react";
import classes from "./InputText.module.css";
import Modal from "../Modal";
import ListCities from "./ListCities";
import ListCityBlocks from "./ListCityBlocks";

export default function InputText({ from }) {
  const [isActive, setIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const inputRef = useRef();

  function handleClick() {
    setIsActive(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 10);
  }
  function mockHandleClose() {
    setIsActive(false);
  }
  function handleInputChange(event) {
    setSearchValue(event.target.value);
    setIsEdited(true);
  }

  return (
    <div className={classes.inputText}>
      {isActive && (
        <Modal onClose={mockHandleClose}>
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
                itemCityOnClose={mockHandleClose}
                inputRef={inputRef}
                itemCitySetSearchValue={setSearchValue}
              />
            </div>
          </div>
        </Modal>
      )}
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
