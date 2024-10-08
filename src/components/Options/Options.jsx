import stylesOption from "./Options.module.css";

const Options = ({ handleFeedback, totalFeedback }) => {
  return (
    <div className={stylesOption.options}>
      <button
        className={stylesOption.optionButton}
        onClick={() => handleFeedback("good")}
      >
        Good
      </button>
      <button
        className={stylesOption.optionButton}
        onClick={() => handleFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={stylesOption.optionButton}
        onClick={() => handleFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={stylesOption.optionButton}
          onClick={() => handleFeedback("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
