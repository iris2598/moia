import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./introduction.module.css";
import intro_back from "../../assets/img/intro_back.png";
import more from "../../assets/icon/more.svg";
import three_legend from "../../assets/img/3d/three_legend.png";

import move_1 from "../../assets/img/3d/move_1.png";
import move_2 from "../../assets/img/3d/move_2.png";
import move_3 from "../../assets/img/3d/move_3.png";
import move_4 from "../../assets/img/3d/move_4.png";
import move_5 from "../../assets/img/3d/move_5.png";
import move_6 from "../../assets/img/3d/move_6.png";
import move_7 from "../../assets/img/3d/move_7.png";
import move_8 from "../../assets/img/3d/move_8.png";
import move_9 from "../../assets/img/3d/move_9.png";
import move_10 from "../../assets/img/3d/move_10.png";
import move_11 from "../../assets/img/3d/move_11.png";
import move_12 from "../../assets/img/3d/move_12.png";
import move_13 from "../../assets/img/3d/move_13.png";
import move_14 from "../../assets/img/3d/move_14.png";
import move_15 from "../../assets/img/3d/move_15.png";
import move_16 from "../../assets/img/3d/move_16.png";
import move_17 from "../../assets/img/3d/move_17.png";
import move_18 from "../../assets/img/3d/move_18.png";
import move_19 from "../../assets/img/3d/move_19.png";
import move_20 from "../../assets/img/3d/move_20.png";
import move_21 from "../../assets/img/3d/move_21.png";
import move_22 from "../../assets/img/3d/move_22.png";
import move_23 from "../../assets/img/3d/move_23.png";
import move_24 from "../../assets/img/3d/move_24.png";
import move_25 from "../../assets/img/3d/move_25.png";
import move_26 from "../../assets/img/3d/move_26.png";
import move_27 from "../../assets/img/3d/move_27.png";
import move_28 from "../../assets/img/3d/move_28.png";
import move_29 from "../../assets/img/3d/move_29.png";
import move_30 from "../../assets/img/3d/move_30.png";
import move_31 from "../../assets/img/3d/move_31.png";

const images = [
  move_1,
  move_2,
  move_3,
  move_4,
  move_5,
  move_6,
  move_7,
  move_8,
  move_9,
  move_10,
  move_11,
  move_12,
  move_13,
  move_14,
  move_15,
  move_16,
  move_17,
  move_18,
  move_19,
  move_20,
  move_21,
  move_22,
  move_23,
  move_24,
  move_25,
  move_26,
  move_27,
  move_28,
  move_29,
  move_30,
  move_31,
];

const Introduction = () => {
  const navigate = useNavigate();

  const [save, setSave] = useState(0);
  const [dragged, setDragged] = useState(0);
  const [sum, setSum] = useState(0);
  const sensitivity = 50;
  const [clickSrc, setClickSrc] = useState(images[0]);
  const [changeSrc, setChangeSrc] = useState(images[0]);

  const threeImgRef = useRef(null);
  const threeRef = useRef(null);

  useEffect(() => {
    const three_img = threeImgRef.current;
    const three = threeRef.current;

    if (!three_img || !three) return;

    const mouseMoveHandler = (e, startX) => {
      const newDragged = Math.floor((e.clientX - startX) / sensitivity);
      const newSum = 31 - save + newDragged;

      let updatedSum = newSum;
      if (newDragged >= 0) {
        updatedSum = newSum % images.length;
      } else if (newSum < 0) {
        updatedSum = newSum + images.length;
      }

      setDragged(newDragged);
      setSum(updatedSum);
      setChangeSrc(images[updatedSum % images.length]);
    };

    const mouseDownHandler = (e) => {
      const startX = e.clientX;
      setClickSrc(three_img.src);

      const onMouseMove = (moveEvent) => {
        mouseMoveHandler(moveEvent, startX);
      };

      const onMouseUp = () => {
        three.removeEventListener("mousemove", onMouseMove);
        three.style.cursor = "default";
        setSave((prevSave) => (prevSave + dragged) % images.length);
        setDragged(0);
        window.removeEventListener("mouseup", onMouseUp);
      };

      three.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      three.style.cursor = "grabbing";
    };

    three_img.addEventListener("mousedown", mouseDownHandler);

    return () => {
      three_img.removeEventListener("mousedown", mouseDownHandler);
    };
  }, [save, sensitivity, dragged]);

  useEffect(() => {
    if (threeImgRef.current) {
      threeImgRef.current.src = changeSrc;
    }
  }, [changeSrc]);

  return (
    <div className={styles.container}>
      <img className={styles.intro_back} src={intro_back} alt="" />
      <svg className={styles.line1} viewBox="0 0 2000 1000">
        <path
          d="M 0 400 C 0 400 100 300 400 300 C 850 300 950 500 1550 500 C 1850 500 2000 450 2000 450 "
          id="road1"
          fill="none"
          strokeWidth="3px"
          stroke="#886FE8"
        ></path>
      </svg>
      <svg className={styles.line2} viewBox="0 0 2000 1000">
        <path
          d="M 0 400 C 200 250 300 200 500 200 C 750 200 950 350 1300 400 C 1650 450 1750 350 2000 350 "
          id="road2"
          fill="none"
          strokeWidth="3px"
          stroke="#886FE8"
        ></path>
      </svg>
      <svg className={styles.line3} viewBox="0 0 2000 1000">
        <path
          d="M 0 300 C 100 250 250 250 250 250 C 700 250 1450 700 1850 550 C 2000 500 2000 450 2000 450 "
          id="road3"
          fill="none"
          strokeWidth="3px"
          stroke="#886FE8"
        ></path>
      </svg>
      <div className={styles.intro}>
        <div className={styles.content}>
          <div className={styles.title}>
            <p className={styles.sub_title}>엉뚱한 AI반려봇</p>
            <p className={styles.main_title}>MOIA</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.para1}>
              함께 생활하고 소통하는 과정에서
              <br />
              MOIA는 사용자를, 사용자는 MOIA를
              <br />
              배워나가며 서로의 생활 속에 유의미한
              <br /> 관계를 형성할 수 있습니다.
            </p>
            <p className={styles.para2}>MOIA는 어떤 엉뚱함을 보여줄까요?</p>
          </div>
          <button
            className={styles.adopt_btn}
            onClick={() => navigate(`/adoption`)}
          >
            입양하기
          </button>
        </div>
        <div ref={threeRef} className={styles.three}>
          <img className={styles.three_legend} src={three_legend} alt="" />
          <img
            ref={threeImgRef}
            className={styles.three_img}
            src={changeSrc}
            alt=""
          />
        </div>
      </div>
      <div className={styles.more_container}>
        <img className={styles.more} src={more} alt="" />
      </div>
      <div className={styles.ai}>인공지능 크리쳐 </div>
      <div className={styles.product}>자유로운 이동과 움직임</div>
      <div className={styles.case}>MOIA와 함께하면,</div>
      <div className={styles.photo}>
        MOIA는 당신에게 어떤 존재가 되어줄까요?
      </div>
      <div className={styles.btn}>MOIA를 입양하시겠어요?</div>
    </div>
  );
};

export default Introduction;
