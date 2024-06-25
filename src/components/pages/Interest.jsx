import styles from "./interactive.module.css";
import interest_p from "../../assets/img/interest_p.png";
import interest_5 from "../../assets/img/moia/interest_1.png";
import interest_3 from "../../assets/img/moia/interest_2.png";
import interest_6 from "../../assets/img/moia/interest_3.png";
import interest_2 from "../../assets/img/moia/interest_4.png";
import interest_1 from "../../assets/img/moia/interest_5.png";
import interest_4 from "../../assets/img/moia/interest_6.png";
import interest from "../../assets/img/moia/interest.gif";
import { useEffect } from "react";
import { useState } from "react";

const Interest = () => {
  // const [row1, setRow1] = useState([
  //   { id: 0, src: interest_1 },
  //   { id: 1, src: interest_2 },
  //   { id: 2, src: interest_3 },
  // ]);
  // const [row2, setRow2] = useState([
  //   { id: 0, src: interest_4 },
  //   { id: 1, src: interest_5 },
  //   { id: 2, src: interest_6 },
  // ]);
  const [image1, setImage1] = useState(interest_1);
  const [image2, setImage2] = useState(interest_2);
  const [image3, setImage3] = useState(interest_3);
  const [image4, setImage4] = useState(interest_4);
  const [image5, setImage5] = useState(interest_5);
  const [image6, setImage6] = useState(interest_6);

  const handleClick1 = () => {
    setImage1(interest);
    setTimeout(() => {
      setImage1(interest_1);
    }, 3000);
  };
  const handleClick2 = () => {
    setImage2(interest);
    setTimeout(() => {
      setImage2(interest_2);
    }, 3000);
  };
  const handleClick3 = () => {
    setImage3(interest);
    setTimeout(() => {
      setImage3(interest_3);
    }, 3000);
  };
  const handleClick4 = () => {
    setImage4(interest);
    setTimeout(() => {
      setImage4(interest_4);
    }, 3000);
  };
  const handleClick5 = () => {
    setImage5(interest);
    setTimeout(() => {
      setImage5(interest_5);
    }, 3000);
  };
  const handleClick6 = () => {
    setImage6(interest);
    setTimeout(() => {
      setImage6(interest_6);
    }, 3000);
  };

  return (
    <div className={styles.interest}>
      <div className={styles.background_r}>
        <img className={styles.interest_1} src={interest_p} alt="" />
        <img className={styles.interest_1} src={interest_p} alt="" />
        <img className={styles.interest_1} src={interest_p} alt="" />
      </div>
      <div className={styles.free_board} id="moia-moia">
        <div className={styles.row_rev}>
          {/* {row1.map((n, index) => ( */}
          <img
            style={{ animationDelay: 0.1 * 0.4 + "s" }}
            className={styles.interest_moia}
            src={image1}
            alt=""
            onClick={handleClick1}
          />
          <img
            style={{ animationDelay: 1.1 * 0.4 + "s" }}
            className={styles.interest_moia}
            src={image2}
            alt=""
            onClick={handleClick2}
          />
          <img
            style={{ animationDelay: 2.1 * 0.4 + "s" }}
            className={styles.interest_moia}
            src={image3}
            alt=""
            onClick={handleClick3}
          />
          {/* ))} */}
        </div>
        <div className={styles.row}>
          {/* {row2.map((n, index) => ( */}
          <img
            style={{ animationDelay: 0.5 * 0.6 + "s" }}
            className={styles.interest_moia}
            src={image4}
            alt=""
            onClick={handleClick4}
          />
          <img
            style={{ animationDelay: 1.5 * 0.6 + "s" }}
            className={styles.interest_moia}
            src={image5}
            alt=""
            onClick={handleClick5}
          />
          <img
            style={{ animationDelay: 2.5 * 0.6 + "s" }}
            className={styles.interest_moia}
            src={image6}
            alt=""
            onClick={handleClick6}
          />
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Interest;
