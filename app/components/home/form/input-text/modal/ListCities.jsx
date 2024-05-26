"use client";
import { motion } from "framer-motion";
import classes from "./ListCities.module.css";
import ItemCity from "./ItemCity";
import { sortPlacesByDistance } from "@/app/util/locationFn";
import { useFetch } from "@/app/hooks/useFetch";
import { useSelector } from "react-redux";
import { useCallback } from "react";

// Lists cities that the user can add to 'fromInfo' or 'toInfo' depending on a 'from' prop

async function fetchSortedPlaces(places) {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );

      resolve(sortedPlaces);
    });
  });
}

export default function ListCities({
  searchValue,
  from,
  itemCityOnClose,
  inputRef,
  itemCitySetSearchValue,
}) {
  const places = useSelector((state) => state.flights.cities);

  const searchedCities = places.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const memoizedFetchSortedPlaces = useCallback(
    () => fetchSortedPlaces(places),
    [places]
  );

  const { fetchedData: availablePlaces } = useFetch(memoizedFetchSortedPlaces);

  const nearYou = availablePlaces.slice(0, 4);
  const nearestCity = availablePlaces.slice(0, 1);

  if (nearYou.length === 0) {
    let cities = places.slice(0, 4);

    return (
      <motion.div
        className={classes.listCities}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.05 } }}
      >
        {searchedCities.length > 0 && searchValue && (
          <>
            <span>Search</span>
            <ItemCity
              city={searchedCities[0]}
              from={from ? true : false}
              onClose={itemCityOnClose}
              inputRef={inputRef}
              setSearchValue={itemCitySetSearchValue}
            />
          </>
        )}
        <span>Cities</span>
        {cities.map((item, index) => (
          <ItemCity
            city={item}
            key={index}
            from={from ? true : false}
            onClose={itemCityOnClose}
            inputRef={inputRef}
            setSearchValue={itemCitySetSearchValue}
            index={index}
          />
        ))}
      </motion.div>
    );
  }
  const popularFlights = places.filter((item) => item.id === nearestCity[0].id);
  let cities = [];
  if (from) {
    cities = nearYou;
  } else {
    const popularCitiesIds = popularFlights[0].popularDestinations;
    for (let id of popularCitiesIds) {
      cities.push(places.filter((item) => item.id === id)[0]);
      cities = cities.slice(0, 4);
    }
  }

  return (
    <motion.div
      className={classes.listCities}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
    >
      {searchedCities.length > 0 && searchValue && (
        <>
          <span>Search</span>
          <ItemCity
            city={searchedCities[0]}
            from={from ? true : false}
            onClose={itemCityOnClose}
            inputRef={inputRef}
            setSearchValue={itemCitySetSearchValue}
          />
        </>
      )}
      <span>{from ? "Near you" : "Popular cities"}</span>
      {cities.map((item, index) => (
        <ItemCity
          city={item}
          key={index}
          from={from ? true : false}
          onClose={itemCityOnClose}
          inputRef={inputRef}
          setSearchValue={itemCitySetSearchValue}
          index={index}
        />
      ))}
    </motion.div>
  );
}
