"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import classes from "./Header.module.css";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Menu from "./menu/Menu";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const yValue = useTransform(scrollY, [0, 350, 500], [0, 0, -90]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [displayWidth, setDisplayWidth] = useState(null);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setDisplayWidth(window.innerWidth);
    };

    updateWindowDimensions();

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const isMobile = displayWidth <= 1300;

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden";
      if (!isMobile) document.body.style.paddingRight = "15px";
    } else if (!menuIsOpen) {
      document.body.style.overflow = "auto";
      if (!isMobile) document.body.style.paddingRight = "0";
    }
  }, [menuIsOpen, isMobile]);

  return (
    <motion.div
      className={classes.header}
      style={{ y: menuIsOpen ? 0 : yValue }}
    >
      <Link href="/" as="/">
        <span>
          <Image src={logo} alt="Travel Logo" />
          Roamify
        </span>
      </Link>
      <AnimatePresence>
        {menuIsOpen && <Menu onClose={() => setMenuIsOpen(false)} />}
      </AnimatePresence>
      <div className={classes.menuIcon} onClick={() => setMenuIsOpen(true)}>
        <svg
          className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-medium"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M22 6c0 .552-.526 1-1.177 1H3.177C2.527 7 2 6.552 2 6s.527-1 1.176-1h17.647C21.474 5 22 5.448 22 6ZM3.176 13C2.526 13 2 12.552 2 12s.526-1 1.176-1h17.647c.65 0 1.177.448 1.177 1s-.527 1-1.177 1H3.177ZM20.823 19c.651 0 1.177-.448 1.177-1s-.526-1-1.177-1H3.177C2.527 17 2 17.448 2 18s.527 1 1.176 1h17.647Z"></path>
        </svg>
      </div>
    </motion.div>
  );
}
