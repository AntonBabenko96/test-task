import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import Banner from "../Banner/Banner";
import Button from "../../shared/components/Button/Button";
import styles from "./Hero.module.scss";
import firsSlide from "../../image/firstSlide.png";
import secondSlide from "../../image/secondSlide.png";
import thirdSlide from "../../image/thirdSlide.png";
import { Element } from "react-scroll";
import { ReactComponent as RightArrow } from "../../image/svg/rightArrow.svg";
import { ReactComponent as LeftArrow } from "../../image/svg/leftArrow.svg";

const PrevArrow = ({ onClick }) => (
  <button className={`${styles.arrow} slick-prev`} onClick={onClick}>
    <LeftArrow />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className={`${styles.arrow} slick-next`} onClick={onClick}>
    <RightArrow />
  </button>
);

const Hero = () => {
  const carouselRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handleDotClick = (index) => {
    carouselRef.current.goTo(index);
    setActiveSlide(index);
  };

  const onCarouselChange = (current) => {
    setActiveSlide(current);
  };

  return (
    <Element name="home" className={styles.hero}>
      <Carousel
        dots={false}
        className={styles.hero__slider}
        ref={carouselRef}
        afterChange={onCarouselChange}
        draggable
      >
        <div className={styles.hero__card}>
          <img src={firsSlide} alt="Slide 1" className={styles.hero__image} />
          <div className={styles.hero__content}>
            <p className={styles.hero__text}>Business Consultancy Services</p>
            <Button onClick={() => {}} className={styles.hero__btn}>
              Read more
            </Button>
          </div>
        </div>

        <div className={styles.hero__card}>
          <img src={secondSlide} alt="Slide 2" className={styles.hero__image} />
          <div className={styles.hero__content}>
            <p className={styles.hero__text}>Inspiring Insights and Skills</p>
            <Button onClick={() => {}} className={styles.hero__btn}>
              Read more
            </Button>
          </div>
        </div>
        <div className={styles.hero__card}>
          <img src={thirdSlide} alt="Slide 3" className={styles.hero__image} />
          <div className={styles.hero__content}>
            <p className={styles.hero__text}>Business Development Management</p>
            <Button onClick={() => {}} className={styles.hero__btn}>
              Read more
            </Button>
          </div>
        </div>
      </Carousel>
      <div className={styles.hero__btns}>
        <PrevArrow onClick={handlePrev} />
        <NextArrow onClick={handleNext} />
      </div>
      <div>
        <div className={styles.hero__dots}>
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`${styles.hero__dot} ${
                activeSlide === index ? styles.hero__dot__active : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.hero__banner}>
        <Banner />
      </div>
    </Element>
  );
};

export default Hero;
