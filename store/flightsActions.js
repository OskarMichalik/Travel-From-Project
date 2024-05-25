"use client";
import { flightsActions } from "./flightsSlice";
import CITIES from "./cities";
import POPULAR_FLIGHTS from "./popularFlights";
import { checksActions } from "./checksSlice";

export function getCities() {
  return async (dispatch) => {
    async function fetchData() {
      // Simulating data fetching
      const response = CITIES;
      return response;
    }
    try {
      const citiesData = await fetchData();
      dispatch(flightsActions.ADD_CITIES_BY_ARRAY(citiesData || []));
      dispatch(checksActions.CHANGE_CITIES_ARE_LOADING());
    } catch (error) {
      throw new Error("Something went wrong!");
    }
  };
}
export function getPopularFlights() {
  return async (dispatch) => {
    async function fetchData() {
      // Simulating data fetching
      const response = POPULAR_FLIGHTS;
      return response;
    }
    try {
      const pupularFlightsData = await fetchData();
      dispatch(
        flightsActions.ADD_POPULARFLIGHTS_BY_ARRAY(pupularFlightsData || [])
      );
      dispatch(checksActions.CHANGE_POPULARFLIGHTS_ARE_LOADING());
    } catch (error) {
      throw new Error("Something went wrong!");
    }
  };
}
