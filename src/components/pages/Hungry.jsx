import styles from "./interactive.module.css";

import hungry_p from "../../assets/img/hungry_p.png";
import hungry_1 from "../../assets/img/moia/hungry_1.png";
import hungry_3 from "../../assets/img/moia/hungry_2.png";
import hungry_2 from "../../assets/img/moia/hungry_3.png";

import cable from "../../assets/img/cable.png";
import { useEffect, useRef } from "react";

const Hungry = () => {
  const num = [hungry_1, hungry_2, hungry_3];

  const line = document.querySelector(".line");
  //   const randomLine = () => {
  //     document.addEventListener("mousemove", (e) => {
  //       const mouseX = e.clientX;
  //       const mouseY = e.clientY;
  //       line.style.left += Math.floor(Math.random() * 10) * mouseX + "px";
  //       line.style.top += Math.floor(Math.random() * 10) * mouseY + "px";
  //     });
  //   };

  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    document.addEventListener("mousemove", moveCursor, { passive: true });
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className={styles.hungry}>
      <div className={styles.background}>
        <img className={styles.hungry_1} src={hungry_p} alt="" />
        <img className={styles.hungry_2} src={hungry_p} alt="" />
      </div>
      <div className={styles.line}></div>
      <div className={styles.hun_board}>
        {num.map((n, index) => (
          <div key={index}>
            <img className={styles.hungry_moia} src={n} alt="" />
          </div>
        ))}
      </div>
      <div id="cursor" className={styles.cursor} ref={cursorRef}>
        <img className={styles.cable} src={cable} alt="" />
      </div>
    </div>
  );
};

export default Hungry;
