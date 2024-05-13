"use client";
import classes from "./ItemPopularDestination.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { TravelInfoContext } from "@/store/travelInfoContext";
import { useState, useEffect } from "react";

export default function ItemPopularDestination({ city, nearestCity = "" }) {
  const [displayWidth, setDisplayWidth] = useState(null);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setDisplayWidth(window.innerWidth);
    };

    updateWindowDimensions();

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const isMobile = displayWidth <= 1200;

  const { toInfo, fromInfo, addToTravelInfo, addFromTravelInfo } =
    useContext(TravelInfoContext);

  const includesCity = toInfo.includes(city);

  const textMotion = {
    rest: {
      y: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      y: -30,
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
    hoverSlow: {
      y: -30,
      opacity: 1,
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  function handleAddCity() {
    addToTravelInfo(city);
    if (nearestCity !== "" && !fromInfo.includes(nearestCity)) {
      addFromTravelInfo(nearestCity);
    }
  }

  return (
    <motion.div
      className={classes.itemPopularDestination}
      initial="rest"
      whileHover="hover"
      {...(isMobile ? { whileInView: "hoverSlow" } : { whileInView: false })}
      animate="rest"
      onClick={includesCity ? undefined : handleAddCity}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src={`/${city.name}.png`}
        alt={city.name}
        width={400}
        height={400}
        draggable="false"
      />
      <motion.div variants={textMotion} className={classes.cityInfo}>
        <h1>{city.name}</h1>
        <p>{city.country}</p>
      </motion.div>
    </motion.div>
  );
}