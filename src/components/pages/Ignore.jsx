import styles from "./interactive.module.css";

import ignore_p from "../../assets/img/ignore_p.png";
import ignore_1 from "../../assets/img/moia/ignore_1.png";
import ignore_2 from "../../assets/img/moia/ignore_2.png";
import ignore_3 from "../../assets/img/moia/ignore_3.png";
import ignore_4 from "../../assets/img/moia/ignore_4.png";
import ignore_5 from "../../assets/img/moia/ignore_5.png";
import { useEffect } from "react";

const Ignore = () => {
  const ignore2 = [
    ignore_1,
    ignore_1,
    ignore_1,
    ignore_1,
    ignore_1,
    ignore_1,
    ignore_1,
  ];
  const ignore1 = [
    ignore_4,
    ignore_4,
    ignore_4,
    ignore_4,
    ignore_4,
    ignore_4,
    ignore_4,
  ];

  useEffect(() => {
    // Adding event listeners to all 'image' elements with the class 'ignore_moia' and 'ignore_moia_r'
    const images = document.querySelectorAll("#ignore_moia");
    images.forEach((image, index) => {
      image.addEventListener("click", () => {
        image.setAttribute("href", ignore_2);
        setTimeout(() => {
          image.setAttribute("href", ignore_3);
        }, 2000);
        setTimeout(() => {
          image.setAttribute("href", ignore_1);
        }, 6000);
      });
    });
    const images_r = document.querySelectorAll("#ignore_moia_r");
    images_r.forEach((image, index) => {
      image.addEventListener("click", () => {
        image.setAttribute("href", ignore_2);
        setTimeout(() => {
          image.setAttribute("href", ignore_5);
        }, 2000);
        setTimeout(() => {
          image.setAttribute("href", ignore_4);
        }, 6000);
      });
    });

    // Clean up the event listeners on component unmount
    return () => {
      images.forEach((image, index) => {
        image.removeEventListener("click", () => {
          console.log("초기화 완");
        });
      });
      images_r.forEach((image, index) => {
        image.removeEventListener("click", () => {
          console.log("초기화 완");
        });
      });
    };
  }, []);

  return (
    <div>
      <div className={styles.background}>
        <img className={styles.ignore_1} src={ignore_p} alt="" />
        <img className={styles.ignore_2} src={ignore_p} alt="" />
        <img className={styles.ignore_3} src={ignore_p} alt="" />
        <img className={styles.ignore_4} src={ignore_p} alt="" />
      </div>
      <div className={styles.board}>
        <svg className={styles.path1} viewBox="0 0 2000 400">
          <path
            d="M 0 300 C 100 250 400 150 750 250 C 1100 350 1200 150 1550 150 C 1800 150 2000 250 2000 250 "
            id="road1"
            fill="none"
            strokeWidth="2px"
            stroke="black"
          ></path>
          {ignore1.map((n, index) => (
            <image
              key={index}
              id="ignore_moia_r"
              href={n}
              className={styles.ignore_moia_r}
            >
              <animate
                attributeName="visibility"
                from="hidden"
                to="visible"
                begin={`${index * 1.45}s`}
                dur="0.1s"
                fill="freeze"
              />
              <animateMotion
                dur="10s"
                begin={`${index * 1.45}s`}
                rotate="auto"
                repeatCount="indefinite"
              >
                <mpath href="#road1" />
              </animateMotion>
            </image>
          ))}
        </svg>
        <svg className={styles.path2} viewBox="0 0 2000 400">
          <path
            d="M 0 300 C 150 250 300 250 550 350 C 800 450 1000 350 1250 350 C 1400 350 1700 375 2000 500 "
            id="road2"
            fill="white"
            strokeWidth="2px"
            stroke="black"
          ></path>
          {ignore2.map((n, index) => (
            <image
              key={index}
              id="ignore_moia"
              href={n}
              className={styles.ignore_moia}
            >
              <animate
                attributeName="visibility"
                from="hidden"
                to="visible"
                begin={`${index * 1.45}s`}
                dur="0.1s"
                fill="freeze"
              />
              <animateMotion
                dur="10s"
                begin={`${index * 1.45}s`}
                keyPoints="1;0"
                keyTimes="0;1"
                rotate="auto"
                repeatCount="indefinite"
              >
                <mpath href="#road2" />
              </animateMotion>
            </image>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default Ignore;
