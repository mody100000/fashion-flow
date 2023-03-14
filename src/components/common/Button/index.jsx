import React from "react";
import styles from "./Button.module.css";
const Button = ({
  children,
  className = "",
  type,
  disabled,
  onClick,
  rounded,
}) => {
  // types are primary/ secondary / warning /error /dark

  return (
    <button
      className={`rounded-xl transition-all duration-500 ${styles.btn} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
