import {ReactPropTypes as PropTypes } from 'react'
import styles from "./Spinner.module.css";
const Spinner = ({ size = 30, customStyle , className }) => {
  return (
    <div
      className={`${styles.spinner} ${className}`}
      style={{ width: size, height: size, ...customStyle }}
    ></div>
  );
};

Spinner.propTypes = {
  size : PropTypes.number,
  customStyle : PropTypes.object,
  className : PropTypes.string
};
export default Spinner;
