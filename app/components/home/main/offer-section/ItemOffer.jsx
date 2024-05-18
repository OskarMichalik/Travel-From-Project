import classes from "./ItemOffer.module.css";
import Image from "next/image";

export default function ItemDiv({ imageSrc, mainText, subText }) {
  return (
    <div className={classes.itemDiv}>
      <div className={classes.imageDiv}>
        <Image src={imageSrc} alt={mainText} />
      </div>
      <h3>{mainText}</h3>
      <p>{subText}</p>
    </div>
  );
}
