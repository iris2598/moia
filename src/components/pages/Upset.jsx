import styles from "./interactive.module.css";
import upset_p from "../../assets/img/upset_p.png";
import upset_1 from "../../assets/img/moia/upset_1.png";
import upset_2 from "../../assets/img/moia/upset_2.png";
import upset_3 from "../../assets/img/moia/upset_3.png";
import upset_4 from "../../assets/img/moia/upset_4.png";
import upset_5 from "../../assets/img/moia/upset_5.png";
import { useEffect, useRef, useState } from "react";

const randomPosition = (max) => Math.floor(Math.random() * max);
const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

const Upset = () => {
  const num = [upset_1, upset_2, upset_3, upset_4, upset_5];

  const [positions, setPositions] = useState(
    num.map(() => ({
      left: randomPosition(window.innerWidth - 200),
      top: randomPosition(window.innerHeight - 250),
      dx: Math.random() * 3 - 1, // -2에서 2까지의 속도
      dy: Math.random() * 3 - 1, // -2에서 2까지의 속도
    }))
  );
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updatePositions = () => {
      setPositions((positions) =>
        positions.map((pos) => {
          const { x, y } = mouseRef.current;
          const dist = distance(x, y, pos.left + 50, pos.top + 50);
          let { dx, dy } = pos;

          if (dist < 120) {
            const angle = Math.atan2(pos.top + 50 - y, pos.left + 50 - x);
            dx += Math.cos(angle) * 2;
            dy += Math.sin(angle) * 2;
          }

          let newX = pos.left + dx;
          let newY = pos.top + dy;

          // 화면 경계 체크
          if (newX <= 0 || newX >= window.innerWidth - 200) dx *= -1;
          if (newY <= 0 || newY >= window.innerHeight - 300) dy *= -1;

          newX = Math.max(0, Math.min(newX, window.innerWidth - 200));
          newY = Math.max(0, Math.min(newY, window.innerHeight - 250));

          return {
            left: newX,
            top: newY,
            dx,
            dy,
          };
        })
      );
      requestAnimationFrame(updatePositions);
    };

    const animationId = requestAnimationFrame(updatePositions);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className={styles.upset}>
      <div className={styles.background}>
        <img className={styles.upset_1} src={upset_p} alt="" />
      </div>
      <div className={styles.free_board}>
        {num.map((n, index) => {
          const { left, top } = positions[index];
          const style = {
            position: "absolute",
            left: `${left}px`,
            top: `${top}px`,
          };
          return (
            <div key={index}>
              <img className={styles.upset_moia} style={style} src={n} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Upset;
