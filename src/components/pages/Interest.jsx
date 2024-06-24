import styles from "./interactive.module.css";
import interest_p from "../../assets/img/interest_p.png";
import interest_5 from "../../assets/img/moia/interest_1.png";
import interest_3 from "../../assets/img/moia/interest_2.png";
import interest_6 from "../../assets/img/moia/interest_3.png";
import interest_2 from "../../assets/img/moia/interest_4.png";
import interest_1 from "../../assets/img/moia/interest_5.png";
import interest_4 from "../../assets/img/moia/interest_6.png";

const Interest = () => {
  const row1 = [interest_1, interest_2, interest_3];
  const row2 = [interest_4, interest_5, interest_6];
  return (
    <div className={styles.interest}>
      <div className={styles.background_r}>
        <img className={styles.interest_1} src={interest_p} alt="" />
        <img className={styles.interest_1} src={interest_p} alt="" />
        <img className={styles.interest_1} src={interest_p} alt="" />
      </div>
      <div className={styles.free_board}>
        <div className={styles.row_rev}>
          {row1.map((n, index) => (
            <div key={index}>
              <img className={styles.interest_moia} src={n} alt="" />
            </div>
          ))}
        </div>
        <div className={styles.row}>
          {row2.map((n, index) => (
            <div key={index}>
              <img className={styles.interest_moia} src={n} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interest;
