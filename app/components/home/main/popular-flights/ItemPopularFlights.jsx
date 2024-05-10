"use client";
import classes from "./ItemPopularFlights.module.css";
import CITIES from "@/store/cities";
import { TravelInfoContext } from "@/store/travelInfoContext";
import Image from "next/image";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function ItemPopularFlights({ cityFromId, cityToId }) {
  const cityFrom = CITIES.filter((item) => item.id === cityFromId);
  const cityTo = CITIES.filter((item) => item.id === cityToId);
  const { fromInfo, toInfo, addFromTravelInfo, addToTravelInfo } =
    useContext(TravelInfoContext);

  const imageName = cityTo[0].name.replace(/ /g, "");

  const includesFromCity = fromInfo.includes(cityFrom[0]);
  const includesToCity = toInfo.includes(cityTo[0]);

  function handleClick() {
    if (!includesFromCity) {
      addFromTravelInfo(cityFrom[0]);
    }
    if (!includesToCity) {
      addToTravelInfo(cityTo[0]);
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
