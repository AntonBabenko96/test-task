import styles from "./About.module.scss";
import { Collapse } from "antd";
import { Element } from "react-scroll";
import about from "../../image/about.png";
import { ReactComponent as BtnPlusIcon } from "../../image/svg/plus.svg";
import { ReactComponent as BtnMinusIcon } from "../../image/svg/minus.svg";
import { myCategories } from "./data";

const About = () => {
  return (
    <Element name="about" className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about___container__img}>
          <img src={about} alt="img" />
        </div>
        <Collapse
          className={styles.about__container__collapse}
          accordion={true}
          expandIconPosition="end"
          defaultActiveKey={[0]}
          items={myCategories}
          expandIcon={({ isActive }) => {
            return isActive ? (
              <BtnMinusIcon className={styles.about__icon} />
            ) : (
              <BtnPlusIcon className={styles.about__icon} />
            );
          }}
        ></Collapse>
      </div>
    </Element>
  );
};

export default About;
