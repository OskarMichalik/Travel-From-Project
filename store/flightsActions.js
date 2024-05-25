"use client";
import { flightsActions } from "./flightsSlice";
import CITIES from "./cities";
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
      throw new Error("Something went wrong");
    }
  };
}
