import classes from "./ModalPersonelContent.module.css";
import ModalPersonelPassengersContent from "./ModalPersonelPassengersContent";

export default function ModalPersonelContent() {
  return (
    <div className={classes.modalPersonelContent}>
      <ModalPersonelPassengersContent />
    </div>
  );
}
