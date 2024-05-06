import { createContext, useReducer } from "react";

export const TravelInfoContext = createContext({
  fromInfo: [],
  toInfo: [],
  departureInfo: "",
  returnInfo: "",
  whichIsVisible: "",
  addFromTravelInfo: () => {},
  addToTravelInfo: () => {},
  removeFromTravelInfo: () => {},
  removeToTravelInfo: () => {},
  changeDepartureInfo: () => {},
  changeReturnInfo: () => {},
  changeWhichIsVisible: () => {},
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

  return state;
}

export default function TravelInfoContextProvider({ children }) {
  const [travelInfoState, travelInfoDispatch] = useReducer(travelInfoReducer, {
    fromInfo: [],
    toInfo: [],
    departureInfo: "",
    returnInfo: "",
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

  const ctxValue = {
    fromInfo: travelInfoState.fromInfo,
    toInfo: travelInfoState.toInfo,
    departureInfo: travelInfoState.departureInfo,
    returnInfo: travelInfoState.returnInfo,
    addFromTravelInfo: handleAddFromTravelInfo,
    addToTravelInfo: handleAddToTravelInfo,
    removeFromTravelInfo: handleRemoveFromTravelInfo,
    removeToTravelInfo: handleRemoveToTravelInfo,
    changeDepartureInfo: handleChangeDepartureTravelInfo,
    changeReturnInfo: handleChangeReturnTravelInfo,
  };

  return (
    <TravelInfoContext.Provider value={ctxValue}>
      {children}
    </TravelInfoContext.Provider>
  );
}
