import { FC, useState, useEffect, useRef } from "react";
import "../styles/notification.scss";
import ReactDOM from 'react-dom';
import warning from "../images/notification/warning.png";
import error from "../images/notification/danger.png";
import success from "../images/notification/success.png";
import close from "../images/icons/close.png";
import { useDispatch } from "react-redux";
import { setNotification } from "../actions/notificationAction";
import { INotification } from "../constants/notificationConstant";
const Notification: FC<INotification> = ({ message, type }) => {
  const containerEl = document.getElementById('notification-root');
  const [notificationMsg, setNotificationMsg] = useState('');
  const [notificationClass, setNotificationClass] = useState('notification');
  const dispatch = useDispatch();
  const notificationEl = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  // Add class to element based on type
  const addTypeClass = () => {
    if(type === 'success') {
      setNotificationClass('notification success');
    }
    if(type === 'error') {
      setNotificationClass('notification error');
    }
    if(type === 'warning') {
      setNotificationClass('notification warning');
    }
  }

  // Update notification when message changes
  useEffect(() => {
    if(timeout.current) {
      clearTimeout(timeout.current);
      if(notificationEl.current) {
        notificationEl.current.style.opacity = '0';
      }
      setTimeout(() => {
        setNotificationMsg(message);
        addTypeClass();
        setTimeout(() => { 
          if(notificationEl.current) { 
            notificationEl.current.style.opacity = '1';
            timeout.current = setTimeout(() => {
              removeNotification();
            }, 5000);
          }
        }, 20);
      }, 300);
    }else {
      setNotificationMsg(message);
      addTypeClass();
      setTimeout(() => {
        if(notificationEl.current) {
          notificationEl.current.style.opacity = '1';
          timeout.current = setTimeout(() => {
            removeNotification();
          }, 5000);
        }
      }, 20);
    }
    // eslint-disable-next-line
  }, [message]);

  // Remove notification
  const removeNotification = () => {
    if(timeout.current) {
      clearTimeout(timeout.current);
    }
    if(notificationEl.current) {
      notificationEl.current.style.opacity = '0';
    }
    setTimeout(() => {
      dispatch(setNotification({ message: '', type: 'success' }));
    }, 300);
  }

  const output = (
    <div
    className={notificationClass} ref={notificationEl}
    >
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
          <div className="notification-right_desc">{notificationMsg}</div>
        </div>
        <div className="notification-close" onClick={removeNotification}>
          <img srcSet={`${close} 2x`} alt="close" />
        </div>
    </div>
  );
  return containerEl ? ReactDOM.createPortal(output, containerEl) : null;
};

export default Notification;
