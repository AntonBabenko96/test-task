import styles from "./Banner.module.scss";
import logo from "../../image/svg/logo.svg";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__logo}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className={styles.banner__nav}>
        <ul className={styles.banner__list}>
          <li className={styles.banner__item}>
            <a href="#home" className={styles.banner__link}>
              Home
            </a>
          </li>
          <li className={styles.banner__item}>
            <a href="#about" className={styles.banner__link}>
              About
            </a>
          </li>
          <li className={styles.banner__item}>
            <a href="#startegy" className={styles.banner__link}>
              Testimonials
            </a>
          </li>
          <li className={styles.banner__item}>
            <a href="#pricing" className={styles.banner__link}>
              Pricing Plans
            </a>
          </li>
          <li className={styles.banner__item}>
            <a href="#contact" className={styles.banner__link}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Banner;
