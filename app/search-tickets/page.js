"use client";
import store from "@/store/indexRedux";
import Nav from "../components/search-tickets/Nav";
import Main from "../components/search-tickets/main/Main";
import { Provider } from "react-redux";

export default function SearchTickets() {
  return (
    <Provider store={store} key={"searchTickets"}>
      <Nav />
      <hr />
      <Main />
    </Provider>
  );
}
