"use client";
import { motion } from "framer-motion";
import classes from "./ItemCity.module.css";
import { useDispatch } from "react-redux";
import { formInputActions } from "@/store/formInputSlice";
import { useSelector } from "react-redux";

// Renders single city

export default function ItemCity({
  city,
  from,
  onClose,
  inputRef,
  setSearchValue,
  index,
}) {
  const dispatch = useDispatch();

  const fromInfo = useSelector((state) => state.form.fromInfo);
  const toInfo = useSelector((state) => state.form.toInfo);

  let includes;
  if (from) {
    includes = fromInfo.findIndex((item) => item.id === city.id);
  } else {
    includes = toInfo.findIndex((item) => item.id === city.id);
  }
  function handleAddCity(event) {
    event.stopPropagation();
    if (from) {
      dispatch(formInputActions.ADD_FROM_TRAVEL_INFO(city));
      setSearchValue("");
      setTimeout(() => {
        inputRef.current.focus();
      }, 10);
    } else {
      dispatch(formInputActions.ADD_TO_TRAVEL_INFO(city));
      setSearchValue("");
      setTimeout(() => {
        inputRef.current.focus();
      }, 10);
    }
  }
  function handleAddCityClose() {
    if (from) {
      dispatch(formInputActions.ADD_FROM_TRAVEL_INFO(city));
      onClose();
    } else {
      dispatch(formInputActions.ADD_TO_TRAVEL_INFO(city));
      onClose();
    }
  }

  function handleRemoveCityClose() {
    if (from) {
      dispatch(formInputActions.REMOVE_FROM_TRAVEL_INFO(city.id));
      onClose();
    } else {
      dispatch(formInputActions.REMOVE_TO_TRAVEL_INFO(city.id));
      onClose();
    }
  }

  function handleRemoveCity(event) {
    event.stopPropagation();
    if (from) {
      dispatch(formInputActions.REMOVE_FROM_TRAVEL_INFO(city.id));
      setSearchValue("");
      setTimeout(() => {
        inputRef.current.focus();
      }, 10);
    } else {
      dispatch(formInputActions.REMOVE_TO_TRAVEL_INFO(city.id));
      setSearchValue("");
      setTimeout(() => {
        inputRef.current.focus();
      }, 10);
    }
  }

  return (
    <motion.div
      className={classes.itemCity}
      onClick={includes === -1 ? handleAddCityClose : handleRemoveCityClose}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
    >
      <div className={classes.cityName}>
        <svg className={classes.icon}>
          <path d="M13.042 4.383H10.96a.417.417 0 0 1-.417-.416v-.834c0-.46.373-.833.833-.833h1.25c.46 0 .834.373.834.833v.834c0 .23-.187.416-.417.416ZM20.959 19.825c0 .115.093.208.208.208a.833.833 0 0 1 0 1.667H2.834a.833.833 0 0 1 0-1.667.208.208 0 0 0 .208-.208v-8.667c0-.46.373-.833.833-.833h1.25V9.7a.625.625 0 1 1 1.25 0v.625c.46 0 .834.373.834.833v8.459c0 .23.186.416.416.416h.417c.23 0 .417-.186.417-.416V5.867c0-.46.373-.834.833-.834h5.417c.46 0 .833.373.833.834v13.75c0 .23.187.416.417.416h.416c.23 0 .417-.186.417-.416v-6.459c0-.46.373-.833.833-.833V11.7a.625.625 0 1 1 1.25 0v.625h1.25c.46 0 .834.373.834.833v6.667ZM13.667 7.117h-3.333a.625.625 0 0 0 0 1.25h3.333a.625.625 0 0 0 0-1.25Zm-3.333 3.333a.625.625 0 0 0 0 1.25h3.333a.625.625 0 0 0 0-1.25h-3.333Zm3.333 3.333h-3.333a.625.625 0 0 0 0 1.25h3.333a.625.625 0 0 0 0-1.25Zm.208 4.584a.625.625 0 0 0 0-1.25h-3.75a.625.625 0 1 0 0 1.25h3.75Z"></path>
        </svg>
        {city.name}
      </div>
      {includes > -1 && (
        <div className={classes.minusIcon} onClick={handleRemoveCity}>
          <svg
            fill="#00c8ff"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="64px"
            height="64px"
            viewBox="0 0 45.402 45.402"
            xmlSpace="preserve"
            transform="rotate(45)"
            stroke="#00c8ff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.09080400000000001"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      )}
      {includes === -1 && (
        <div className={classes.plusIcon} onClick={handleAddCity}>
          <svg
            fill="#00a991"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="64px"
            height="64px"
            viewBox="0 0 45.402 45.402"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      )}
    </motion.div>
  );
}
