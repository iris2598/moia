import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./introduction.module.css";
import intro_back from "../../assets/img/intro_back.png";
import profile from "../../assets/img/intro/profile.jpeg";
import manu from "../../assets/img/intro/manu.jpeg";
import fan from "../../assets/img/intro/fan.jpeg";
import alarm from "../../assets/img/intro/alarm.jpeg";
import ball from "../../assets/img/intro/ball.jpeg";
import five from "../../assets/img/intro/five.jpeg";
import two from "../../assets/img/intro/two.jpeg";
import ball2 from "../../assets/img/intro/ball2.jpeg";
import train from "../../assets/img/intro/train.png";
import interest from "../../assets/img/intro/interest.gif";
import hungry from "../../assets/img/intro/hungry.gif";
import ignore from "../../assets/img/intro/ignore.gif";
import upset from "../../assets/img/intro/upset.gif";
import next from "../../assets/icon/next.svg";
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

  // useEffect(() => {
  //   window.addEventListener("wheel", (e) => {
  //     e.preventDefault();
  //   });

  //   const aiElement = document.querySelector(".ai");
  //   const productElement = document.querySelector(".product");
  //   const caseElement = document.querySelector(".case");
  //   const photoElement = document.querySelector(".photo");

  //   // 요소들이 존재할 때만 offsetTop 읽기
  //   if (aiElement && productElement && caseElement && photoElement) {
  //     const ai_location = aiElement.offsetTop;
  //     const product_location = productElement.offsetTop;
  //     const case_location = caseElement.offsetTop;
  //     const photo_location = photoElement.offsetTop;
  //   }
  // }, []);

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
      <div className={styles.ai}>
        <p className={styles.mid_title}>뭐야? 뭐야!</p>
        <div className={styles.ai_two}>
          <img className={styles.ai_two_i} src={upset} alt="" />
          <img className={styles.ai_two_i} src={interest} alt="" />
        </div>
        <div className={styles.ai_two}>
          <img className={styles.ai_two_i} src={ignore} alt="" />
          <img className={styles.ai_two_i} src={hungry} alt="" />
        </div>
        <div className={styles.ai_detail}>
          모야는 엉뚱한 AI 반려봇으로, 가끔은 예상할 수 없는 행동을 보여줍니다.{" "}
          <br />
          일상 속에서 엉뚱발랄한 모야를 만나보세요!
        </div>
      </div>
      <div className={styles.product}>
        <p className={styles.mid_title}>About MOIA</p>
        <img className={styles.product_img} src={profile} alt="" />
        {/* <div className={styles.product_content}>
          <p className={styles.product_detail1}></p>
          <p className={styles.product_detail2}></p>
          <p className={styles.product_detail3}></p>
        </div> */}
      </div>
      {/* <div className={styles.case}>
        <p className={styles.mid_title}>MOIA와 함께하면,</p>
        <img className={styles.case_img} />
        <div className={styles.case_content}>
          <p className={styles.case_detail1}></p>
          <p className={styles.case_detail2}></p>
          <p className={styles.case_detail3}></p>
        </div>
      </div> */}
      <div className={styles.photo}>
        <p className={styles.mid_title}>
          MOIA는 당신에게 어떤 존재가 되어줄까요?
        </p>
        <img className={styles.photo_img} />
        <div className={styles.photo_content}>
          <div className={styles.photo_col}>
            <img className={styles.photo_card} src={five} alt="" />
            <img className={styles.photo_card} src={ball} alt="" />
            <img className={styles.photo_card} src={fan} alt="" />
          </div>
          <div className={styles.photo_col2}>
            <img className={styles.photo_card} src={alarm} alt="" />
            <img className={styles.photo_card} src={train} alt="" />
            <img className={styles.photo_card} src={two} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.btn_container}>
        <button className={styles.btn}>MOIA를 입양하시겠어요?</button>
        <img src={next} alt="" />
      </div>
    </div>
  );
};

export default Introduction;
