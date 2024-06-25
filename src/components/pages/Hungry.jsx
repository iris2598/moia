import styles from "./interactive.module.css";

import hungry_p from "../../assets/img/hungry_p.png";
import hungry_1 from "../../assets/img/moia/hungry_1.png";
import hungry_3 from "../../assets/img/moia/hungry_2.png";
import hungry_2 from "../../assets/img/moia/hungry_3.png";
import hungry from "../../assets/img/moia/hungry.gif";

import cable from "../../assets/img/cable.png";
import { useEffect, useRef, useState } from "react";

const Hungry = () => {
  const num = [hungry_1, hungry_2, hungry_3];

  // const line = document.querySelector(".line");
  //   const randomLine = () => {
  //     document.addEventListener("mousemove", (e) => {
  //       const mouseX = e.clientX;
  //       const mouseY = e.clientY;
  //       line.style.left += Math.floor(Math.random() * 10) * mouseX + "px";
  //       line.style.top += Math.floor(Math.random() * 10) * mouseY + "px";
  //     });
  //   };

  const cursorRef = useRef(null);
  const [image1, setImage1] = useState(hungry_1);
  const [image2, setImage2] = useState(hungry_3);
  const [image3, setImage3] = useState(hungry_2);

  // const handleClick1 = () => {
  //   if (image1 === hungry_3) {
  //     setImage1(hungry);
  //     setTimeout(() => {
  //       setImage1(num[Math.floor(Math.random() * 3)]);
  //     }, 3000);
  //   }
  //   console.log("gpdl");
  // };
  // const handleClick2 = () => {
  //   if (image2 === hungry_3) {
  //     setImage2(hungry);
  //     setTimeout(() => {
  //       setImage2(num[Math.floor(Math.random() * 3)]);
  //     }, 3000);
  //   }
  //   console.log("gpdl");
  // };
  // const handleClick3 = () => {
  //   if (image3 === hungry_3) {
  //     setImage3(hungry);
  //     setTimeout(() => {
  //       setImage3(num[Math.floor(Math.random() * 3)]);
  //     }, 3000);
  //   }
  //   console.log("gpdl");
  // };
  const handleClick = (image, setImage) => {
    if (image === hungry_3) {
      setImage(hungry);
      setTimeout(() => {
        setImage(num[Math.floor(Math.random() * 3)]);
      }, 3000);
    }
  };

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
        <img
          className={styles.hungry_moia}
          src={image1}
          alt=""
          onClick={() => handleClick(image1, setImage1)}
        />
        <img
          className={styles.hungry_moia}
          src={image2}
          alt=""
          onClick={() => handleClick(image2, setImage2)}
        />
        <img
          className={styles.hungry_moia}
          src={image3}
          alt=""
          onClick={() => handleClick(image3, setImage3)}
        />
      </div>
      <div id="cursor" className={styles.cursor} ref={cursorRef}>
        <img className={styles.cable} src={cable} alt="" />
      </div>
    </div>
  );
};

export default Hungry;
