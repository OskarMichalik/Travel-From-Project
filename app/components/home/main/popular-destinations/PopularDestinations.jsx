"use client";
import classes from "./PopularDestinations.module.css";
import CITIES from "@/store/cities";
import { sortPlacesByDistance } from "@/app/util/locationFn";
import { useFetch } from "@/app/hooks/useFetch";
import ListPopularDestinations from "./ListPopularDestinations";
import { useSelector } from "react-redux";
import { useCallback } from "react";

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

export default function PopularDestinations() {
  const places = useSelector((state) => state.flights.cities);
  const citiesAreLoading = useSelector(
    (state) => state.checks.citiesAreLoading
  );

  const memoizedFetchSortedPlaces = useCallback(
    () => fetchSortedPlaces(places),
    [places]
  );
  const { fetchedData: availablePlaces } = useFetch(memoizedFetchSortedPlaces);

  if (citiesAreLoading) {
    //Checks if cities are loading
    return (
      <div className={classes.popularDestinations}>
        <h1>Popular destinations</h1>
        <p>Those places were picked just for you... </p>
        <div className="loading">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (availablePlaces.length > 0) {
    const nearestCity = availablePlaces[0];

    const popularDestinationsArray = CITIES.filter(
      (item) =>
        item.id === nearestCity.popularDestinations[0] ||
        item.id === nearestCity.popularDestinations[1] ||
        item.id === nearestCity.popularDestinations[2] ||
        item.id === nearestCity.popularDestinations[3] ||
        item.id === nearestCity.popularDestinations[4] ||
        item.id === nearestCity.popularDestinations[5]
    );
    return (
      <div className={classes.popularDestinations}>
        <h1>Popular destinations from {nearestCity.name}</h1>
        <p>Those places were picked just for you... </p>
        <ListPopularDestinations
          destinations={popularDestinationsArray}
          itemNearestCity={nearestCity}
        />
      </div>
    );
  } else {
    const destinations = CITIES.filter(
      (item) =>
        item.id === 3 ||
        item.id === 1 ||
        item.id === 23 ||
        item.id === 25 ||
        item.id === 2 ||
        item.id === 6
    );
    return (
      <div className={classes.popularDestinations}>
        <h1>Popular destinations</h1>
        <p>Those places were picked just for you... </p>
        <ListPopularDestinations destinations={destinations} />
      </div>
    );
  }
}
