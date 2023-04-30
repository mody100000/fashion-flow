import { SiElectron } from "react-icons/si";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BsTranslate } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import useLocale from "../../contexts/LocaleContext";
import styles from "./style.module.css";
const Navbar = () => {
  function handleLogout() {
    // Clear the session storage and set the logged in state to false
    sessionStorage.clear();
    setLoggedIn(false);
  }
  const { toggleLang, t } = useLocale();
  return (
    <div className={styles.top_nav}>
      <div className={styles.logo}>
        <SiElectron size="35" className={styles.title_hash_tag} />
        <h1 className={styles.title_text}>{t("title")}</h1>
      </div>
      <div className={styles.icons}>
        <MdOutlineDarkMode size="35" className={styles.nav_icon} />
        <FiSettings size="30" className={styles.nav_icon} />
        <BsTranslate
          onClick={toggleLang}
          size="30"
          className={`${styles.nav_icon} me-10 ms-5`}
        />
        <BiLogOut size="35" className={`${styles.nav_icon} me-10 ms-5`} />
      </div>
    </div>
  );
};

export default Navbar;
