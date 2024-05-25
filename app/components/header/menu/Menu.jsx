"use client";
import { motion } from "framer-motion";
import classes from "./Menu.module.css";
import Image from "next/image";
import meIcon from "@/public/meIcon.png";
import Link from "next/link";

export default function Menu({ onClose }) {
  return (
    <div className={classes.menu}>
      <motion.div
        className={classes.backdrop}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.1,
        }}
      />
      <motion.div
        className={classes.menuContent}
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 150 }}
        transition={{
          type: "spring",
          bounce: 0.15,
          duration: 0.5,
        }}
      >
        <motion.div
          className={classes.menuImage}
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          exit={{ x: -150 }}
          transition={{
            type: "spring",
            bounce: 0.05,
          }}
        >
          <Image src={meIcon} alt="An icon of me :)" />
        </motion.div>
        <motion.div
          className={classes.menuText}
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          exit={{ x: -150 }}
          transition={{
            type: "spring",
            bounce: 0.05,
          }}
        >
          <div className={classes.menuDescription}>
            <p>
              Hi I&apos;m Oskar. I am an aspiring programmer and I love learning
              about programming. Please checkout more of my projects.
            </p>
          </div>
          <div className={classes.menuGitButton}>
            <Link href="https://github.com/OskarMichalik" target="_blank">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 700,
                }}
              >
                GitHub
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
