import { useEffect } from "react";
import "../styles/ToastNotification.css";

const ToastNotification = ({ text, setDisplay }) => {
  useEffect(() => {
    const timeId = setTimeout(() => setDisplay(false), 3000);
    return () => clearInterval(timeId);
  }, []);

  return (
    <div className="notification-container">
      <div className="notification-side"></div>
      <div className="notification-content">
        <p>{text}</p>
        <button className="undo-btn">Undo</button>
      </div>
    </div>
  );
};

export default ToastNotification;
