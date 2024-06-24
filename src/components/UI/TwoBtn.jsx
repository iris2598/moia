import { useState } from "react";
import styles from "./ui.module.css";

const TwoBtn = () => {
  const [isSelectedY, setIsSelectedY] = useState(false);
  const [isSelectedN, setIsSelectedN] = useState(false);
  const handleClickY = () => {
    setIsSelectedY(!isSelectedY);
    if (isSelectedY != isSelectedN) {
      setIsSelectedN(!isSelectedN);
    }
  };
  const handleClickN = () => {
    setIsSelectedN(!isSelectedN);
    if (isSelectedY != isSelectedN) {
      setIsSelectedY(!isSelectedY);
    }
  };
  return (
    <div className={styles.radio_container}>
      <div className={styles.radio}>
        <input
          className={styles.radio_option}
          type="radio"
          checked={isSelectedY}
          onClick={handleClickY}
        />
        예
      </div>
      <div className={styles.radio}>
        <input
          className={styles.radio_option}
          type="radio"
          checked={isSelectedN}
          onClick={handleClickN}
        />
        아니요
      </div>
    </div>
  );
};

export default TwoBtn;
