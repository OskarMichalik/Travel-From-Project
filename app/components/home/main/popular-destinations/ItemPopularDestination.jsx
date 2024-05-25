"use client";
import classes from "./ItemPopularDestination.module.css";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formInputActions } from "@/store/formInputSlice";

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

  const toInfo = useSelector((state) => state.form.toInfo);
  const fromInfo = useSelector((state) => state.form.fromInfo);
  const dispatch = useDispatch();

  const includesCity = toInfo.includes(city);

  function handleAddCity() {
    dispatch(formInputActions.ADD_TO_TRAVEL_INFO(city));
    if (nearestCity !== "" && !fromInfo.includes(nearestCity)) {
      dispatch(formInputActions.ADD_FROM_TRAVEL_INFO(nearestCity));
    }
  }

  const [scope, animate] = useAnimate();

  const handleAnimateOver = async () => {
    animate("#targetImg", { y: -80 }, { duration: 0.4 });
    animate("#targetCityInfo", { y: -30, opacity: 1 }, { duration: 0.2 });
  };
  const handleAnimateOverSlow = async () => {
    animate("#targetImg", { y: -80 }, { duration: 2 });
    animate("#targetCityInfo", { y: -30, opacity: 1 }, { duration: 2 });
  };
  const handleAnimateOut = async () => {
    animate("#targetImg", { y: 0 }, { duration: 0.2 });
    animate("#targetCityInfo", { y: 0, opacity: 0 }, { duration: 0.2 });
  };

  return (
    <motion.div
      className={
        city.id === 6 || city.id === 2 || city.id === 12
          ? classes.itemPopularDestinationWide
          : classes.itemPopularDestination
      }
      ref={scope}
      onClick={includesCity ? undefined : handleAddCity}
      onMouseOver={handleAnimateOver}
      onMouseOut={handleAnimateOut}
      {...(isMobile
        ? { whileInView: handleAnimateOverSlow }
        : { whileInView: false })}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div id="targetImg" initial={{ y: 0 }}>
        <Image
          src={`/${city.name}.png`}
          alt={city.name}
          width={400}
          height={400}
          draggable="false"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <motion.div
        className={classes.cityInfo}
        id="targetCityInfo"
        initial={{ opacity: 0, y: 0 }}
      >
        <h1>{city.name}</h1>
        <p>{city.country}</p>
      </motion.div>
    </motion.div>
  );
}
