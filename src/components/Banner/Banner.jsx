import { Link } from "react-scroll";
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
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass={styles.banner__link__active}
              className={styles.banner__link}
            >
              Home
            </Link>
          </li>
          <li className={styles.banner__item}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass={styles.banner__link__active}
              className={styles.banner__link}
            >
              About
            </Link>
          </li>
          <li className={styles.banner__item}>
            <Link
              to="strategy"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass={styles.banner__link__active}
              className={styles.banner__link}
            >
              Testimonials
            </Link>
          </li>
          <li className={styles.banner__item}>
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass={styles.banner__link__active}
              className={styles.banner__link}
            >
              Pricing Plans
            </Link>
          </li>
          <li className={styles.banner__item}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass={styles.banner__link__active}
              className={styles.banner__link}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Banner;
