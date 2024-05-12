"use client";
import classes from "./PopularDestinations.module.css";
import CITIES from "@/store/cities";
import { sortPlacesByDistance } from "@/app/util/locationFn";
import { useFetch } from "@/app/hooks/useFetch";
import ListPopularDestinations from "./ListPopularDestinations";

async function fetchSortedPlaces() {
  const places = CITIES;

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
  const { fetchedData: availablePlaces } = useFetch(fetchSortedPlaces, []);
  if (availablePlaces.length > 0) {
    const nearestCity = availablePlaces[0];

    const popularDestinationsArray = CITIES.filter(
      (item) =>
        item.id === nearestCity.popularDestinations[0] ||
        item.id === nearestCity.popularDestinations[1] ||
        item.id === nearestCity.popularDestinations[2] ||
        item.id === nearestCity.popularDestinations[3]
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
        item.id === 3 || item.id === 1 || item.id === 23 || item.id === 25
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
