import classes from "./Modal.module.css";

export default function Modal({
  children,
  onClose,
  modalDate,
  modalPassengers,
}) {
  return (
    <div>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog
        open
        className={
          modalDate
            ? classes.modalDate
            : modalPassengers
            ? classes.modalPassengers
            : classes.modal
        }
      >
        {children}
      </dialog>
    </div>
  );
}
