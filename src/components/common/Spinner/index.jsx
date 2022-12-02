import styles from "./Spinner.module.css";
const Spinner = ({ size = 30, customStyle }) => {
  return (
    <div
      className={styles.spinner}
      style={{ width: size, height: size, ...customStyle }}
    ></div>
  );
};

export default Spinner;
