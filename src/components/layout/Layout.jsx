import { useNavigate } from "react-router-dom";
import styles from "./layout.module.css";
import moia from "../../assets/img/moia.png";
import appointmentIcon from "../../assets/icon/appointment.svg";
import introductionIcon from "../../assets/icon/introduction.svg";
import loginIcon from "../../assets/icon/login.svg";

const Layout = () => {
  const navigate = useNavigate();

  const menus = [
    { item: "introduction", text: "모야 소개", icon: introductionIcon },
    { item: "appointment", text: "병원 예약", icon: appointmentIcon },
    { item: "login", text: "로그인", icon: loginIcon },
  ];

  return (
    <div className={styles.layout}>
      <img
        className={styles.logo}
        src={moia}
        alt="moia logo"
        onClick={() => navigate(`/moia`)}
      />
      <div className={styles.item_container}>
        {menus.map((menu, index) => (
          <div
            key={index}
            className={styles.item}
            onClick={() => navigate(`/${menu.item}`)}
          >
            <div className={styles.img}>
              <img src={menu.icon} alt={menu.item} />
            </div>
            <div className={styles.text}>{menu.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
