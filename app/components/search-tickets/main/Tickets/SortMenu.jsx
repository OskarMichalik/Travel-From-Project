import { motion } from "framer-motion";
import classes from "./SortMenu.module.css";

function displayMoney(value) {
  const updatedValue = "$" + value.toFixed(2);
  return updatedValue;
}

export default function SortMenu({
  isSorted,
  toggleSort,
  cheapestFlight,
  fastestFlights,
  bestFlights,
  passengers,
  baggage,
}) {
  return (
    <motion.div
      className={classes.sortingDiv}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.div
        className={
          isSorted === "cheapest"
            ? classes.cheapestSortDivOn
            : classes.cheapestSortDiv
        }
        onClick={() => toggleSort("cheapest")}
        {...(isSorted === "cheapest"
          ? { animate: { borderBottom: "3px solid #0a2472" } }
          : {
              animate: { borderBottom: "3px solid #0a247200" },
            })}
        whileHover={{ borderBottom: "3px solid #0a2472" }}
      >
        <motion.h3
          {...(isSorted === "cheapest"
            ? {
                animate: {
                  color: "#31459C",
                  textDecorationLine: "underline",
                  textDecorationColor: "#31459C55",
                },
              }
            : {
                animate: {
                  color: "#000000",
                  textDecorationLine: "none",
                  textDecorationColor: "#31459C00",
                },
              })}
        >
          Cheapest
        </motion.h3>
        <p>
          {displayMoney(
            cheapestFlight.price *
              (passengers.adults + 0.5 * passengers.children) +
              baggage.medium * 80 +
              baggage.small * 50
          )}
        </p>
      </motion.div>
      <motion.div
        className={
          isSorted === "fastest"
            ? classes.fastestSortDivOn
            : classes.fastestSortDiv
        }
        onClick={() => toggleSort("fastest")}
        {...(isSorted === "fastest"
          ? { animate: { borderBottom: "3px solid #0a2472" } }
          : {
              animate: { borderBottom: "3px solid #0a247200" },
            })}
        whileHover={{ borderBottom: "3px solid #0a2472" }}
      >
        <motion.h3
          {...(isSorted === "fastest"
            ? {
                animate: {
                  color: "#31459C",
                  textDecorationLine: "underline",
                  textDecorationColor: "#31459C55",
                },
              }
            : {
                animate: {
                  color: "#000000",
                  textDecorationLine: "none",
                  textDecorationColor: "#31459C00",
                },
              })}
        >
          Fastest
        </motion.h3>
        <p>
          {displayMoney(
            fastestFlights[0].price *
              (passengers.adults + 0.5 * passengers.children) +
              baggage.medium * 80 +
              baggage.small * 50
          )}
        </p>
      </motion.div>
      <motion.div
        className={
          isSorted === "best" ? classes.bestSortDivOn : classes.bestSortDiv
        }
        onClick={() => toggleSort("best")}
        {...(isSorted === "best"
          ? { animate: { borderBottom: "3px solid #0a2472" } }
          : {
              animate: { borderBottom: "3px solid #0a247200" },
            })}
        whileHover={{ borderBottom: "3px solid #0a2472" }}
      >
        <motion.h3
          {...(isSorted === "best"
            ? {
                animate: {
                  color: "#31459C",
                  textDecorationLine: "underline",
                  textDecorationColor: "#31459C55",
                },
              }
            : {
                animate: {
                  color: "#000000",
                  textDecorationLine: "none",
                  textDecorationColor: "#31459C00",
                },
              })}
        >
          Best
        </motion.h3>
        <p>
          {displayMoney(
            bestFlights[0].price *
              (passengers.adults + 0.5 * passengers.children) +
              baggage.medium * 80 +
              baggage.small * 50
          )}
        </p>
      </motion.div>
    </motion.div>
  );
}
