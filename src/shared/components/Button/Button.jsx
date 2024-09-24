import styles from "./Button.module.scss";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
