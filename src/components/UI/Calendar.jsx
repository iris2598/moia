import styles from "./calendar.module.css";
import down from "../../assets/icon/down.svg";
import { useState } from "react";
import { useEffect } from "react";

const now = new Date();
const thisYear = now.getFullYear();
const thisMonth = now.getMonth();
const thisDate = now.getDate();
const thisDay = now.getDay();
const thisFirstDay = new Date(thisYear, thisMonth, 1).getDay();
const thisLastDate = new Date(thisYear, thisMonth + 1, 0).getDate();

const Calendar = () => {
  const weekday = ["일", "월", "화", "수", "목", "금", "토"];
  const [year, setYear] = useState(thisYear);
  const [month, setMonth] = useState(thisMonth);
  const [date, setDate] = useState(thisDate);
  const [day, setDay] = useState(thisDay);
  const [firstDay, setFirstDay] = useState(thisFirstDay);
  const [lastDate, setLastDate] = useState(thisLastDate);
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setFirstDay(new Date(year, month, 1).getDay());
    setLastDate(new Date(year, month + 1, 0).getDate());
  }, [year, month]);

  const getCalendar = () => {
    const newCalendar = [];
    let newDate = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i == 0 && j + 1 < day) {
          week.push(null);
        } else if (newDate > lastDate) {
          week.push(null);
        } else {
          week.push(newDate);
          newDate++;
        }
      }
      newCalendar.push(week);
    }
    setCalendar(newCalendar);
  };

  const handleClick = () => {};

  useEffect(() => {
    getCalendar();
  }, [firstDay, lastDate]);

  return (
    <div className={styles.container}>
      <div className={styles.cal_toggle}>
        <p className={styles.toggle_name}>
          {year}.{month + 1 < 10 ? `0${month + 1}` : month + 1}
        </p>
        <button className={styles.toggle} onClick={handleClick}>
          <img src={down} alt="" />
        </button>
      </div>
      <div className={styles.cal_body}>
        <div className={styles.week}>
          {weekday.map((week, index) => (
            <div className={styles.block}>{week}</div>
          ))}
        </div>
        <div className={styles.days}>
          {calendar.map((week, weekIndex) => (
            <div key={weekIndex} className={styles.week}>
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={day ? styles.one_day : styles.no_day}
                >
                  {day}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cal_legend}>
        <div className={styles.legend_container}>
          <div className={styles.full}></div>
          <p className={styles.legend}>예약일자</p>
        </div>
        <div className={styles.legend_container}>
          <div className={styles.dash}></div>
          <p className={styles.legend}>퇴원예정일자</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
