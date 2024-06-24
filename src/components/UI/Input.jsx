import { useState } from "react";
import styles from "./ui.module.css";

const Input = ({ label, hint }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.input_div}>
      <label className={styles.input_label}>{label}</label>
      <input
        className={styles.input_input}
        onChange={onChange}
        placeholder={hint}
        value={text}
      />
    </div>
  );
};

export default Input;
