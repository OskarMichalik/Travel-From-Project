import { useContext, useState } from "react";
import classes from "./InputDate.module.css";
import ButtonInputDate from "./ButtonInputDate";
import Modal from "../Modal";
import ListDate from "./ListDate";
import { TravelInfoContext } from "../../../store/travelInfoContext";

export default function InputDate({ departure }) {
  const { departureInfo, returnInfo, changeDepartureInfo, changeReturnInfo } =
    useContext(TravelInfoContext);
  const [isActive, setIsActive] = useState();
  const [isEdited, setIsEdited] = useState(false);
  const [value, onChange] = useState(new Date());

  const day = value.getDate();
  const month = value.getMonth() + 1;
  const year = value.getFullYear();
  const date = day + "/" + month + "/" + year;

  function handleClick() {
    setIsActive(true);
  }
  function handleClose() {
    setIsActive(false);
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
      {isActive && (
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
      <ButtonInputDate
        handleClick={handleClick}
        departure={departure}
        value={date}
        isEdited={isEdited}
      />
    </div>
  );
}
