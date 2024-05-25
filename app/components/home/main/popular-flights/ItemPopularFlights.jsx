"use client";
import classes from "./ItemPopularFlights.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { formInputActions } from "@/store/formInputSlice";

export default function ItemPopularFlights({ cityFromId, cityToId }) {
  const places = useSelector((state) => state.flights.cities);
  const citiesAreLoading = useSelector(
    (state) => state.checks.citiesAreLoading
  );

  const cityFrom = places.filter((item) => item.id === cityFromId);
  const cityTo = places.filter((item) => item.id === cityToId);

  const fromInfo = useSelector((state) => state.form.fromInfo);
  const toInfo = useSelector((state) => state.form.toInfo);
  const dispatch = useDispatch();

  if (citiesAreLoading) {
    return (
      <div className={classes.itemPopularFlightsLoading}>
        <div className="loading">
          <p>Loading...</p>
        </div>
      </div>
    );
  }
  const imageName = cityTo[0].name.replace(/ /g, "");

  const includesFromCity = fromInfo.includes(cityFrom[0]);
  const includesToCity = toInfo.includes(cityTo[0]);

  function handleClick() {
    if (!includesFromCity) {
      dispatch(formInputActions.ADD_FROM_TRAVEL_INFO(cityFrom[0]));
    }
    if (!includesToCity) {
      dispatch(formInputActions.ADD_TO_TRAVEL_INFO(cityTo[0]));
    }
  }
  return (
    <motion.div
      className={classes.itemPopularFlights}
      onClick={handleClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 900,
        bounce: 0.5,
      }}
    >
      <div className={classes.image}>
        <Image
          src={`/${imageName}.png`}
          alt={imageName}
          width={150}
          height={100}
          draggable="false"
        />
      </div>
      <div className={classes.cityLabels}>
        <span className={classes.text}>{cityFrom[0].name}</span>
        <svg
          className="orbit-icon inline-block shrink-0 fill-current align-middle rtl:-scale-x-100 size-icon-large"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="m8.746 16.089 4.23-3.825.029-.03a.4.4 0 0 0-.03-.565l-4.18-3.753a.904.904 0 0 1-.07-1.275.898.898 0 0 1 1.27-.07l5.257 4.72c.398.358.399.983.002 1.342L9.952 17.43a.898.898 0 0 1-1.271-.066.904.904 0 0 1 .065-1.274Z"></path>
        </svg>
        <span className={classes.text}>{cityTo[0].name}</span>
      </div>
    </motion.div>
  );
}
