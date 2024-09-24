import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <ul className={`${styles.header__list} ${styles.header__list__left}`}>
          <li className={styles.header__item}>
            <a href="mailto:support@DOMAIN.com" className={styles.header__link}>
              support@DOMAIN.com
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="tel: +00000000000" className={styles.header__link}>
              +000 000 000 00
            </a>
          </li>
        </ul>
        <ul className={`${styles.header__list} ${styles.header__list__right}`}>
          <li className={styles.header__item}>
            <a href="/support" className={styles.header__link}>
              Support 24/7
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="/location" className={styles.header__link}>
              CITY NAME, ADDRESS
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
