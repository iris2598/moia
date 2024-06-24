import { useEffect, useState } from "react";
import styles from "./adoption.module.css";
import moya from "../../assets/img/moya.png";
import NumBtn from "../UI/NumBtn";
import TwoBtn from "../UI/TwoBtn";
import Input from "../UI/Input";
import check from "../../assets/icon/check.svg";

const Adoption = () => {
  const keyword1 = ["엉뚱함", "사람을 좋아함", "호기심", "발랄"];
  const keyword2 = ["장난꾸러기", "낯가림", "생각이 많음"];
  const info_input = [
    { label: "이름", hint: "이름을 입력하세요" },
    { label: "성별", hint: "성별을 선택하세요" },
    { label: "주소", hint: "서울시 서대문구 삼성관" },
    { label: "전화번호", hint: "010-1234-5678" },
  ];
  const cond_input = [
    { label: "과거에 MOIA와 함께 생활한 경험이 있나요?", option: false },
    { label: "지금 함께 생활하고 있는 반려동물이 있나요?", option: false },
    { label: "과거에 반려동물과 함께 생활한 경험이 있나요?", option: false },
    {
      label: "입양 결정을 함께 생활하는 구성원 모두 동의하나요?",
      option: false,
    },
    { label: "함께 생활하는 구성원은 몇명인가요?", option: true },
    { label: "안정적인 주거 환경이 마련되어 있나요?", option: false },
  ];
  const consent = [
    { label: "MOIA를 반려로 받아들일 것이다.", option: "" },
    { label: "MOIA와 함께하는 일상에 최선을 다할 것이다.", option: "" },
    { label: "MOIA와 꾸준히 소통하도록 노력할 것이다.", option: "" },
    { label: "MOIA를 이해하려 노력할 것이다.", option: "" },
    { label: "MOIA를 해하거나 방임하지 않을 것이다.", option: "" },
    {
      label: "MOIA가 다치거나 오작동할 시, 병원 예약 후 센터로 방문할 것이다.",
      option: "",
    },
    {
      label: "MOIA를 임의로 파양 및 폐기하지 않을 것이다.",
      option: "* 원할 시 병원 기타로 예약 후 센터 방문",
    },
  ];

  const [imageHeight, setImageHeight] = useState(530);
  const [top, setTop] = useState(530);
  const [isInvisible, setIsInvisible] = useState(100);

  const handleScroll = () => {
    const maxHeight = 530;
    const minHeight = 320;

    let scrollPercent = window.scrollY / window.innerHeight;
    if (scrollPercent <= 0.1) {
      setIsInvisible(100);
    } else if (scrollPercent > 0.1) {
      setIsInvisible(0);
    } else if (scrollPercent > 0.5) {
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
        <img src={moya} alt="" style={{ height: `${imageHeight}px` }} />
        <div className={styles.title_container}>
          <p className={styles.l_title}>입양 신청서</p>
          <p className={styles.l_content}>
            사랑스러운 반려봇 MOIA를 만나기 위한 입양 절차를 시작해 보세요.
            <br />
            MOIA는 당신의 새로운 가족이 될 준비가 되었어요.
          </p>
        </div>
        <div className={styles.sub_container} style={{ opacity: isInvisible }}>
          <div className={styles.keywords}>
            <div className={styles.keyword_row}>
              {keyword1.map((k, index) => (
                <div key={index} className={styles.keyword}>
                  {k}
                </div>
              ))}
            </div>
            <div className={styles.keyword_row}>
              {keyword2.map((k, index) => (
                <div key={index} className={styles.keyword}>
                  {k}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.detail}>
            * MOIA의 이름은 만나서 지어주세요.
            <br />* AI 학습으로 사용자에 맞춰 성격이 변해요.
          </div>
        </div>
      </div>
      <div className={styles.content} style={{ top: `${top}px` }}>
        <div className={styles.info}>
          <div className={styles.s_title}>신청인 정보</div>
          <div className={styles.s_input}>
            {info_input.map((input, index) => (
              <Input label={input.label} hint={input.hint} />
            ))}
          </div>
        </div>
        <div className={styles.condition}>
          <div className={styles.m_title}>신청 조건</div>
          <div className={styles.m_input}>
            {cond_input.map((input, index) => (
              <div key={index} className={styles.m_input_div}>
                <label>{input.label}</label>
                {input.option ? <NumBtn /> : <TwoBtn />}
              </div>
            ))}
          </div>
          <div className={styles.m_title_2}>동의서</div>
          <div className={styles.m_input}>
            {consent.map((input, index) => (
              <div key={index} className={styles.m_input_div}>
                <div className={styles.option_div}>
                  <label>{input.label}</label>
                  {input.option.length > 1 && (
                    <div className={styles.option_detail}>{input.option}</div>
                  )}
                </div>
                <TwoBtn />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.btn_container}>
        <img className={styles.check} src={check} alt="" />
        <button className={styles.btn}>작성 완료</button>
      </div>
    </div>
  );
};

export default Adoption;
