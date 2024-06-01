"use client";
import { useState } from "react";
import classes from "./MapMenu.module.css";
import { motion, animate } from "framer-motion";
import { useEffect } from "react";

export default function MapMenu({ children }) {
  const [renderChildren, setRenderChildren] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function changeIsOpen() {
    setIsOpen((prev) => !prev);
    animate("#targeth2", {
      scale: 0.95,
      transition: { duration: 0.4 },
    });
    setTimeout(() => {
      animate("#targeth2", {
        scale: 1,
        transition: { duration: 0.4 },
      });
    }, 200);
  }

  useEffect(() => {
    let timer;
    if (isOpen) {
      setRenderChildren(true);
    } else {
      timer = setTimeout(() => setRenderChildren(false), 200);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div className={classes.mapMenuDiv}>
      <div className={classes.mapMenuNav} onClick={changeIsOpen}>
        <motion.h2 id="targeth2">
          {isOpen ? "Close the map" : "Open the map"}
        </motion.h2>
      </div>
      <motion.div
        className={classes.mapMenuContent}
        initial={{ height: 10 }}
        {...(isOpen
          ? { animate: { height: 500 } }
          : { animate: { height: 10 } })}
        transition={{ duration: 0.5, delay: isOpen ? 0 : 0.2 }}
      >
        <motion.div
          className={classes.background}
          {...(isOpen
            ? { animate: { backgroundColor: "#28459c00", zIndex: -1 } }
            : { animate: { backgroundColor: "#28459cff", zIndex: 5 } })}
          transition={{ duration: 0.2 }}
        />
        {renderChildren && children}
      </motion.div>
    </div>
  );
}
