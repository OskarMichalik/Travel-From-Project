"use client";
import classes from "./ItemTicket.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function displayMoney(value) {
  const updatedValue = "$" + value.toFixed(2);
  return updatedValue;
}

export default function ItemTicket({ flight, index }) {
  const places = useSelector((state) => state.flights.cities);
  const baggage = useSelector((state) => state.form.baggage);
  const passengers = useSelector((state) => state.form.passengers);
  const citiesAreLoading = useSelector(
    (state) => state.checks.citiesAreLoading
  );

  if (citiesAreLoading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }
  const cityFrom = places.find((item) => item.id === flight.from);
  const cityTo = places.find((item) => item.id === flight.to);

  const flightPrice =
    flight.price * (passengers.adults + 0.5 * passengers.children) +
    baggage.medium * 80 +
    baggage.small * 50;
  return (
    <motion.div
      className={classes.itemTicket}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * index } }}
    >
      <div className={classes.image}>
        <Image
          src={`/plane.png`}
          alt="plane flying"
          width={150}
          height={100}
          draggable="false"
        />
      </div>
      <div className={classes.flightInfo}>
        <div className={classes.dateInfo}>13/5/2024 5:00PM</div>
        <div className={classes.fromToInfo}>
          {cityFrom.name}
          <svg
            className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-medium"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="m8.746 16.089 4.23-3.825.029-.03a.4.4 0 0 0-.03-.565l-4.18-3.753a.904.904 0 0 1-.07-1.275.898.898 0 0 1 1.27-.07l5.257 4.72c.398.358.399.983.002 1.342L9.952 17.43a.898.898 0 0 1-1.271-.066.904.904 0 0 1 .065-1.274Z"></path>
          </svg>
          {cityTo.name}
        </div>

        <div className={classes.baggageInfo}>
          <span>Included: </span>
          <svg
            className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-small text-icon-primary-foreground"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M14.91 9.083c-.25 0-.417-.166-.417-.416v-4.5c0-.25.167-.417.417-.417.583 0 .833-.417.833-.917S15.493 2 14.91 2H9.077c-.584 0-.834.417-.834.833 0 .417.25.834.75.834.334.083.5.25.5.5v4.416c0 .25-.166.417-.416.417h-.834c-1.166.083-2.083 1-2.083 2.083v8c0 1 .667 1.834 1.667 2 .083 0 .166.167.166.25 0 .5.334.667.834.667.5 0 .833-.167.833-.667a.18.18 0 0 1 .167-.166h4.166a.18.18 0 0 1 .167.166c0 .5.333.667.833.667.5 0 .834-.167.834-.667 0-.083.25-.25.333-.25 1-.166 1.667-1.083 1.667-2v-8c0-1.083-.75-2-1.917-2h-1Zm0 4.25h-3.5c-.25 0-.417.167-.417.417v.833c0 .334-.25.667-.666.667-.417 0-.667-.25-.667-.667v-.833c0-.25-.167-.417-.333-.417h-.25a.657.657 0 0 1-.667-.666c0-.417.25-.667.667-.667h5.833c.333 0 .667.25.667.667a.657.657 0 0 1-.667.666Zm-2.5-9.666c.25 0 .417.166.417.416V8.58c0 .25-.167.417-.417.417h-.833c-.25 0-.417-.167-.417-.417V4.083c0-.25.167-.416.417-.416h.833Z"></path>
          </svg>
          {baggage.medium}
          <div className={classes.vl} />
          <svg
            className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-small"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M15.91 5.333c-1.417 0-1.417-.166-1.417-.416v-.75c0-.25.167-.417.417-.417.583 0 .833-.417.833-.917S15.493 2 14.91 2H9.077c-.584 0-.834.417-.834.833 0 .417.25.834.75.834.334.083.5.25.5.5v.666c0 .25-.166.417-.416.417H6.243c-1.166.083-2.083 1-2.083 2.083v11.75c0 1 .667 1.834 1.667 2 .083 0 .166.167.166.25 0 .5.334.667.834.667.5 0 .833-.167.833-.667a.18.18 0 0 1 .167-.166h8.166a.18.18 0 0 1 .167.166c0 .5.334.667.834.667.5 0 .833-.167.833-.667 0-.083.25-.25.333-.25 1-.166 1.667-1.083 1.667-2V7.333c0-1.083-.75-2-1.917-2h-2ZM15.6 8.75a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-1.5 0v-8.5Zm-4.3 0a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-1.5 0v-8.5ZM7.75 8a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5A.75.75 0 0 1 7.75 8Zm3.41-3.917c0-.25.167-.416.417-.416h.833c.25 0 .417.166.417.416v.747c0 .25-.167.417-.417.417h-.833c-.25 0-.417-.167-.417-.417v-.747Z"></path>
          </svg>
          {baggage.small}
        </div>
      </div>
      <div className={classes.priceInfo}>{displayMoney(flightPrice)}</div>
    </motion.div>
  );
}
