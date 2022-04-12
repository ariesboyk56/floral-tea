import { FC, useState, useEffect, useRef } from "react";
import "../styles/notification.scss";
import ReactDOM from 'react-dom';
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
                ? "https://lh3.googleusercontent.com/GVwJwdjbc5kHVlQAcsflVyAzG9c7v0CF5i3ToluiZcEkaMbcVtifVr_ialA5uEV4sg0fdqXaVjwxZ0VcpTqb5nI1EEzkKG-PB6FNMCoYtPznO5LU3892gFnS2PreJE20PIalpRMiKA=s40-p-k"
                : type === "error"
                ? "https://lh3.googleusercontent.com/xCBKH2CbLU7pu_SXfBJcYeG4gL68sm_D_w_YJpWoPJv6J4SA5dgceEP6azVFPI7e4vSuxPN4DbjbfRKwpl8kgnlP5xivvU39tUlr9xdVvp-h7yfI2_YbsqZIXNvWqqglbTbyr9qNNg=s40-p-k"
                : "https://lh3.googleusercontent.com/H_3iFFnqW9tILeAwxvinDPnRRRhmzsjmO2zI_ZUT3VF4u03HG119D3n2MMmRfoYcKKLLjKHhlsdxqmVr-6OgsQrYMxLJ1DzAt_7GElZlzdcofdksZhTlsurGgnfE0sgg91-2EFcQdA=s40-p-k"
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
