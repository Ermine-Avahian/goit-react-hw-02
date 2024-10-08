import stylesNotification from "./Notification.module.css";

const Notification = () => {
  return (
    <div>
      <p className={stylesNotification.notification}>No feedback yet</p>
    </div>
  );
};

export default Notification;
