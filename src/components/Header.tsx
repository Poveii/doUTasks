import styles from "./Header.module.scss";

import headerLogo from "../assets/header-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={headerLogo} alt="Texto de cor amarela escrito DoUTasks" />
    </header>
  );
}
