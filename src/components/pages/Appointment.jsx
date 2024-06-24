import { useEffect, useState } from "react";
import Calendar from "../UI/Calendar";
import styles from "./appointment.module.css";
import next from "../../assets/icon/next.svg";
import hospital from "../../assets/img/hospital.png";
import model_1 from "../../assets/img/moia/model_1.png";
import model_2 from "../../assets/img/moia/model_2.png";
import depart_1 from "../../assets/img/moia/depart_1.png";
import depart_2 from "../../assets/img/moia/depart_2.png";
import depart_3 from "../../assets/img/moia/depart_3.png";

const Appointment = () => {
  const moias = [
    {
      id: "A03-240516",
      img: model_1,
    },
    {
      id: "A01-221224",
      img: model_2,
    },
  ];
  const departs = [
    {
      id: "성형외과",
      text: ["귀, 허리, 바퀴가 이상해요", "상처가 나고 부러졌어요"],
      img: depart_1,
    },
    {
      id: "신경외과",
      text: ["눈, 불빛이 이상해요", "소리가 계속 나요"],
      img: depart_2,
    },
    {
      id: "내과",
      text: ["너무 자주 충전해요", "반응이 이상해요"],
      img: depart_3,
    },
    { id: "기타", text: "", img: "" },
  ];

  const [imageHeight, setImageHeight] = useState(320);
  const [top, setTop] = useState(320);
  const [isInvisible, setIsInvisible] = useState(100);

  const handleScroll = () => {
    const maxHeight = 320;
    const minHeight = -400;

    let scrollPercent = window.scrollY / window.innerHeight;
    if (scrollPercent <= 0.1) {
      setIsInvisible(100);
    } else if (scrollPercent > 0.1) {
      setIsInvisible(0);
    } else if (scrollPercent > 0.3) {
      scrollPercent = 1; // 최대값 설정
    }
    const newHeight = maxHeight - (maxHeight - minHeight) * scrollPercent;
    setImageHeight(newHeight);
    setTop(newHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.l_title}>병원 예약</p>
        <p className={styles.l_content} style={{ opacity: isInvisible }}>
          MOIA가 어딘가 아파보인다면 병원을 방문해주세요. 예약 후 방문해주시면
          빠른 시일내로 치료해드리겠습니다.
          <br />
          유능한 선생님들이 상시대기 중이니 언제든지 문의남겨주세요.
        </p>
        <img src={hospital} style={{ height: `${imageHeight}px` }} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.card_container}>
          <p className={styles.container_title}>MOIA 선택</p>
          {moias.map((m, index) => (
            <div key={index} className={styles.l_card}>
              <p className={styles.l_card_title}>{m.id}</p>
              <img src={m.img} alt="" className={styles.l_card_img} />
            </div>
          ))}
        </div>
        <div className={styles.card_container}>
          <p className={styles.container_title}>진료과 선택</p>
          {departs.map((d, index) => (
            <div
              key={index}
              className={d.text.length > 1 ? styles.m_card : styles.ms_card}
            >
              <img src={d.img} alt="" className={styles.m_card_img} />
              <div className={styles.m_card_content}>
                <p className={styles.m_card_title}>{d.id}</p>
                {d.text.length > 1 && (
                  <p className={styles.m_card_text}>
                    {d.text[0]}
                    <br />
                    {d.text[1]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.card_container}>
          <p className={styles.container_title}>예약 일시</p>
          <Calendar />
          <button className={styles.btn}>
            예약하기
            <img className={styles.btn_img} src={next} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
