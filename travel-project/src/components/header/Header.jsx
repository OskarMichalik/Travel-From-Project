import classes from "./Header.module.css";
import logo from "../../public/logo.png";

export default function Header() {
  return (
    <div className={classes.header}>
      <span>
        <img src={logo} alt="Travel Logo" />
        Roamify
      </span>
    </div>
  );
}
