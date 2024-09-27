import styles from "./Pricing.module.scss";
import Button from "../../shared/components/Button/Button";
import { cardDataPrice } from "./data";
import { Element } from "react-scroll";

const Pricing = () => {
  return (
    <Element className={styles.pricing} name="pricing">
      <h2 className={styles.pricing__header}>Pricing Plans</h2>
      <div className={styles.pricing__cards}>
        {cardDataPrice?.map((card, idx) => (
          <div className={styles.pricing__card} key={idx}>
            <h3 className={styles.pricing__card__title}>{card.title}</h3>
            <p className={styles.pricing__card__price}>
              {card.price}
              <span className={styles.pricing__card__period}>
                {card.period}
              </span>
            </p>
            <p className={styles.pricing__card__info}>{card.info}</p>
            <ul className={styles.pricing__card__list}>
              {card.list.map((item, idx) => (
                <ul className={styles.pricing__card__item} key={idx}>
                  {item}
                </ul>
              ))}
            </ul>
            <p className={styles.pricing__card__extra}>{card.extra}</p>
            <Button onClick={() => {}} className={styles.pricing__card__btn}>
              Subscribe now
            </Button>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Pricing;
