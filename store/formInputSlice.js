"use client";
import { createSlice } from "@reduxjs/toolkit";

const formInputSlice = createSlice({
  name: "formInputValues",
  initialState: {
    fromInfo: [],
    toInfo: [],
    departureInfo: "",
    returnInfo: "",
    passengers: {
      adults: 1,
      children: 0,
      infants: 0,
      total: 1,
    },
    baggage: {
      medium: 0,
      small: 0,
    },
  },
  reducers: {
    ADD_FROM_TRAVEL_INFO(state, action) {
      const addedInfo = [...state.fromInfo, action.payload];
      state.fromInfo = addedInfo;
    },
    REMOVE_FROM_TRAVEL_INFO(state, action) {
      const addedInfo = state.fromInfo.filter(
        (item) => item.id !== action.payload
      );
      state.fromInfo = addedInfo;
    },
    ADD_TO_TRAVEL_INFO(state, action) {
      const addedInfo = [...state.toInfo, action.payload];
      state.toInfo = addedInfo;
    },
    REMOVE_TO_TRAVEL_INFO(state, action) {
      const addedInfo = state.toInfo.filter(
        (item) => item.id !== action.payload
      );
      state.toInfo = addedInfo;
    },
    CHANGE_DEPARTURE_TRAVEL_INFO(state, action) {
      state.departureInfo = action.payload;
    },
    CHANGE_RETURN_TRAVEL_INFO(state, action) {
      state.returnInfo = action.payload;
    },
    CHANGE_PASSENGER_NUMBER(state, action) {
      let updatedBaggageMediumNumber = state.baggage.medium;
      let updatedBaggageSmallNumber = state.baggage.small;
      if (action.payload.category === "adults") {
        const updatedPassengerNumber =
          state.passengers.adults + action.payload.number;
        if (
          state.baggage.medium >
          updatedPassengerNumber + state.passengers.children
        ) {
          updatedBaggageMediumNumber =
            updatedPassengerNumber + state.passengers.children;
        }
        if (
          state.baggage.small >
          (updatedPassengerNumber + state.passengers.children) * 2
        ) {
          updatedBaggageSmallNumber =
            (updatedPassengerNumber + state.passengers.children) * 2;
        }

        state.baggage.medium = updatedBaggageMediumNumber;
        state.baggage.small = updatedBaggageSmallNumber;
        state.passengers.adults = updatedPassengerNumber;
        state.passengers.total = state.passengers.total + action.payload.number;
      } else if (action.payload.category === "children") {
        const updatedPassengerNumber =
          state.passengers.children + action.payload.number;

        if (
          state.baggage.medium >
          updatedPassengerNumber + state.passengers.adults
        ) {
          updatedBaggageMediumNumber =
            updatedPassengerNumber + state.passengers.adults;
        }
        if (
          state.baggage.small >
          (updatedPassengerNumber + state.passengers.adults) * 2
        ) {
          updatedBaggageSmallNumber =
            (updatedPassengerNumber + state.passengers.adults) * 2;
        }

        state.baggage.medium = updatedBaggageMediumNumber;
        state.baggage.small = updatedBaggageSmallNumber;
        state.passengers.children = updatedPassengerNumber;
        state.passengers.total = state.passengers.total + action.payload.number;
      } else if (action.payload.category === "infants") {
        const updatedPassengerNumber =
          state.passengers.infants + action.payload.number;
        state.passengers.infants = updatedPassengerNumber;
        state.passengers.total = state.passengers.total + action.payload.number;
      }
    },
    CHANGE_BAGGAGE_NUMBER(state, action) {
      if (action.payload.category === "medium") {
        const updatedBaggageNumber =
          state.baggage.medium + action.payload.number;

        state.baggage.medium = updatedBaggageNumber;
      } else if (action.payload.category === "small") {
        const updatedBaggageNumber =
          state.baggage.small + action.payload.number;

        state.baggage.small = updatedBaggageNumber;
      }
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "CHANGE_DEPARTURE_TRAVEL_INFO",
          "CHANGE_RETURN_TRAVEL_INFO",
        ],
        ignoredActionPaths: ["payload"],
        ignoredPaths: [
          "formInputValues.departureInfo",
          "formInputValues.returnInfo",
        ],
      },
    }),
});

export const formInputActions = formInputSlice.actions;
export default formInputSlice.reducer;
