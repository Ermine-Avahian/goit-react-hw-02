import { useState, useEffect } from "react";
import Options from "../Options/Options.jsx";
import Notification from "../Notification/Notification.jsx";
import Description from "../Descriptio/Description.jsx";
import Feedback from "../Feedback/Feedback.jsx";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    } else {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedback((prevState) => ({
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      }));
    }
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options handleFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
