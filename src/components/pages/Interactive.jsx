import styles from "./interactive.module.css";

import Hungry from "./Hungry";
import Upset from "./Upset";
import Interest from "./Interest";
import Ignore from "./Ignore";

import { useState } from "react";

const Interactive = () => {
  const component = [Hungry, Upset, Interest, Ignore];
  const [previousNumber, setPreviousNumber] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [showHungry, setShowHungry] = useState(false);
  const [showUpset, setShowUpset] = useState(true);
  const [showInterest, setShowInterest] = useState(false);
  const [showIgnore, setShowIgnore] = useState(false);

  const shuffleTheme = () => {
    let newRandomNumber;
    do {
      newRandomNumber = Math.floor(Math.random() * component.length); // 0부터 3 사이의 랜덤 숫자
    } while (newRandomNumber === previousNumber);

    setPreviousNumber(newRandomNumber); // 이전 숫자 업데이트
    setRandomNumber(newRandomNumber);

    if (randomNumber == 0) {
      setShowHungry(true);
      setShowUpset(false);
      setShowInterest(false);
      setShowIgnore(false);
    } else if (randomNumber == 1) {
      setShowHungry(false);
      setShowUpset(true);
      setShowInterest(false);
      setShowIgnore(false);
    } else if (randomNumber == 2) {
      setShowHungry(false);
      setShowUpset(false);
      setShowInterest(true);
      setShowIgnore(false);
    } else {
      setShowHungry(false);
      setShowUpset(false);
      setShowInterest(false);
      setShowIgnore(true);
    }
    console.log("오엥");
  };

  return (
    <div className={styles.interactive}>
      {showHungry && <Hungry />}
      {showUpset && <Upset />}
      {showInterest && <Interest />}
      {showIgnore && <Ignore />}
      <div className={styles.btn_container} onClick={shuffleTheme}>
        <button className={styles.shuffle_btn}>SHUFFLE</button>
      </div>
    </div>
  );
};

export default Interactive;
