"use client";
import React, { createContext, useReducer } from "react";

export const TravelInfoContext = createContext({
  fromInfo: [],
  toInfo: [],
  departureInfo: "",
  returnInfo: "",
  dateIsEdited: {
    departureIsEdited: false,
    returnIsEdited: false,
  },
  whichIsVisible: "",
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
  addFromTravelInfo: () => {},
  addToTravelInfo: () => {},
  removeFromTravelInfo: () => {},
  removeToTravelInfo: () => {},
  changeDateIsEdited: () => {},
  changeDepartureInfo: () => {},
  changeReturnInfo: () => {},
  changeWhichIsVisible: () => {},
  changePassengerNumber: () => {},
});

function travelInfoReducer(state, action) {
  if (action.type === "ADD_FROM_TRAVEL_INFO") {
    const addedInfo = [...state.fromInfo, action.payload];

    return {
      ...state,
      fromInfo: addedInfo,
    };
  }
  if (action.type === "ADD_TO_TRAVEL_INFO") {
    const addedInfo = [...state.toInfo, action.payload];

    return {
      ...state,
      toInfo: addedInfo,
    };
  }
  if (action.type === "REMOVE_FROM_TRAVEL_INFO") {
    const addedInfo = state.fromInfo.filter(
      (item) => item.id !== action.payload
    );

    return {
      ...state,
      fromInfo: addedInfo,
    };
  }
  if (action.type === "REMOVE_TO_TRAVEL_INFO") {
    const addedInfo = state.toInfo.filter((item) => item.id !== action.payload);

    return {
      ...state,
      toInfo: addedInfo,
    };
  }
  if (action.type === "CHANGE_DEPARTURE_TRAVEL_INFO") {
    return {
      ...state,
      departureInfo: action.payload,
    };
  }
  if (action.type === "CHANGE_RETURN_TRAVEL_INFO") {
    return {
      ...state,
      returnInfo: action.payload,
    };
  }
  if (action.type === "CHANGE_WHICH_IS_VISIBLE") {
    return {
      ...state,
      whichIsVisible: action.payload,
    };
  }
  if (action.type === "CHANGE_PASSENGER_NUMBER") {
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

      return {
        ...state,
        baggage: {
          ...state.baggage,
          medium: updatedBaggageMediumNumber,
          small: updatedBaggageSmallNumber,
        },
        passengers: {
          ...state.passengers,
          adults: updatedPassengerNumber,
          total: state.passengers.total + action.payload.number,
        },
      };
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

      return {
        ...state,
        baggage: {
          ...state.baggage,
          medium: updatedBaggageMediumNumber,
          small: updatedBaggageSmallNumber,
        },
        passengers: {
          ...state.passengers,
          children: updatedPassengerNumber,
          total: state.passengers.total + action.payload.number,
        },
      };
    } else if (action.payload.category === "infants") {
      const updatedPassengerNumber =
        state.passengers.infants + action.payload.number;
      return {
        ...state,
        passengers: {
          ...state.passengers,
          infants: updatedPassengerNumber,
          total: state.passengers.total + action.payload.number,
        },
      };
    }
    return state;
  }
  if (action.type === "CHANGE_BAGGAGE_NUMBER") {
    if (action.payload.category === "medium") {
      const updatedBaggageNumber = state.baggage.medium + action.payload.number;
      return {
        ...state,
        baggage: {
          ...state.baggage,
          medium: updatedBaggageNumber,
        },
      };
    } else if (action.payload.category === "small") {
      const updatedBaggageNumber = state.baggage.small + action.payload.number;
      return {
        ...state,
        baggage: {
          ...state.baggage,
          small: updatedBaggageNumber,
        },
      };
    }
    return state;
  }
  if (action.type === "CHANGE_DATE_IS_EDITED") {
    if (action.payload === "departure") {
      return {
        ...state,
        dateIsEdited: {
          ...state.dateIsEdited,
          departureIsEdited: true,
        },
      };
    } else if (action.payload === "return") {
      return {
        ...state,
        dateIsEdited: {
          ...state.dateIsEdited,
          returnIsEdited: true,
        },
      };
    }
  }
  return state;
}

export default function TravelInfoContextProvider({ children }) {
  const [travelInfoState, travelInfoDispatch] = useReducer(travelInfoReducer, {
    fromInfo: [],
    toInfo: [],
    departureInfo: "",
    returnInfo: "",
    dateIsEdited: {
      departureIsEdited: false,
      returnIsEdited: false,
    },
    whichIsVisible: "",
    passengers: {
      adults: 1,
      children: 0,
      infants: 0,
      total: 1,
    },
    baggage: {
      small: 0,
      medium: 0,
    },
  });

  function handleAddFromTravelInfo(city) {
    travelInfoDispatch({
      type: "ADD_FROM_TRAVEL_INFO",
      payload: city,
    });
  }

  function handleRemoveFromTravelInfo(id) {
    travelInfoDispatch({
      type: "REMOVE_FROM_TRAVEL_INFO",
      payload: id,
    });
  }

  function handleAddToTravelInfo(city) {
    travelInfoDispatch({
      type: "ADD_TO_TRAVEL_INFO",
      payload: city,
    });
  }

  function handleRemoveToTravelInfo(id) {
    travelInfoDispatch({
      type: "REMOVE_TO_TRAVEL_INFO",
      payload: id,
    });
  }

  function handleChangeDepartureTravelInfo(date) {
    travelInfoDispatch({
      type: "CHANGE_DEPARTURE_TRAVEL_INFO",
      payload: date,
    });
  }
  function handleChangeReturnTravelInfo(date) {
    travelInfoDispatch({
      type: "CHANGE_RETURN_TRAVEL_INFO",
      payload: date,
    });
  }
  function handleChangeWhichIsVisible(name) {
    travelInfoDispatch({
      type: "CHANGE_WHICH_IS_VISIBLE",
      payload: name,
    });
  }
  function handleChangePassengerNumber(category, number) {
    travelInfoDispatch({
      type: "CHANGE_PASSENGER_NUMBER",
      payload: { category, number },
    });
  }
  function handleChangeBaggageNumber(category, number) {
    travelInfoDispatch({
      type: "CHANGE_BAGGAGE_NUMBER",
      payload: { category, number },
    });
  }
  function handleChangeDateIsEdited(category) {
    travelInfoDispatch({
      type: "CHANGE_DATE_IS_EDITED",
      payload: category,
    });
  }

  const ctxValue = {
    fromInfo: travelInfoState.fromInfo,
    toInfo: travelInfoState.toInfo,
    departureInfo: travelInfoState.departureInfo,
    returnInfo: travelInfoState.returnInfo,
    dateIsEdited: travelInfoState.dateIsEdited,
    whichIsVisible: travelInfoState.whichIsVisible,
    passengers: travelInfoState.passengers,
    baggage: travelInfoState.baggage,
    addFromTravelInfo: handleAddFromTravelInfo,
    addToTravelInfo: handleAddToTravelInfo,
    removeFromTravelInfo: handleRemoveFromTravelInfo,
    removeToTravelInfo: handleRemoveToTravelInfo,
    changeDateIsEdited: handleChangeDateIsEdited,
    changeDepartureInfo: handleChangeDepartureTravelInfo,
    changeReturnInfo: handleChangeReturnTravelInfo,
    changeWhichIsVisible: handleChangeWhichIsVisible,
    changePassengerNumber: handleChangePassengerNumber,
    changeBaggageNumber: handleChangeBaggageNumber,
  };

  return (
    <TravelInfoContext.Provider value={ctxValue}>
      {children}
    </TravelInfoContext.Provider>
  );
}
