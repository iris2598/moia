import { useState } from "react";
import styles from "./ui.module.css";
import minus from "../../assets/icon/minus.svg";
import plus from "../../assets/icon/plus.svg";

const NumBtn = () => {
  const [num, setNum] = useState(0);
  const down = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const up = () => {
    setNum(num + 1);
  };
  return (
    <div className={styles.num_container}>
      <button className={styles.num_btn} onClick={down}>
        <img src={minus} alt="" />
      </button>
      <p className={styles.num_value}>{num}</p>
      <button className={styles.num_btn} onClick={up}>
        <img src={plus} alt="" />
      </button>
    </div>
  );
};

export default NumBtn;
