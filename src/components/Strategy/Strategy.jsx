import styles from "./Strategy.module.scss";
import Modal from "../../shared/components/Modal/Modal";
import { ReactComponent as BtnPlusIcon } from "../../image/svg/plus.svg";
import { useState } from "react";
import { strategyData } from "./data";

const Strategy = () => {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", text: "" });

  const handleButtonClick = (id) => {
    const selectedStrategy = strategyData.find((item) => item.id === id);
    setModalContent({
      title: selectedStrategy.title,
      text: selectedStrategy.description,
    });
    setVisible(true);
  };

  return (
    <div className={styles.strategy} id="strategy">
      <ul className={styles.strategy__list}>
        {strategyData?.map((strategy) => (
          <li key={strategy.id} className={styles.strategy__item}>
            <div className={styles.strategy__card}>
              <div className={styles.strategy__imgWrapper}>
                <img
                  src={strategy.image}
                  alt="card"
                  className={styles.strategy__img}
                />
                <button
                  className={styles.strategy__btn}
                  onClick={(e) => {
                    handleButtonClick(strategy.id);
                    e.stopPropagation();
                  }}
                >
                  <BtnPlusIcon />
                </button>
              </div>
              <h2 className={styles.strategy__title}>{strategy.title}</h2>
              <h3 className={styles.strategy__subtitle}>{strategy.subtitle}</h3>
            </div>
          </li>
        ))}
      </ul>
      {visible && (
        <Modal
          visible={visible}
          setVisible={setVisible}
          title={modalContent.title}
          text={modalContent.text}
        />
      )}
    </div>
  );
};

export default Strategy;
