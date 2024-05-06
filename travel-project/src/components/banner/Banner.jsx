import classes from "./Banner.module.css";
import BannerHeader from "./BannerHeader";
import InputText from "./input-text/InputText";
import InputDate from "./input-date/InputDate";
import InputPersonel from "./personel-info/InputPersonel";

export default function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.bannerContent}>
        <BannerHeader />
        <div className={classes.flightForm}>
          <InputPersonel />
          <div className={classes.pathDateInfo}>
            <InputText from />
            <InputText />
            <InputDate departure />
            <InputDate />
          </div>
        </div>
      </div>
    </div>
  );
}
