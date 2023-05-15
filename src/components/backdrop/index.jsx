// import { motion } from "framer-motion";
import styles from "./backdrop.module.css";
const Backdrop = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={styles.backdrop}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default Backdrop;
