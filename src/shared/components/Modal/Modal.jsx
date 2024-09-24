import styles from "./Modal.module.scss";
import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ title, setVisible, visible, text }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setVisible(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        if (visible) {
          setVisible(false);
        }
      }
    }

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setVisible, visible]);

  const modalRoot = document.querySelector("#modal-root");
  if (!modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modal__wrapper} ref={modalRef}>
        <h1 className={styles.modal__title}>{title}</h1>
        <p className={styles.modal__text}>{text}</p>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
