import classes from "./InputPersonelButton.module.css";
import { useSelector } from "react-redux";

export default function InputPersonelButton({ handleClick }) {
  const passengers = useSelector((state) => state.form.passengers);
  const baggage = useSelector((state) => state.form.baggage);

  // Renders both the passengers button and the baggage button

  return (
    <>
      <div className={classes.passengers} onClick={handleClick}>
        <svg
          className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-medium"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M13.023 14.155c1.959.697 4.177 1.487 4.177 4.645V20a.4.4 0 0 1-.403.4h-13.6a.4.4 0 0 1-.4-.4v-1.196c0-3.168 2.21-3.95 4.16-4.64.204-.072.408-.145.61-.22.053-.022.132-.115.193-.32a2.669 2.669 0 0 0-.067-1.565c-.755-.83-1.497-1.863-1.497-4.423A3.713 3.713 0 0 1 10 3.6a3.713 3.713 0 0 1 3.804 4.034c0 2.562-.742 3.592-1.5 4.428a2.686 2.686 0 0 0-.066 1.56c.061.207.14.3.194.32l.591.213Z"></path>
          <path d="m18.294 15.52.452.16C20.27 16.22 22 16.837 22 19.318V20a.4.4 0 0 1-.4.4h-3.01a.2.2 0 0 1-.199-.226c.008-.057.012-.116.012-.174v-1.2c0-3.682-2.533-4.875-4.48-5.595a.2.2 0 0 1-.113-.107 4.074 4.074 0 0 1-.207-.59.202.202 0 0 1 .035-.174 6.952 6.952 0 0 0 1.352-4.279.2.2 0 0 1 .118-.177A3.172 3.172 0 0 1 16.4 7.6a2.929 2.929 0 0 1 3.003 3.184 4.494 4.494 0 0 1-1.172 3.45c-.104.336-.12.695-.046 1.04.012.09.05.176.11.246Z"></path>
        </svg>
        {passengers.total === 1 ? (
          <span>{passengers.total} passenger</span>
        ) : (
          <span>{passengers.total} passengers</span>
        )}
        <svg
          className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-medium"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M7.913 8.747a.904.904 0 0 0-1.275-.065.898.898 0 0 0-.066 1.27l4.796 5.303a.904.904 0 0 0 1.342-.003l4.72-5.255a.898.898 0 0 0-.07-1.271.904.904 0 0 0-1.274.07L12.39 12.91a.48.48 0 0 1-.713 0L7.913 8.748Z"></path>
        </svg>
      </div>
      <div className={classes.baggage} onClick={handleClick}>
        <svg
          className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-medium"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M14.91 9.083c-.25 0-.417-.166-.417-.416v-4.5c0-.25.167-.417.417-.417.583 0 .833-.417.833-.917S15.493 2 14.91 2H9.077c-.584 0-.834.417-.834.833 0 .417.25.834.75.834.334.083.5.25.5.5v4.416c0 .25-.166.417-.416.417h-.834c-1.166.083-2.083 1-2.083 2.083v8c0 1 .667 1.834 1.667 2 .083 0 .166.167.166.25 0 .5.334.667.834.667.5 0 .833-.167.833-.667a.18.18 0 0 1 .167-.166h4.166a.18.18 0 0 1 .167.166c0 .5.333.667.833.667.5 0 .834-.167.834-.667 0-.083.25-.25.333-.25 1-.166 1.667-1.083 1.667-2v-8c0-1.083-.75-2-1.917-2h-1Zm0 4.25h-3.5c-.25 0-.417.167-.417.417v.833c0 .334-.25.667-.666.667-.417 0-.667-.25-.667-.667v-.833c0-.25-.167-.417-.333-.417h-.25a.657.657 0 0 1-.667-.666c0-.417.25-.667.667-.667h5.833c.333 0 .667.25.667.667a.657.657 0 0 1-.667.666Zm-2.5-9.666c.25 0 .417.166.417.416V8.58c0 .25-.167.417-.417.417h-.833c-.25 0-.417-.167-.417-.417V4.083c0-.25.167-.416.417-.416h.833Z"></path>
        </svg>
        {baggage.medium}
        <div className={classes.vl} />
        <svg
          className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-medium"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M15.91 5.333c-1.417 0-1.417-.166-1.417-.416v-.75c0-.25.167-.417.417-.417.583 0 .833-.417.833-.917S15.493 2 14.91 2H9.077c-.584 0-.834.417-.834.833 0 .417.25.834.75.834.334.083.5.25.5.5v.666c0 .25-.166.417-.416.417H6.243c-1.166.083-2.083 1-2.083 2.083v11.75c0 1 .667 1.834 1.667 2 .083 0 .166.167.166.25 0 .5.334.667.834.667.5 0 .833-.167.833-.667a.18.18 0 0 1 .167-.166h8.166a.18.18 0 0 1 .167.166c0 .5.334.667.834.667.5 0 .833-.167.833-.667 0-.083.25-.25.333-.25 1-.166 1.667-1.083 1.667-2V7.333c0-1.083-.75-2-1.917-2h-2ZM15.6 8.75a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-1.5 0v-8.5Zm-4.3 0a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-1.5 0v-8.5ZM7.75 8a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5A.75.75 0 0 1 7.75 8Zm3.41-3.917c0-.25.167-.416.417-.416h.833c.25 0 .417.166.417.416v.747c0 .25-.167.417-.417.417h-.833c-.25 0-.417-.167-.417-.417v-.747Z"></path>
        </svg>
        {baggage.small}
        <svg
          className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-medium"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M7.913 8.747a.904.904 0 0 0-1.275-.065.898.898 0 0 0-.066 1.27l4.796 5.303a.904.904 0 0 0 1.342-.003l4.72-5.255a.898.898 0 0 0-.07-1.271.904.904 0 0 0-1.274.07L12.39 12.91a.48.48 0 0 1-.713 0L7.913 8.748Z"></path>
        </svg>
      </div>
    </>
  );
}
