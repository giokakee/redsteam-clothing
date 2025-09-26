// Toast.js
import React, { useEffect } from "react";
import "./Toast.css";

const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return <div className={`toast ${show ? "toast-show" : ""}`}>{message}</div>;
};

export default Toast;
