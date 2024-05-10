"use client";
import { useContext, useEffect } from "react";
import classes from "./page.module.css";
import { useRouter } from "next/navigation";
import { TravelInfoContext } from "@/store/travelInfoContext";
import Nav from "../components/search-tickets/Nav";
import Main from "../components/search-tickets/main/Main";

export default function SearchTickets() {
  const router = useRouter();
  const { fromInfo, toInfo, departureInfo, returnInfo } =
    useContext(TravelInfoContext);
  useEffect(() => {
    if (
      fromInfo.length === 0 ||
      toInfo.length === 0 ||
      departureInfo === "" ||
      returnInfo === ""
    ) {
      router.push("/");
    }
  }, [fromInfo, toInfo, departureInfo, returnInfo, router]);
  return (
    <>
      <Nav
        fromInfo={fromInfo}
        toInfo={toInfo}
        departureInfo={departureInfo}
        returnInfo={returnInfo}
      />
      <Main />
    </>
  );
}
