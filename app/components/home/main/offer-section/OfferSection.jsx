import ItemDiv from "./ItemOffer";
import classes from "./OfferSection.module.css";
import image3 from "@/public/image3.png";
import image2 from "@/public/image2.png";
import image1 from "@/public/image1.png";

export default function OfferSection() {
  return (
    <div className={classes.tripleDiv}>
      <ItemDiv
        imageSrc={image3}
        mainText="Find every plane"
        subText="Roamify will help you find the cheapest tickets, which not everyone can find"
      />
      <ItemDiv
        imageSrc={image1}
        mainText="Spend less on traveling"
        subText="Hack the traveling with Roamify"
      />
      <ItemDiv
        imageSrc={image2}
        mainText="Used by everyone"
        subText="We have users across the globe"
      />
    </div>
  );
}
