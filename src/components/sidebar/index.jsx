import { GoHome } from "react-icons/go";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { IoIosList } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import useLocale from "../../contexts/LocaleContext";

import styles from "./style.module.css";
import SidebarIcon from "../sidebarIcon";
import { AiOutlineSkin } from "react-icons/ai";

const Sidebar = () => {
  const { t } = useLocale();
  return (
    <div className={styles.sidebar}>
      <SidebarIcon Icon={GoHome} label={t("home")} link="/dashboard" />
      <SidebarIcon Icon={HiOutlineCurrencyDollar} label={t("sales")} />

      <SidebarIcon
        Icon={IoIosList}
        label={t("categories")}
        link="/categories"
      />

      <SidebarIcon
        Icon={AiOutlineSkin}
        label={t("products")}
        link="/products"
      />
      <SidebarIcon
        Icon={HiUserGroup}
        label={t("customers")}
        link="/customers"
      />
      <SidebarIcon Icon={FiUser} label={t("admin")} />
    </div>
  );
};

export default Sidebar;
