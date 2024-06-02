"use client";
import { useRef, useState } from "react";
import classes from "./InputText.module.css";
import ListCityBlocks from "./ListCityBlocks";
import { AnimatePresence } from "framer-motion";
import InputTextModal from "./modal/InputTextModal";
import { useDispatch, useSelector } from "react-redux";
import { checksActions } from "@/store/checksSlice";
import { useEffect } from "react";

// Renders a button and modal. The 'from' prop decides if it's a button that changes 'fromInfo' (true) or 'toInfo' (false), hops into another input after closing it

export default function InputText({
  from,
  searchTickets,
  wasSubmitted,
  setWasSubmitted,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const inputRef = useRef();

  const fromInfo = useSelector((state) => state.form.fromInfo);
  const toInfo = useSelector((state) => state.form.toInfo);

  const scrollRef = useRef(null);

  const dispatch = useDispatch();
  const whichIsVisible = useSelector((state) => state.checks.whichIsVisible);
  const citiesAreLoading = useSelector(
    (state) => state.checks.citiesAreLoading
  );

  let whichNeedsToBeVisible = from ? "from" : "to";

  let submitIsWrong = false;
  if (from && wasSubmitted && !fromInfo.length > 0) {
    submitIsWrong = true;
  } else if (!from && wasSubmitted && !toInfo.length > 0) {
    submitIsWrong = true;
  }

  function handleClick() {
    if (wasSubmitted) {
      setWasSubmitted(false);
    }
    if (from) {
      dispatch(checksActions.CHANGE_WHICH_IS_VISIBLE("from"));
    } else {
      dispatch(checksActions.CHANGE_WHICH_IS_VISIBLE("to"));
    }
    setTimeout(() => {
      inputRef.current.focus();
    }, 10);
  }
  function handleClose(value) {
    if (from && value === "changeInput") {
      dispatch(checksActions.CHANGE_WHICH_IS_VISIBLE("to"));
    } else if (value === "changeInput") {
      dispatch(checksActions.CHANGE_WHICH_IS_VISIBLE("departure"));
    } else {
      dispatch(checksActions.CHANGE_WHICH_IS_VISIBLE(""));
    }
  }
  function handleInputChange(event) {
    setSearchValue(event.target.value);
    setIsEdited(true);
  }

  // Handle drag to scroll
  useEffect(() => {
    const el = scrollRef.current;
    let isDragging = false;
    let startX, scrollLeft, velocity, rafId;

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      velocity = 0;
      el.style.cursor = "grabbing";
      rafId = requestAnimationFrame(updateScroll);
    };

    const handleMouseLeaveOrUp = () => {
      isDragging = false;
      el.style.cursor = "pointer";
      cancelAnimationFrame(rafId);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.3; // Increase the multiplier for faster scrolling
      el.scrollLeft = scrollLeft - walk;
      velocity = walk;
    };

    const updateScroll = () => {
      if (!isDragging) {
        el.scrollLeft += velocity;
        velocity *= 0.95; // Damping effect
        if (Math.abs(velocity) > 0.5) {
          rafId = requestAnimationFrame(updateScroll);
        }
      }
    };

    el.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseLeaveOrUp);
    el.addEventListener("mouseleave", handleMouseLeaveOrUp);
    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseLeaveOrUp);
      el.removeEventListener("mouseleave", handleMouseLeaveOrUp);
      el.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className={classes.inputText}>
      <AnimatePresence>
        {whichIsVisible === whichNeedsToBeVisible && (
          <InputTextModal
            handleClose={handleClose}
            handleInputChange={handleInputChange}
            from={from}
            searchValue={searchValue}
            listCitiesSetSearchValue={setSearchValue}
            inputRef={inputRef}
            searchTickets={searchTickets}
          />
        )}
      </AnimatePresence>
      <div
        className={submitIsWrong ? classes.inputSubmitWrong : classes.input}
        onClick={handleClick}
        ref={scrollRef}
      >
        <div className={classes.spanText}>{from ? "From" : "To"}</div>
        <div className={classes.content}>
          <ListCityBlocks from={from ? true : false} />
          <div className={classes.inputActive}>
            {citiesAreLoading
              ? "Loading..."
              : !isEdited || searchValue === ""
              ? "City, airport or place"
              : searchValue}
          </div>
        </div>
      </div>
    </div>
  );
}
