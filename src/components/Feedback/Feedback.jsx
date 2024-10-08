import styles from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback }) => {
  const positiveFeedback =
    Math.round((feedback.good / totalFeedback) * 100) || 0;
  return (
    <div className={styles.feedback}>
      <ul className={styles.feedbackList}>
        <li className={styles.feedbackItem}>Good:{feedback.good}</li>
        <li className={styles.feedbackItem}>Neutral:{feedback.neutral}</li>
        <li className={styles.feedbackItem}>Bad:{feedback.bad}</li>
        <li className={styles.feedbackItem}>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
