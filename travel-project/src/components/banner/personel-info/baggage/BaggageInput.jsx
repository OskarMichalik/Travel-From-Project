import classes from "./BaggageInput.module.css";

export default function BaggageInput({
  baggage,
  handleChangeBaggageNumber,
  baggageIsMax,
}) {
  return (
    <>
      <div className={classes.baggageContent}>
        <div className={classes.labelContent}>
          <svg
            className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-small"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M14.91 9.083c-.25 0-.417-.166-.417-.416v-4.5c0-.25.167-.417.417-.417.583 0 .833-.417.833-.917S15.493 2 14.91 2H9.077c-.584 0-.834.417-.834.833 0 .417.25.834.75.834.334.083.5.25.5.5v4.416c0 .25-.166.417-.416.417h-.834c-1.166.083-2.083 1-2.083 2.083v8c0 1 .667 1.834 1.667 2 .083 0 .166.167.166.25 0 .5.334.667.834.667.5 0 .833-.167.833-.667a.18.18 0 0 1 .167-.166h4.166a.18.18 0 0 1 .167.166c0 .5.333.667.833.667.5 0 .834-.167.834-.667 0-.083.25-.25.333-.25 1-.166 1.667-1.083 1.667-2v-8c0-1.083-.75-2-1.917-2h-1Zm0 4.25h-3.5c-.25 0-.417.167-.417.417v.833c0 .334-.25.667-.666.667-.417 0-.667-.25-.667-.667v-.833c0-.25-.167-.417-.333-.417h-.25a.657.657 0 0 1-.667-.666c0-.417.25-.667.667-.667h5.833c.333 0 .667.25.667.667a.657.657 0 0 1-.667.666Zm-2.5-9.666c.25 0 .417.166.417.416V8.58c0 .25-.167.417-.417.417h-.833c-.25 0-.417-.167-.417-.417V4.083c0-.25.167-.416.417-.416h.833Z"></path>
          </svg>
          <span className={classes.labelContentText}>Cabin baggage</span>
        </div>
        <div className={classes.iconsContent}>
          <div
            className={
              baggage.medium === 0 ? classes.disabledIcon : classes.minusIcon
            }
            onClick={
              baggage.medium === 0
                ? undefined
                : () => handleChangeBaggageNumber("medium", -1)
            }
          >
            <svg
              className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-small"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M6.7 12.9h10.594a.9.9 0 1 0 0-1.8H6.7a.9.9 0 0 0 0 1.8Z"></path>
            </svg>
          </div>
          {baggage.medium}
          <div
            className={
              baggage.medium === baggageIsMax
                ? classes.disabledIcon
                : classes.plusIcon
            }
            onClick={
              baggage.medium === baggageIsMax
                ? undefined
                : () => handleChangeBaggageNumber("medium", 1)
            }
          >
            <svg
              className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-small"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M12 5.11a.9.9 0 0 1 .9.9v4.608c0 .265.215.48.48.48h4.608a.9.9 0 0 1 .893.787l.007.113a.9.9 0 0 1-.9.9H13.38a.48.48 0 0 0-.48.48v4.608a.9.9 0 0 1-.787.893l-.113.007a.9.9 0 0 1-.9-.9v-4.608a.48.48 0 0 0-.48-.48H6.012a.9.9 0 0 1-.893-.787l-.007-.113a.9.9 0 0 1 .9-.9h4.608a.48.48 0 0 0 .48-.48V6.01a.9.9 0 0 1 .787-.893L12 5.11Z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className={classes.baggageContent}>
        <div className={classes.labelContent}>
          <svg
            className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-small"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M15.91 5.333c-1.417 0-1.417-.166-1.417-.416v-.75c0-.25.167-.417.417-.417.583 0 .833-.417.833-.917S15.493 2 14.91 2H9.077c-.584 0-.834.417-.834.833 0 .417.25.834.75.834.334.083.5.25.5.5v.666c0 .25-.166.417-.416.417H6.243c-1.166.083-2.083 1-2.083 2.083v11.75c0 1 .667 1.834 1.667 2 .083 0 .166.167.166.25 0 .5.334.667.834.667.5 0 .833-.167.833-.667a.18.18 0 0 1 .167-.166h8.166a.18.18 0 0 1 .167.166c0 .5.334.667.834.667.5 0 .833-.167.833-.667 0-.083.25-.25.333-.25 1-.166 1.667-1.083 1.667-2V7.333c0-1.083-.75-2-1.917-2h-2ZM15.6 8.75a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-1.5 0v-8.5Zm-4.3 0a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-1.5 0v-8.5ZM7.75 8a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5A.75.75 0 0 1 7.75 8Zm3.41-3.917c0-.25.167-.416.417-.416h.833c.25 0 .417.166.417.416v.747c0 .25-.167.417-.417.417h-.833c-.25 0-.417-.167-.417-.417v-.747Z"></path>
          </svg>
          <span className={classes.labelContentText}>Checked baggage</span>
        </div>
        <div className={classes.iconsContent}>
          <div
            className={
              baggage.small === 0 ? classes.disabledIcon : classes.minusIcon
            }
            onClick={
              baggage.small === 0
                ? undefined
                : () => handleChangeBaggageNumber("small", -1)
            }
          >
            <svg
              className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-small"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M6.7 12.9h10.594a.9.9 0 1 0 0-1.8H6.7a.9.9 0 0 0 0 1.8Z"></path>
            </svg>
          </div>
          {baggage.small}
          <div
            className={
              baggage.small === baggageIsMax * 2
                ? classes.disabledIcon
                : classes.plusIcon
            }
            onClick={
              baggage.small === baggageIsMax * 2
                ? undefined
                : () => handleChangeBaggageNumber("small", 1)
            }
          >
            <svg
              className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-small"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M12 5.11a.9.9 0 0 1 .9.9v4.608c0 .265.215.48.48.48h4.608a.9.9 0 0 1 .893.787l.007.113a.9.9 0 0 1-.9.9H13.38a.48.48 0 0 0-.48.48v4.608a.9.9 0 0 1-.787.893l-.113.007a.9.9 0 0 1-.9-.9v-4.608a.48.48 0 0 0-.48-.48H6.012a.9.9 0 0 1-.893-.787l-.007-.113a.9.9 0 0 1 .9-.9h4.608a.48.48 0 0 0 .48-.48V6.01a.9.9 0 0 1 .787-.893L12 5.11Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
