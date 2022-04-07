import { FC, useState, useEffect, useRef } from "react";
import "../styles/notificaton.scss";
import warning from "../images/notification/warning.png";
import error from "../images/notification/danger.png";
import success from "../images/notification/success.png";
import close from "../images/icons/close.png";
import { useDispatch } from "react-redux";
import { setNotification } from "../actions/notificationAction";
import { INotification } from "../constants/notificationConstant";
const Notification: FC<INotification> = ({ message, type }) => {
  const dispatch = useDispatch();
  const notificationEl = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  // Remove notification
  const removeNotification = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (notificationEl.current) {
      notificationEl.current.style.opacity = "0";
    }
    setTimeout(() => {
      dispatch(setNotification({ message: "", type: "success" }));
    }, 300);
  };
  return (
    <div
      className={`${message === "" ? "notification-container hidden" : "notification-container"}`}
      data-position="top-right"
      ref={notificationEl}
    >
      <div className={`notification ${type}`}>
        <div className="notification-left">
          <img
            srcSet={`${
              type === "success"
                ? success
                : type === "error"
                ? error
                : warning
            } 2x`}
            alt={type}
          />
        </div>
        <div className="notification-right">
          <div className="notification-right_title">{type}</div>
          <div className="notification-right_desc">{message}</div>
        </div>
        <div className="notification-close" onClick={removeNotification}>
          <img srcSet={`${close} 2x`} alt="close" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
