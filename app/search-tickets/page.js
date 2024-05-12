"use client";
import classes from "./page.module.css";
import { useRouter } from "next/navigation";
import Nav from "../components/search-tickets/Nav";
import Main from "../components/search-tickets/main/Main";

export default function SearchTickets() {
  return (
    <>
      <Nav />
      <hr />
      <Main />
    </>
  );
}
