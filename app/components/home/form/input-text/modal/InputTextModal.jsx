"use client";
import classes from "./InputTextModal.module.css";
import Modal from "../../Modal";
import ListCities from "./ListCities";
import ListCityBlocks from "../ListCityBlocks";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

// Renders the modal

export default function InputTextModal({
  handleClose,
  handleInputChange,
  from,
  searchValue,
  listCitiesSetSearchValue,
  inputRef,
  searchTickets,
}) {
  const scrollRef = useRef(null);

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

  function handleKeyDown(event) {
    if (document.activeElement !== inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
        inputRef.current.value = event.key;
      }, 1);
    }
  }

  return (
    <Modal
      onClose={handleClose}
      searchTickets={searchTickets}
      onKeyDown={handleKeyDown}
    >
      <div className={classes.modal} onKeyDown={handleKeyDown}>
        <motion.div className={classes.input} ref={scrollRef}>
          <div className={classes.spanText}>{from ? "From" : "To"}</div>
          <div className={classes.content}>
            <ListCityBlocks from={from} />
            <input
              placeholder="City, airport or place"
              maxLength="30"
              className={classes.inputActive}
              onChange={handleInputChange}
              value={searchValue}
              ref={inputRef}
            />
          </div>
        </motion.div>
        <ListCities
          searchValue={searchValue}
          from={from}
          itemCityOnClose={() => handleClose("changeInput")}
          inputRef={inputRef}
          itemCitySetSearchValue={listCitiesSetSearchValue}
        />
      </div>
    </Modal>
  );
}
