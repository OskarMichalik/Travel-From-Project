import classes from "./Form.module.css";
import FormHeader from "./form-header/FormHeader";
import InputText from "./input-text/InputText";
import InputDate from "./input-date/InputDate";
import InputPersonel from "./input-personel/InputPersonel";
import SubmitButton from "./submit-button/SubmitButton";

export default function Form() {
  return (
    <div className={classes.banner}>
      <div className={classes.bannerContent}>
        <FormHeader />
        <div className={classes.flightForm}>
          <InputPersonel />
          <div className={classes.pathDateInfo}>
            <InputText from />
            <InputText />
            <InputDate departure />
            <InputDate />
          </div>
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}