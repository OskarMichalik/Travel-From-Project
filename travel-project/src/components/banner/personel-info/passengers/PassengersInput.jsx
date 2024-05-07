import classes from "./PassengersInput.module.css";

export default function PassengersInput({
  passengers,
  handleChangePassengersNumber,
}) {
  return (
    <>
      <div className={classes.passengersContent}>
        <div className={classes.labelContent}>
          <svg
            className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-small"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M21.083 17.577c-.583-1.25-2.666-2-5.583-3.084-.583-.166-.917-.25-1.083-.75-.167-.417-.167-.916.166-1.333 1.167-1.25 1.75-3.083 1.75-5.5 0-3.083-2.167-4.5-4.333-4.5-2.167 0-4.334 1.417-4.334 4.583 0 2.417.584 4.25 1.667 5.5.25.416.334.917.167 1.334-.167.416-.5.5-1.083.749-2.917 1.084-5 1.834-5.584 3.084-.5 1.082-.833 2.25-.833 3.5 0 .25.167.417.417.417h19.166c.25 0 .417-.167.417-.417 0-1.25-.334-2.418-.917-3.583Z"></path>
          </svg>
          <span className={classes.labelContentText}>
            Adults <span>Over 11</span>
          </span>
        </div>
        <div className={classes.iconsContent}>
          <div
            className={
              passengers.adults === 1 ? classes.disabledIcon : classes.minusIcon
            }
            onClick={
              passengers.adults === 1
                ? undefined
                : () => handleChangePassengersNumber("adults", -1)
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
          {passengers.adults}
          <div
            className={
              passengers.total === 9 ? classes.disabledIcon : classes.plusIcon
            }
            onClick={
              passengers.total === 9
                ? undefined
                : () => handleChangePassengersNumber("adults", 1)
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
      <div className={classes.passengersContent}>
        <div className={classes.labelContent}>
          <svg
            className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-small"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M9.916 11.99a1.042 1.042 0 1 0-2.083.001 1.042 1.042 0 0 0 2.083 0ZM16.166 11.99a1.042 1.042 0 1 0-2.083.001 1.042 1.042 0 0 0 2.083 0ZM10.466 15.192a2.514 2.514 0 0 0 3.068 0 .832.832 0 1 1 1.098 1.25 4.084 4.084 0 0 1-5.265 0 .833.833 0 0 1 1.098-1.25Z"></path>
            <path d="M19.916 10.717v-.114a8.103 8.103 0 0 0-7.374-8.175 7.925 7.925 0 0 0-8.459 7.896v.257a.436.436 0 0 1-.222.357 2.917 2.917 0 0 0 .658 5.607c.07.009.13.054.157.12a7.918 7.918 0 0 0 14.648 0 .195.195 0 0 1 .157-.12 2.917 2.917 0 0 0 .574-5.638.202.202 0 0 1-.139-.19Zm-.833 4.19h-.312c-.4 0-.745.284-.82.677a4.304 4.304 0 0 1-1.51 2.75C12.175 21.521 7.26 19.51 6.026 15.5a.833.833 0 0 0-.797-.588h-.312a1.25 1.25 0 1 1 .018-2.5.823.823 0 0 0 .816-.828v-1.26a6.249 6.249 0 0 1 6.113-6.242.177.177 0 0 0 .018.008c.432.092.81.353 1.048.726a1.405 1.405 0 0 1-.28 1.988c-.463.291-1.073.181-1.406-.255a.834.834 0 1 0-1.5.727 2.812 2.812 0 0 0 2.281 1.381 2.9 2.9 0 0 0 2.763-2.237c.091-.427.095-.869.012-1.297a.21.21 0 0 1 .307-.213 6.241 6.241 0 0 1 3.144 5.413v1.25a.823.823 0 0 0 .811.833h.005a1.249 1.249 0 1 1 .017 2.5Z"></path>
          </svg>
          <span className={classes.labelContentText}>
            Children <span>2 - 11</span>
          </span>
        </div>
        <div className={classes.iconsContent}>
          <div
            className={
              passengers.children === 0
                ? classes.disabledIcon
                : classes.minusIcon
            }
            onClick={
              passengers.children === 0
                ? undefined
                : () => handleChangePassengersNumber("children", -1)
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
          {passengers.children}
          <div
            className={
              passengers.total === 9 ? classes.disabledIcon : classes.plusIcon
            }
            onClick={
              passengers.total === 9
                ? undefined
                : () => handleChangePassengersNumber("children", 1)
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
      <div className={classes.passengersContent}>
        <div className={classes.labelContent}>
          <svg
            className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-small"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M9.192 12.041a1.104 1.104 0 1 1 0-2.208 1.104 1.104 0 0 1 0 2.208ZM13.464 10.937a1.104 1.104 0 1 1 2.21 0 1.104 1.104 0 0 1-2.21 0ZM11.875 15.27c1.105 0 1.975-.487 1.975-1.591 0-1.105-.895-1.122-2-1.122s-2 .017-2 1.122c0 1.104.92 1.592 2.025 1.592Z"></path>
            <path d="M19.81 7.34a2.61 2.61 0 0 1 1.323.602c.396.349.867 1.01.867 2.181 0 .948-.404 1.53-.742 1.85-.456.432-1.02.62-1.467.701a.45.45 0 0 0-.28.247c-1.661 3.215-4.204 5.301-7.652 6.282l-.064.017-.066.019c-3.247-1.074-5.65-3.123-7.23-6.148-.086-.166-.212-.269-.36-.278-.885-.163-1.813-.722-2.064-1.96-.242-1.189.147-1.976.516-2.428.454-.555 1.072-.855 1.64-.982.418-1.048 1.524-3.294 3.636-4.395 1.509-.787 3.022-1.168 4.497-1.137h.006a.673.673 0 0 0 .055-.001c.398.011.797.054 1.186.126 3.063.567 5.425 3.02 6.198 5.303Zm-.673 3.621c.152.007.654-.033.906-.277.08-.076.186-.218.186-.56 0-.406-.088-.692-.26-.848-.264-.239-.723-.204-.742-.203a.896.896 0 0 1-.97-.706c-.25-1.255-1.492-3.166-3.5-4.114.028.295.018.63-.06 1.01-.32 1.562-1.54 2.073-2.503 2.073-.16 0-.314-.015-.454-.04a.886.886 0 0 1 .31-1.744c.502.076.808-.14.912-.644.074-.365.046-.65-.085-.846-.147-.222-.427-.339-.576-.381-1.166-.017-2.383.294-3.616.937-2.08 1.084-2.95 3.865-2.96 3.893a.888.888 0 0 1-.847.628c-.28 0-.687.128-.916.407-.186.228-.236.54-.152.954.131.647.852.61 1.07.583a.892.892 0 0 1 .995.766c.324 2.543 2.754 3.743 2.779 3.755a.908.908 0 0 1 .107.06c1.471.983 3.392.908 3.412.907.021-.001.045-.002.066-.001h.004c.097-.001 1.812-.024 3.52-1.319 2.088-1.583 2.449-3.525 2.452-3.545a.883.883 0 0 1 .922-.745Z"></path>
            <path d="M4.06 14.35c-.142 4.728 2.321 7.745 7.94 7.745 1.938 0 3.502-.36 4.718-.993-5.873-.258-10.111-2.51-12.659-6.751Z"></path>
            <path d="M18.107 20.125c1.552-1.45 2.14-3.584 1.893-5.996l-.002-.02c-1.547 2.638-3.721 4.508-6.508 5.6 1.373.285 2.874.424 4.504.417H18.107Z"></path>
          </svg>
          <span className={classes.labelContentText}>
            Infants <span>Under 2</span>
          </span>
        </div>
        <div className={classes.iconsContent}>
          <div
            className={
              passengers.infants === 0
                ? classes.disabledIcon
                : classes.minusIcon
            }
            onClick={
              passengers.infants === 0
                ? undefined
                : () => handleChangePassengersNumber("infants", -1)
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
          {passengers.infants}
          <div
            className={
              passengers.infants === 1 || passengers.total === 9
                ? classes.disabledIcon
                : classes.plusIcon
            }
            onClick={
              passengers.infants === 1 || passengers.total === 9
                ? undefined
                : () => handleChangePassengersNumber("infants", 1)
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
