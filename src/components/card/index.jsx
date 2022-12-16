import IconByName from "../common/IconByName";
import styles from "./card.module.css";
import { animate, motion } from "framer-motion";

const Card = () => {
  return (
    <div className={styles.grid}>
      <motion.div className={styles.card} whileHover={{ scale: 1.1 }}>
        <IconByName
          className={styles.icon}
          name="AiFillCar"
          size={100}
          color="#e2e2e2"
        />
        <p className={styles.title}>clothes</p>
        <p className={styles.title}>1234</p>
      </motion.div>
      <motion.div className={styles.card} whileHover={{ scale: 1.1 }}>
        <IconByName
          className={styles.icon}
          name="AiFillCar"
          size={100}
          color="#e2e2e2"
        />
        <p className={styles.title}>clothes</p>
        <p className={styles.title}>1234</p>
      </motion.div>
      <motion.div className={styles.card} whileHover={{ scale: 1.1 }}>
        <IconByName
          className={styles.icon}
          name="AiFillCar"
          size={100}
          color="#e2e2e2"
        />
        <p className={styles.title}>clothes</p>
        <p className={styles.title}>1234</p>
      </motion.div>
      <motion.div className={styles.card} whileHover={{ scale: 1.1 }}>
        <IconByName
          className={styles.icon}
          name="AiFillCar"
          size={100}
          color="#e2e2e2"
        />
        <p className={styles.title}>clothes</p>
        <p className={styles.title}>1234</p>
      </motion.div>
    </div>
  );
};

export default Card;
