"use client";
import { flightsActions } from "./flightsSlice";
import { checksActions } from "./checksSlice";
import { db } from "@/firebase";
import {
  getDocs,
  collection,
  setDoc,
  doc,
  writeBatch,
} from "firebase/firestore";

export function getCities() {
  return async (dispatch) => {
    //const FlightscollectionRef = collection(db, "flights"); //That's for adding new stuff
    const collectionRef = collection(db, "cities");
    async function fetchData() {
      const data = await getDocs(collectionRef);
      const filteredData = data.docs.map((doc) => ({ ...doc.data() }));

      /*const batch = writeBatch(db);

      FLIGHTS_FULL.forEach((flight) => {
        const flightDocRef = doc(
          FlightscollectionRef,
          flight.from.toString() +
            flight.to.toString() +
            flight.price.toString()
        );
        batch.set(flightDocRef, flight);
      });
      await batch.commit();*/

      return filteredData;
    }
    try {
      const citiesData = await fetchData();
      dispatch(flightsActions.ADD_CITIES_BY_ARRAY(citiesData || []));
      dispatch(checksActions.CHANGE_CITIES_ARE_LOADING());
    } catch (error) {
      throw new Error(error);
    }
  };
}
export function getPopularFlights() {
  return async (dispatch) => {
    const collectionRef = collection(db, "popularFlights");
    async function fetchData() {
      const data = await getDocs(collectionRef);
      const filteredData = data.docs.map((doc) => ({ ...doc.data() }));

      return filteredData;
    }
    try {
      const pupularFlightsData = await fetchData();
      dispatch(
        flightsActions.ADD_POPULARFLIGHTS_BY_ARRAY(pupularFlightsData || [])
      );
      dispatch(checksActions.CHANGE_POPULARFLIGHTS_ARE_LOADING());
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function getFlights() {
  return async (dispatch) => {
    const collectionRef = collection(db, "flights");
    async function fetchData() {
      const data = await getDocs(collectionRef);
      const filteredData = data.docs.map((doc) => ({ ...doc.data() }));

      return filteredData;
    }
    try {
      const flightsData = await fetchData();
      dispatch(flightsActions.ADD_FLIGHTS_BY_ARRAY(flightsData || []));
      dispatch(checksActions.CHANGE_FLIGHTS_ARE_LOADING());
    } catch (error) {
      throw new Error(error);
    }
  };
}
