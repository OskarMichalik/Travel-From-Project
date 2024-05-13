import classes from "./Header.module.css";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className={classes.header}>
      <Link href="/" as="/">
        <span>
          <Image src={logo} alt="Travel Logo" />
          Roamify
        </span>
      </Link>
    </div>
  );
}
